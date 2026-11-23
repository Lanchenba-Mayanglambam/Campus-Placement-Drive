import { Link } from 'react-router';
import { myProfile } from '../data/companies';

function Home({ companies }) {
  const totalCompanies = companies.length;

  const eligibleCompanies = companies.filter((c) => {
    const hasGoodCGPA = myProfile.cgpa >= c.minCGPA;
    const hasValidBranch = c.eligibleBranches.includes(myProfile.branch);
    return hasGoodCGPA && hasValidBranch;
  });

  const appliedCompanies = companies.filter((c) => c.isApplied);

  return (
    <div className="home-container">
      <div className="header-section">
        <h1>Campus Placement Portal</h1>
        <p className="intro-text">Yoooo!! Welcome to the campus placement drive</p>
      </div>

      <div className="content-grid">
        <div className="card">
          <h3>My Profile</h3>
          <p>Name: {myProfile.name}</p>
          <p>Branch: {myProfile.branch}</p>
          <p>CGPA: {myProfile.cgpa}</p>
        </div>

        <div className="card">
          <h3>Placement Stats</h3>
          <p>Total Companies: {totalCompanies}</p>
          <p>Eligible Companies: {eligibleCompanies.length}</p>
          <p>Applied Companies: {appliedCompanies.length}</p>
        </div>
      </div>

      <hr />

      <div className="action-buttons">
        <Link to="/companies" className="btn btn-primary">Browse Companies</Link>
        {' '}
        <Link to="/applications" className="btn btn-secondary">View Applications</Link>
      </div>
    </div>
  );
}

export default Home;
