from fastapi import FastAPI
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer
import numpy as np

app = FastAPI()
model = SentenceTransformer("all-MiniLM-L6-v2")  # Using a lightweight embedding model

class CommitData(BaseModel):
    username: str
    repo: str
    standard_commits: list[str]

def get_user_commits(username: str, repo: str) -> list[str]:
    """Simulate fetching commit messages from GitHub (replace with actual API call)."""
    return [
        "Fixed authentication issue",
        "Updated database schema",
        "Refactored user login",
        "Added new API endpoint",
    ]

def calculate_similarity(standard_commits: list[str], user_commits: list[str]) -> list[dict]:
    """Calculate cosine similarity between standard and user commits."""
    standard_embeddings = model.encode(standard_commits, convert_to_numpy=True)
    user_embeddings = model.encode(user_commits, convert_to_numpy=True)
    
    results = []
    for i, user_commit in enumerate(user_commits):
        similarities = np.dot(standard_embeddings, user_embeddings[i]) / (
            np.linalg.norm(standard_embeddings, axis=1) * np.linalg.norm(user_embeddings[i])
        )
        best_match_index = np.argmax(similarities)
        results.append({
            "user_commit": user_commit,
            "best_match_standard": standard_commits[best_match_index],
            "similarity_score": float(similarities[best_match_index]),
        })
    
    return results

@app.post("/compare/")
async def compare_commits(data: CommitData):
    user_commits = get_user_commits(data.username, data.repo)
    comparison_results = calculate_similarity(data.standard_commits, user_commits)

    # Compute final similarity score (average of all individual scores)
    final_score = np.mean([result["similarity_score"] for result in comparison_results])

    return {
        "username": data.username,
        "repo": data.repo,
        "comparison_results": comparison_results,
        "final_similarity_score": float(final_score)  # Convert to float for JSON compatibility
    }


