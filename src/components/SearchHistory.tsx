interface SearchHistoryProps {
  history: string[]
  onSelect: (username: string) => void
  onClear: () => void
}

function SearchHistory({
  history,
  onSelect,
  onClear,
}: SearchHistoryProps) {
  if (history.length === 0) {
    return null
  }

  return (
    <div>
      <h3>Recent Searches</h3>

      {history.map((username) => (
        <button
          key={username}
          type="button"
          onClick={() => onSelect(username)}
        >
          {username}
        </button>
      ))}

      <button
        type="button"
        onClick={onClear}
      >
        Clear History
      </button>
    </div>
  )
}

export default SearchHistory