import { useEffect, useState } from 'react'
import type { GitHubRateLimit } from '../types/github'

function useGitHubRateLimit() {
  const [rateLimit, setRateLimit] =
    useState<GitHubRateLimit | null>(null)

  const [loading, setLoading] =
    useState<boolean>(true)

  const [error, setError] =
    useState<string | null>(null)

  useEffect(() => {
    const fetchRateLimit = async (): Promise<void> => {
      try {
        const response = await fetch(
          'https://api.github.com/rate_limit'
        )

        if (!response.ok) {
          throw new Error('Could not get rate limit')
        }

        const data: {
          resources: {
            core: GitHubRateLimit
          }
        } = await response.json()

        setRateLimit(data.resources.core)
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

    fetchRateLimit()
  }, [])

  return {
    rateLimit,
    loading,
    error,
  }
}

export default useGitHubRateLimit