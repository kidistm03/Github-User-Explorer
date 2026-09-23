import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
      <Link to="/">
        GitHub User Explorer
      </Link>

      <Link to="/">
        Search
      </Link>
    </nav>
  )
}

export default Navigation