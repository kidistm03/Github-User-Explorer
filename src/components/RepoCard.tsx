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
    <div>
      <h3>
        <Link
          to={`/users/${username}/repos/${repo.name}`}
        >
          {repo.name}
        </Link>
      </h3>

      <p>
        {repo.description || 'No description available'}
      </p>

      <p>
        Language: {repo.language || 'Not specified'}
      </p>

      <p>
        ⭐ Stars: {repo.stargazers_count}
      </p>

      <p>
        🍴 Forks: {repo.forks_count}
      </p>

      <p>
        Updated:{' '}
        {new Date(
          repo.updated_at
        ).toLocaleDateString()}
      </p>

      <a
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