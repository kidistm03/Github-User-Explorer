import { useEffect } from 'react'
import {
  Link,
  useParams,
} from 'react-router-dom'

import UserCard from '../components/UserCard'
import useGitHubUser from '../hooks/useGitHubUser'
import NotFound from './NotFound'

function UserProfile() {
  const { username } = useParams<'username'>()

  const {
    user,
    loading,
    error,
    searchUser,
  } = useGitHubUser()

  useEffect(() => {
    if (username) {
      searchUser(username)
    }
  }, [username])

  if (loading) {
    return <p>Loading user...</p>
  }

  if (error || !user) {
    return <NotFound />
  }

  return (
    <div>
      <Link to="/">
        ← Back to Search
      </Link>

      <h1>User Profile</h1>

      <UserCard user={user} />
    </div>
  )
}

export default UserProfile