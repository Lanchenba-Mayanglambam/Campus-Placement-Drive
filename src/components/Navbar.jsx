import { Link } from 'react-router';

function Navbar() {
  return (
    <nav>
      <h2>Campus Placement Drive</h2>
      <Link to="/">Home </Link>
      <Link to="/companies">Companies </Link>
      <Link to="/applications">Applications </Link>
      <hr />
    </nav>
  );
}

export default Navbar;
