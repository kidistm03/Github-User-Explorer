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