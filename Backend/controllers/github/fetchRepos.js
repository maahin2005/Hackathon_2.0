import axios from "axios";
//

// Fetch GitHub Repos for an Authenticated User
export const fetchRepos = async (req, res) => {
  try {
    const { githubUsername } = req.body.user; // Ensure user is authenticated

    if (!githubUsername) {
      return res.status(400).json({ error: "GitHub username not found" });
    }

    // Fetch Repos from GitHub API
    const response = await axios.get(
      `https://api.github.com/users/${githubUsername}/repos`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`, // Use OAuth token if needed
        },
      }
    );

    // Extract only repo names using map()
    const repoNames = response.data.map((repo) => repo.name);

    return res.json(repoNames);
  } catch (error) {
    console.error("Error fetching repos:", error.message);
    return res.status(500).json({ error: "Failed to fetch repositories" });
  }
};

// Fetch and Categorize Repos by Language
export const fetchCategories = async (req, res) => {
  try {
    const { githubUsername } = req.user;

    if (!githubUsername) {
      return res.status(400).json({ error: "GitHub username not found" });
    }

    // Fetch Repos
    const response = await axios.get(
      `https://api.github.com/users/${githubUsername}/repos`
    );

    // Categorize by Language
    const categories = {};
    response.data.forEach((repo) => {
      const language = repo.language || "Unknown";
      if (!categories[language]) {
        categories[language] = [];
      }
      categories[language].push(repo.name);
    });

    return res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    return res.status(500).json({ error: "Failed to fetch categories" });
  }
};
