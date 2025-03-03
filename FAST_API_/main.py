from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer
import numpy as np
import requests
from typing import List
from dotenv import load_dotenv
import os

load_dotenv()

# Initialize FastAPI app
app = FastAPI()
GITHUB_ACCESS_TOKEN = os.getenv("GITHUB_ACCESS_TOKEN")
# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to specific frontend domains in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load Sentence Transformer model
model = SentenceTransformer("all-MiniLM-L6-v2")

# Pydantic Model
class CommitData(BaseModel):
    username: str
    repo: str
    standard_commits: list[str]

# Mock function to fetch user commits (replace with actual GitHub API)


GITHUB_API_URL = "https://api.github.com"

def get_user_commits(username: str, repo: str) -> List[str]:
    """Fetch latest commit messages from a GitHub repository."""
    url = f"{GITHUB_API_URL}/repos/{username}/{repo}/commits"
    
    headers = {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": f"token {GITHUB_ACCESS_TOKEN}",  # Replace with your GitHub token
    }

    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # Raise an error for bad responses (4xx, 5xx)
        
        commits = response.json()
        commit_messages = [commit["commit"]["message"] for commit in commits]

        return commit_messages

    except requests.exceptions.RequestException as e:
        print(f"Error fetching commits: {e}")
        return []

# Calculate similarity safely
def calculate_similarity(standard_commits: list[str], user_commits: list[str]) -> list[dict]:
    """Compute cosine similarity between standard and user commits."""
    try:
        standard_embeddings = model.encode(standard_commits, convert_to_numpy=True)
        user_embeddings = model.encode(user_commits, convert_to_numpy=True)
        
        results = []
        for i, user_commit in enumerate(user_commits):
            norms = np.linalg.norm(standard_embeddings, axis=1) * np.linalg.norm(user_embeddings[i])
            if np.any(norms == 0):  # Avoid division by zero
                similarities = np.zeros_like(norms)
            else:
                similarities = np.dot(standard_embeddings, user_embeddings[i]) / norms
            
            best_match_index = np.argmax(similarities)
            results.append({
                "user_commit": user_commit,
                "best_match_standard": standard_commits[best_match_index],
                "similarity_score": float(similarities[best_match_index]),
            })
        
        return results

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error calculating similarity: {str(e)}")
@app.get("/")

async def check_server_status():
    return {"status":"Server is healthy....Enjoy"}

# API Endpoint
@app.post("/compare/")
async def compare_commits(data: CommitData):
    try:
        user_commits = get_user_commits(data.username, data.repo)
        comparison_results = calculate_similarity(data.standard_commits, user_commits)

        # Compute final similarity score (average of all individual scores)
        final_score = np.mean([result["similarity_score"] for result in comparison_results]) if comparison_results else 0.0

        return {
            "username": data.username,
            "repo": data.repo,
            "comparison_results": comparison_results,
            "final_similarity_score": float(final_score),  # Convert for JSON serialization
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing request: {str(e)}")
