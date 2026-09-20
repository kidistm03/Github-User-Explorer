import { useState } from 'react'
import type { GitHubUser } from '../types/github'

function useGitHubUser() {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const searchUser = async (username: string): Promise<void> => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      )

      if (!response.ok) {
        throw new Error('User not found')
      }

      const data: GitHubUser = await response.json()

      setUser(data)
    } catch (error) {
      setUser(null)

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
    user,
    loading,
    error,
    searchUser,
  }
}

export default useGitHubUser