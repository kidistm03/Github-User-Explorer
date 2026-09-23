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
    <div className="history">
      <h3>Recent Searches</h3>

      <div className="history-buttons">
        {history.map((username) => (
          <button
            className="history-button"
            key={username}
            type="button"
            onClick={() =>
              onSelect(username)
            }
          >
            {username}
          </button>
        ))}

        <button
          className="clear-history"
          type="button"
          onClick={onClear}
        >
          Clear History
        </button>
      </div>
    </div>
  )
}

export default SearchHistory