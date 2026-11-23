import { Link } from 'react-router';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <h2>Campus Placement Drive</h2>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home </Link>
          <Link to="/companies" className="nav-link">Companies </Link>
          <Link to="/applications" className="nav-link">Applications </Link>
        </div>
      </div>
      <hr />
    </nav>
  );
}

export default Navbar;
