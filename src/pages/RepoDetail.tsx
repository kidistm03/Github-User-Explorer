import { useEffect } from 'react'
import {
  Link,
  useParams,
} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import useGitHubReadme from '../hooks/useGitHubReadme'

function RepoDetail() {
  const { username, repoName } =
    useParams<keyof {
      username: string
      repoName: string
    }>()

  const {
    readme,
    loading,
    error,
    fetchReadme,
  } = useGitHubReadme()

  useEffect(() => {
    if (username && repoName) {
      fetchReadme(username, repoName)
    }
  }, [username, repoName])

  if (loading) {
    return <p>Loading README...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <Link to={`/users/${username}`}>
        ← Back to Profile
      </Link>

      <h1>{repoName}</h1>

      {readme ? (
        <ReactMarkdown>
          {atob(readme.content)}
        </ReactMarkdown>
      ) : (
        <p>No README available.</p>
      )}
    </div>
  )
}

export default RepoDetail