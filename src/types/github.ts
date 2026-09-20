export interface GitHubUser {
  login: string
  avatar_url: string
  html_url: string
  name: string | null
  bio: string | null
  location: string | null
  company: string | null
  followers: number
  following: number
  public_repos: number
  created_at: string
}

export interface GitHubRepository {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
}