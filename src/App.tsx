import useGitHubUser from './hooks/useGitHubUser'
import useGitHubRepos from './hooks/useGitHubRepos'
import SearchBar from './components/SearchBar'
import UserCard from './components/UserCard'
import RepoList from './components/RepoList'


function App() {
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

  const handleSearch = (username: string): void => {
    searchUser(username)
    searchRepos(username)
  }

  return (
    <div>
      <h1>GitHub User Explorer</h1>

      <SearchBar onSearch={handleSearch} />

      {userLoading && <p>Loading user...</p>}

      {userError && <p>{userError}</p>}

      {user && <UserCard user={user} />}

      {reposLoading && <p>Loading repositories...</p>}

      {reposError && <p>{reposError}</p>}

      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  )
}

export default App