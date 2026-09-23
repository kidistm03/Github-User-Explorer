import { useEffect } from 'react'
import {
  Link,
  useParams,
} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import useGitHubReadme from '../hooks/useGitHubReadme'

function RepoDetail() {
  const {
    username,
    repoName,
  } = useParams<
    keyof {
      username: string
      repoName: string
    }
  >()

  const {
    readme,
    loading,
    error,
    fetchReadme,
  } = useGitHubReadme()

  useEffect(() => {
    if (username && repoName) {
      fetchReadme(
        username,
        repoName
      )
    }
  }, [username, repoName])

  if (loading) {
    return (
      <main className="container">
        <p>Loading README...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main className="container">
        <Link
          className="back-link"
          to={`/users/${username}`}
        >
          ← Back to Profile
        </Link>

        <h2>README Not Available</h2>

        <p>{error}</p>
      </main>
    )
  }

  return (
    <main className="container">
      <Link
        className="back-link"
        to={`/users/${username}`}
      >
        ← Back to Profile
      </Link>

      <h1 className="page-title">
        {repoName}
      </h1>

      {readme ? (
        <article className="readme">
          <ReactMarkdown>
            {atob(readme.content)}
          </ReactMarkdown>
        </article>
      ) : (
        <p>
          No README available.
        </p>
      )}
    </main>
  )
}

export default RepoDetail