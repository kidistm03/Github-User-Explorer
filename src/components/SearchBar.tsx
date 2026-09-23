import { useState } from 'react'

interface SearchBarProps {
  onSearch: (username: string) => void
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [username, setUsername] = useState<string>('')

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault()

    if (username.trim() === '') {
      return
    }

    onSearch(username.trim())
  }

  return (
    <form
      className="search-form"
      onSubmit={handleSubmit}
    >
      <input
        className="search-input"
        type="text"
        value={username}
        onChange={(
          event: React.ChangeEvent<HTMLInputElement>
        ) => setUsername(event.target.value)}
        placeholder="Enter GitHub username"
      />

      <button
        className="search-button"
        type="submit"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar