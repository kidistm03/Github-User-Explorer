import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Navigation from './components/Navigation'
import RateLimit from './components/RateLimit'

import useGitHubRateLimit from './hooks/useGitHubRateLimit'

import SearchPage from './pages/SearchPage'
import UserProfile from './pages/UserProfile'
import RepoDetail from './pages/RepoDetail'
import NotFound from './pages/NotFound'

function App() {
  const { rateLimit } =
    useGitHubRateLimit()

  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />

        {rateLimit && (
          <RateLimit
            rateLimit={rateLimit}
          />
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
      </div>
    </BrowserRouter>
  )
}

export default App