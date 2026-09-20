import { useState } from 'react'

interface SearchBarProps {
  onSearch: (username: string) => void
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [username, setUsername] = useState<string>('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    if (username.trim() === '') {
      return
    }

    onSearch(username.trim())
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setUsername(event.target.value)
        }
        placeholder="Enter GitHub username"
      />

      <button type="submit">
        Search
      </button>
    </form>
  )
}

export default SearchBar