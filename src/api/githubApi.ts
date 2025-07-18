import type { GitHubUser } from '../types';

const API_BASE_URL = 'https://api.github.com/users/';

export const fetchGitHubUser = async (username: string): Promise<GitHubUser> => {
  if (!username) {
    throw new Error('GitHub username is required.');
  }

  const response = await fetch(`${API_BASE_URL}${username}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`User '${username}' not found. Please check the username.`);
    }
    throw new Error('Failed to fetch GitHub user data. You may have hit the API rate limit.');
  }

  const data: GitHubUser = await response.json();
  return data;
};
