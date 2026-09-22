import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import useGitHubReadme from '../hooks/useGitHubReadme'

interface RepoDetailParams {
  username: string
  repoName: string
}

function RepoDetail() {
  const { username, repoName } =
    useParams<keyof RepoDetailParams>()

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