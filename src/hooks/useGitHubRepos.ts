import { useState } from 'react'
import type { GitHubRepository } from '../types/github'

function useGitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepository[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const searchRepos = async (
    username: string
  ): Promise<void> => {
    setLoading(true)
    setError(null)
    setRepos([])

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100`
      )

      if (response.status === 403) {
        throw new Error(
          'GitHub API rate limit exceeded'
        )
      }

      if (!response.ok) {
        throw new Error(
          'Unable to load repositories'
        )
      }

      const data: GitHubRepository[] =
        await response.json()

      setRepos(data)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('Something went wrong')
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    repos,
    loading,
    error,
    searchRepos,
  }
}

export default useGitHubRepos