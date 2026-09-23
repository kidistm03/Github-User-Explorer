import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation-inner">
        <Link
          to="/"
          className="navigation-brand"
        >
          GitHub User Explorer
        </Link>
      </div>
    </nav>
  )
}

export default Navigation