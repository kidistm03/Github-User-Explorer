import { useState } from 'react'

import SearchBar from '../components/SearchBar'
import SearchHistory from '../components/SearchHistory'
import UserCard from '../components/UserCard'
import RepoList from '../components/RepoList'
import SortSelect from '../components/SortSelect'
import LanguageFilter from '../components/LanguageFilter'

import useGitHubUser from '../hooks/useGitHubUser'
import useGitHubRepos from '../hooks/useGitHubRepos'
import useSearchHistory from '../hooks/useSearchHistory'

import NotFound from './NotFound'

function SearchPage() {
  const {
    user,
    loading: userLoading,
    error: userError,
    searchUser,
  } = useGitHubUser()

  const {
    repos,
    loading: reposLoading,
    error: reposError,
    searchRepos,
  } = useGitHubRepos()

  const {
    history,
    addSearch,
    clearHistory,
  } = useSearchHistory()

  const [sortBy, setSortBy] =
    useState<string>('stars')

  const [selectedLanguage, setSelectedLanguage] =
    useState<string>('all')

  const handleSearch = (username: string): void => {
    addSearch(username)

    setSelectedLanguage('all')

    searchUser(username)
    searchRepos(username)
  }

  const languages = Array.from(
    new Set(
      repos
        .map((repo) => repo.language)
        .filter(
          (language): language is string =>
            language !== null
        )
    )
  ).sort()

  const sortedRepos = [...repos].sort((a, b) => {
    if (sortBy === 'stars') {
      return (
        b.stargazers_count -
        a.stargazers_count
      )
    }

    if (sortBy === 'forks') {
      return (
        b.forks_count -
        a.forks_count
      )
    }

    if (sortBy === 'updated') {
      return (
        new Date(b.updated_at).getTime() -
        new Date(a.updated_at).getTime()
      )
    }

    if (sortBy === 'name') {
      return a.name.localeCompare(b.name)
    }

    return 0
  })

  const filteredRepos =
    selectedLanguage === 'all'
      ? sortedRepos
      : sortedRepos.filter(
          (repo) =>
            repo.language === selectedLanguage
        )

  return (
    <main className="container">
      <h1 className="page-title">
        GitHub User Explorer
      </h1>

      <p className="page-description">
        Search for a GitHub username to explore
        their profile and repositories.
      </p>

      <section className="search-section">
        <SearchBar onSearch={handleSearch} />
      </section>

      <div className="history">
        <SearchHistory
          history={history}
          onSelect={handleSearch}
          onClear={clearHistory}
        />
      </div>

      {userLoading && (
        <p>Loading user...</p>
      )}

      {userError && <NotFound />}

      {user && (
        <UserCard user={user} />
      )}

      {reposLoading && (
        <p>Loading repositories...</p>
      )}

      {reposError && (
        <p>{reposError}</p>
      )}

      {repos.length > 0 && (
        <>
          <div className="controls">
            <div className="control">
              <SortSelect
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
            </div>

            <div className="control">
              <LanguageFilter
                languages={languages}
                selectedLanguage={
                  selectedLanguage
                }
                onLanguageChange={
                  setSelectedLanguage
                }
              />
            </div>
          </div>

          <RepoList
            repos={filteredRepos}
            username={user?.login || ''}
          />
        </>
      )}
    </main>
  )
}

export default SearchPage