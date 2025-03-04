import React, { useEffect, useState } from "react";

function CandidateGithubData({ githubUsername }) {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!githubUsername) return;

    const fetchGitHubData = async () => {
      try {
        const userResponse = await fetch(
          `https://api.github.com/users/${githubUsername}`
        );
        const reposResponse = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?per_page=100`
        );

        const starredResponse = await fetch(
          `https://api.github.com/users/${githubUsername}/starred?per_page=100`
        );

        if (!userResponse.ok || !reposResponse.ok || !starredResponse.ok) {
          throw new Error("Failed to fetch GitHub data");
        }

        const userData = await userResponse.json();
        const reposData = await reposResponse.json();
        const starredData = await starredResponse.json();

        // Calculate most used languages
        const languageCount = {};
        reposData.forEach((repo) => {
          if (repo.language) {
            languageCount[repo.language] =
              (languageCount[repo.language] || 0) + 1;
          }
        });
        const mostUsedLanguages = Object.entries(languageCount)
          .sort((a, b) => b[1] - a[1])
          .map(([language]) => language);

        setGithubData({
          avatar_url: userData.avatar_url,
          name: userData.name,
          bio: userData.bio,
          followers: userData.followers,
          following: userData.following,
          public_repos: userData.public_repos,
          starred_repos: starredData.length,
          mostUsedLanguages,
          topRepos: reposData
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6),
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [githubUsername]);

  if (loading) return <p>Loading GitHub data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="my-10 ">
      <h1 className="py-3 my-2 font-[Kanit] text-3xl border-b border-gray-200">
        Github Profile Overview
      </h1>
      <div className="flex items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{githubData.name}</h2>
          <p className="text-gray-600">{githubData.bio}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <p className="text-gray-700">
          Followers: <span className="font-bold">{githubData.followers}</span>
        </p>
        <p className="text-gray-700">
          Following: <span className="font-bold">{githubData.following}</span>
        </p>
        <p className="text-gray-700">
          Public Repos:{" "}
          <span className="font-bold">{githubData.public_repos}</span>
        </p>
        <p className="text-gray-700">
          Starred Repos:{" "}
          <span className="font-bold">{githubData.starred_repos}</span>
        </p>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold">Most Used Languages</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {githubData?.mostUsedLanguages.length === 0 && "--"}

          {githubData.mostUsedLanguages.map((lang, index) => (
            <span
              key={index}
              className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-bold">Top Repositories</h3>
        <div className="my-3 grid md:grid-cols-2 gap-3">
          {githubData?.topRepos.length === 0 && "--"}
          {githubData?.topRepos.map((repo, index) => (
            <div
              key={index}
              className="p-6 my-3 rounded-xl shadow-md bg-white hover:shadow-2xl transition-all transform hover:-translate-y-1 hover:scale-105 duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <span className="truncate">{repo.name}</span>
                {repo.fork && (
                  <span className="text-sm text-gray-500">(Forked)</span>
                )}
              </h3>
              <p className="text-gray-600 mt-2 text-sm line-clamp-3">
                {repo.description || "No description available"}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                >
                  View Repository →
                </a>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>🔀 {repo.forks_count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CandidateGithubData;
