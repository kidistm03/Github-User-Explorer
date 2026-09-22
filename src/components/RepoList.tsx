import type { GitHubRepository } from '../types/github'
import RepoCard from './RepoCard'

interface RepoListProps {
  repos: GitHubRepository[]
  username: string
}

function RepoList({
  repos,
  username,
}: RepoListProps) {
  return (
    <div>
      <h2>Repositories</h2>

      {repos.map((repo) => (
        <RepoCard
          key={repo.id}
          repo={repo}
          username={username}
        />
      ))}
    </div>
  )
}

export default RepoList