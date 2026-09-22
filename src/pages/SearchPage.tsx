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
        searchRepos,
    } = useGitHubRepos()

    const {
        history,
        addSearch,
        clearHistory,
    } = useSearchHistory()

    const [sortBy, setSortBy] = useState<string>('stars')
    const [selectedLanguage, setSelectedLanguage] =
        useState<string>('all')

    const handleSearch = (username: string): void => {
        addSearch(username)
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
            return b.stargazers_count - a.stargazers_count
        }

        if (sortBy === 'forks') {
            return b.forks_count - a.forks_count
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
                (repo) => repo.language === selectedLanguage
            )

    return (
        <div>
            <h1>GitHub User Explorer</h1>

            <SearchBar onSearch={handleSearch} />

            <SearchHistory
                history={history}
                onSelect={handleSearch}
                onClear={clearHistory}
            />

            {userLoading && <p>Loading user...</p>}

            {userError && <NotFound />}

            {user && <UserCard user={user} />}

            {reposLoading && <p>Loading repositories...</p>}

            {repos.length > 0 && (
                <>
                    <SortSelect
                        sortBy={sortBy}
                        onSortChange={setSortBy}
                    />

                    <LanguageFilter
                        languages={languages}
                        selectedLanguage={selectedLanguage}
                        onLanguageChange={setSelectedLanguage}
                    />

                    <RepoList
                        repos={filteredRepos}
                        username={user?.login || ''}
                    />
                </>
            )}
        </div>
    )
}

export default SearchPage