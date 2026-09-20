import useGitHubUser from './hooks/useGitHubUser'

function App() {
  const { user, loading, error, searchUser } = useGitHubUser()

  const handleSearch = (): void => {
    searchUser('octocat')
  }

  return (
    <div>
      <h1>GitHub User Explorer</h1>

      <button onClick={handleSearch}>
        Search Octocat
      </button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {user && (
        <div>
          <img
            src={user.avatar_url}
            alt={user.login}
            width="150"
          />

          <h2>{user.name}</h2>

          <p>Username: {user.login}</p>

          <p>Bio: {user.bio}</p>

          <p>Followers: {user.followers}</p>

          <p>Following: {user.following}</p>

          <p>Public repositories: {user.public_repos}</p>
        </div>
      )}
    </div>
  )
}

export default App