import { Link } from 'react-router';

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn-home">Go to Home</Link>
    </div>
  );
}

export default NotFound;
