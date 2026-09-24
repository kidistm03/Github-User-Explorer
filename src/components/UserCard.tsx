import type { GitHubUser } from '../types/github'

interface UserCardProps {
  user: GitHubUser
}

function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <img
        className="user-avatar"
        src={user.avatar_url}
        alt={user.login}
      />

      <div className="user-info">
        <h2 className="user-name">
          {user.name || user.login}
        </h2>

        <p className="user-username">
          @{user.login}
        </p>

        <p className="user-bio">
          {user.bio || 'No bio available'}
        </p>

        <div className="user-details">
          <p>
            Location:{' '}
            {user.location || 'No location available'}
          </p>

          <p>
            Company:{' '}
            {user.company || 'No company available'}
          </p>

          <p>
            Followers: {user.followers}
          </p>

          <p>
            Following: {user.following}
          </p>

          <p>
            Public repositories: {user.public_repos}
          </p>

          <p>
            Joined:{' '}
            {new Date(
              user.created_at
            ).toLocaleDateString()}
          </p>
        </div>

        <a
          className="github-link"
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  )
}

export default UserCard