import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/features">
        <button>Features</button>
      </Link>
      <Link to="/barchart">
        <button>Dashboards</button>
      </Link>
    </>
  )
}

export default Navigation
