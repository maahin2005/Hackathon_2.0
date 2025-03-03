import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setScore } from "../../redux/features/candidate/candidate";

const FetchScore = ({ employee }) => {
  const SCORE_BASE_URL = import.meta.env.VITE_SCORE_URL;
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [repos, setRepos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [standardCommits, setStandardCommits] = useState("");

  const fetchRepos = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${employee.githubUsername}/repos`,
        {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
          },
        }
      );
      const repoNames = response.data.map((repo) => repo.name);
      setRepos(repoNames);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/categories`);
      if (res.data.success) {
        setCategories(res.data?.data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const generateMyScore = async () => {
    setLoading(true);
    try {
      const res = await axios.post(`${SCORE_BASE_URL}/compare/`, {
        username: employee.githubUsername,
        repo: selectedRepo,
        standard_commits: standardCommits,
      });
      console.log("Score response:", res);
      setLoading(false);
      const score = res?.data?.final_similarity_score;
      dispatch(setScore(score));
    } catch (error) {
      setLoading(false);
      console.error("Error generating score:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchRepos();
  }, []);

  return (
    <div className="mt-4 p-4 bg-white rounded-md shadow-md">
      <h3 className="text-md font-semibold">Improve Your Score</h3>
      <p className="text-sm text-gray-600">
        Select a category to focus on and enhance your skills.
      </p>

      {/* Repository Dropdown */}
      <select
        className="mt-2 w-full p-2 border rounded-md"
        value={selectedRepo}
        onChange={(e) => setSelectedRepo(e.target.value)}
      >
        <option value="" disabled>
          Select your top Repository
        </option>
        {repos.map((repository, index) => (
          <option key={index} value={repository}>
            {repository}
          </option>
        ))}
      </select>

      {/* Category Dropdown */}
      <select
        className="mt-2 w-full p-2 border rounded-md"
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          const selected = categories.find(
            (cat) => cat.name === e.target.value
          );
          if (selected) setStandardCommits(selected.commits);
        }}
      >
        <option value="" disabled>
          Select type
        </option>
        {categories.map((category, index) => (
          <option key={index} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>

      <button
        onClick={generateMyScore}
        className="my-2 px-4 py-2 bg-blue-400 cursor-pointer hover:bg-blue-600 text-white rounded-md"
      >
        {loading ? "Loading..." : "Generate my score"}
      </button>
    </div>
  );
};

export default FetchScore;
