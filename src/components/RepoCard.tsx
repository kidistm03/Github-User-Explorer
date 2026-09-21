import type { GitHubRepository } from '../types/github'

interface RepoCardProps {
  repo: GitHubRepository
}

function RepoCard({ repo }: RepoCardProps) {
  return (
    <div>
      <h3>{repo.name}</h3>

      <p>
        {repo.description || 'No description available'}
      </p>

      <p>
        Language: {repo.language || 'Not specified'}
      </p>

      <p>⭐ Stars: {repo.stargazers_count}</p>

      <p>🍴 Forks: {repo.forks_count}</p>

      <p>
        Updated:{' '}
        {new Date(repo.updated_at).toLocaleDateString()}
      </p>

      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
      >
        View Repository
      </a>
    </div>
  )
}

export default RepoCard