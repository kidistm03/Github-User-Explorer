import { Link } from 'react-router-dom'
import type { GitHubRepository } from '../types/github'

interface RepoCardProps {
  repo: GitHubRepository
  username: string
}

function RepoCard({
  repo,
  username,
}: RepoCardProps) {
  return (
    <div className="repo-card">
      <h3 className="repo-name">
        <Link
          to={`/users/${username}/repos/${repo.name}`}
        >
          {repo.name}
        </Link>
      </h3>

      <p className="repo-description">
        {repo.description ||
          'No description available'}
      </p>

      <div className="repo-info">
        <span>
          Language:{' '}
          {repo.language || 'Not specified'}
        </span>

        <span>
          ⭐ {repo.stargazers_count}
        </span>

        <span>
          🍴 {repo.forks_count}
        </span>

        <span>
          Updated:{' '}
          {new Date(
            repo.updated_at
          ).toLocaleDateString()}
        </span>
      </div>

      <a
        className="repo-link"
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
      >
        View Repository on GitHub
      </a>
    </div>
  )
}

export default RepoCard