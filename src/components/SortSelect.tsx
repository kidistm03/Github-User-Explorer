interface SortSelectProps {
  sortBy: string
  onSortChange: (value: string) => void
}

function SortSelect({
  sortBy,
  onSortChange,
}: SortSelectProps) {
  return (
    <div>
      <label htmlFor="sort">
        Sort repositories:
      </label>

      <select
        id="sort"
        value={sortBy}
        onChange={(event) => onSortChange(event.target.value)}
      >
        <option value="stars">Stars</option>
        <option value="forks">Forks</option>
        <option value="updated">Recently Updated</option>
        <option value="name">Name</option>
      </select>
    </div>
  )
}

export default SortSelect