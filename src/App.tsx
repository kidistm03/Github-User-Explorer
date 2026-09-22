import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import SearchPage from './pages/SearchPage'
import UserProfile from './pages/UserProfile'
import RepoDetail from './pages/RepoDetail'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
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