import { useState } from 'react'
import type { GitHubReadme } from '../types/github'

function useGitHubReadme() {
  const [readme, setReadme] = useState<GitHubReadme | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchReadme = async (
    username: string,
    repository: string
  ): Promise<void> => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `https://api.github.com/repos/${username}/${repository}/readme`
      )

      if (!response.ok) {
        throw new Error('README not found')
      }

      const data: GitHubReadme = await response.json()

      setReadme(data)
    } catch (error) {
      setReadme(null)

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
    readme,
    loading,
    error,
    fetchReadme,
  }
}

export default useGitHubReadme