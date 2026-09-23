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
      <h2 className="repositories-title">
        Repositories
      </h2>

      {repos.length === 0 ? (
        <p>
          This user does not have any repositories
          matching your filter.
        </p>
      ) : (
        <div className="repo-list">
          {repos.map((repo) => (
            <RepoCard
              key={repo.id}
              repo={repo}
              username={username}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default RepoList