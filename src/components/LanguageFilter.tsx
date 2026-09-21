interface LanguageFilterProps {
  languages: string[]
  selectedLanguage: string
  onLanguageChange: (language: string) => void
}

function LanguageFilter({
  languages,
  selectedLanguage,
  onLanguageChange,
}: LanguageFilterProps) {
  return (
    <div>
      <label htmlFor="language">
        Filter by language:
      </label>

      <select
        id="language"
        value={selectedLanguage}
        onChange={(event) =>
          onLanguageChange(event.target.value)
        }
      >
        <option value="all">All Languages</option>

        {languages.map((language) => (
          <option
            key={language}
            value={language}
          >
            {language}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageFilter