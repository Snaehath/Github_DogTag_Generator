export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string | null;
  public_repos: number;
  followers: number;
  location: string | null;
  company: string | null;
  created_at: string;
}

export interface ColorScheme {
  name: string;
  bg: string;
  text: string;
  accentText: string;
  accentColor: string;
  border: string;
  shadow: string;
}

export interface FontStyle {
  name: string;
  className: string;
}