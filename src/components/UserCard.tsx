import type { GitHubUser } from '../types/github'

interface UserCardProps {
  user: GitHubUser
}

function UserCard({ user }: UserCardProps) {
  return (
    <div>
      <img
        src={user.avatar_url}
        alt={user.login}
        width="150"
      />

      <h2>{user.name || user.login}</h2>

      <p>Username: {user.login}</p>

      <p>Bio: {user.bio || 'No bio available'}</p>

      <p>Location: {user.location || 'No location available'}</p>

      <p>Company: {user.company || 'No company available'}</p>

      <p>Followers: {user.followers}</p>

      <p>Following: {user.following}</p>

      <p>Public repositories: {user.public_repos}</p>

      <p>
        Joined: {new Date(user.created_at).toLocaleDateString()}
      </p>

      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
      >
        View GitHub Profile
      </a>
    </div>
  )
}

export default UserCard