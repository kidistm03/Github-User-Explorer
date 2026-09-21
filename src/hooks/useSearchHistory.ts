import { useEffect, useState } from 'react'

const STORAGE_KEY = 'github-search-history'

function useSearchHistory() {
  const [history, setHistory] = useState<string[]>([])

  useEffect(() => {
    const savedHistory = localStorage.getItem(STORAGE_KEY)

    if (savedHistory) {
      try {
        const parsedHistory: unknown = JSON.parse(savedHistory)

        if (
          Array.isArray(parsedHistory) &&
          parsedHistory.every(
            (item): item is string => typeof item === 'string'
          )
        ) {
          setHistory(parsedHistory)
        }
      } catch {
        setHistory([])
      }
    }
  }, [])

  const addSearch = (username: string): void => {
    setHistory((currentHistory) => {
      const updatedHistory = [
        username,
        ...currentHistory.filter((item) => item !== username),
      ]

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedHistory)
      )

      return updatedHistory
    })
  }

  const clearHistory = (): void => {
    localStorage.removeItem(STORAGE_KEY)
    setHistory([])
  }

  return {
    history,
    addSearch,
    clearHistory,
  }
}

export default useSearchHistory