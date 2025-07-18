import React, { useEffect, useState } from "react";
import { fetchGitHubUser } from "../api/githubApi";
import type { ColorScheme, FontStyle, GitHubUser } from "../types";
import DogTagPreview from "../components/dogTagPreview";
import DogTagForm from "../components/dogTagForm";
import { COLOR_SCHEMES, FONT_STYLES } from "../constants";

const Home: React.FC = () => {
  const [userName, setUserName] = useState<string>("octocat");
  const [githubData, setGithubData] = useState<GitHubUser | null>(null);
  const [activeTheme, setActiveTheme] = useState<ColorScheme>(COLOR_SCHEMES[0]);
  const [activeFont, setActiveFont] = useState<FontStyle>(FONT_STYLES[0]);

  useEffect(() => {
    handleFetchUser();
  }, []);

  const handleFetchUser = async () => {
    if (!userName) return;
    try {
      const user = await fetchGitHubUser(userName);
      setGithubData(user);
    } catch (error) {
      console.error(error);
    }
  };

 
  const handleThemeChange = (theme: ColorScheme) => {
    setActiveTheme(theme);
  };

  const handleFontChange = (font: FontStyle) => {
    setActiveFont(font);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 px-4 py-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Profile Badge Generator</h1>
        <p className="text-lg text-gray-600">
          Generate your GitHub profile badge
        </p>
      </header>

      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">GitHub DogTag Generator</h2>
        <h3 className="text-lg font-medium text-gray-700 mb-2">Customize</h3>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            GitHub Username
          </label>
          <div className="flex">
            <input
              type="text"
              name="username"
              id="username"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="e.g., octocat"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button
              onClick={handleFetchUser}
              className="px-5 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition"
            >
              Fetch
            </button>
          </div>
          <DogTagForm
            activeFont={activeFont}
            onFontChange={handleFontChange}
            colorTheme={activeTheme}
            onThemeChange={handleThemeChange}
          />
        </div>
      </div>
      <div className="max-w-[30rem] mx-auto">
        <div>
          <DogTagPreview user={githubData} colorTheme={activeTheme} activeFont={activeFont} />
        </div>
      </div>
    </div>
  );
};

export default Home;
