import useGitHubUser from './hooks/useGitHubUser'
import SearchBar from './components/SearchBar'
import UserCard from './components/UserCard'

function App() {
  const { user, loading, error, searchUser } = useGitHubUser()

  return (
    <div>
      <h1>GitHub User Explorer</h1>

      <SearchBar onSearch={searchUser} />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {user && <UserCard user={user} />}
    </div>
  )
}

export default App