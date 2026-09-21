import { useState } from 'react'
import type { GitHubRepository } from '../types/github'

function useGitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepository[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const searchRepos = async (username: string): Promise<void> => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100`
      )

      if (!response.ok) {
        throw new Error('Repositories not found')
      }

      const data: GitHubRepository[] = await response.json()

      setRepos(data)
    } catch (error) {
      setRepos([])

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