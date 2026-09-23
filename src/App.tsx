import {BrowserRouter,Routes,Route,} from 'react-router-dom'

import SearchPage from './pages/SearchPage'
import UserProfile from './pages/UserProfile'
import RepoDetail from './pages/RepoDetail'
import NotFound from './pages/NotFound'
import RateLimit from './components/RateLimit'
import useGitHubRateLimit from './hooks/useGitHubRateLimit'
import Navigation from './components/Navigation'

function App() {
  const { rateLimit } = useGitHubRateLimit()

  return (
    <BrowserRouter>
      <Navigation />

      {rateLimit && (
        <RateLimit rateLimit={rateLimit} />
      )}

      <Routes>
        <Route
          path="/"
          element={<SearchPage />}
        />

        <Route
          path="/users/:username"
          element={<UserProfile />}
        />

        <Route
          path="/users/:username/repos/:repoName"
          element={<RepoDetail />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App