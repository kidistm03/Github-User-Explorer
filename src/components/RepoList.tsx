import type { GitHubRepository } from '../types/github'
import RepoCard from './RepoCard'

interface RepoListProps {
  repos: GitHubRepository[]
}

function RepoList({ repos }: RepoListProps) {
  return (
    <div>
      <h2>Repositories</h2>

      {repos.map((repo) => (
        <RepoCard
          key={repo.id}
          repo={repo}
        />
      ))}
    </div>
  )
}

export default RepoList