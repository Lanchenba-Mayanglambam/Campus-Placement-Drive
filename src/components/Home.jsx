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
    <div>
      <h1>Campus Placement Portal</h1>
      <p>Yoooo!! Welcome to the campus placement drive</p>

      <h3>My Profile</h3>
      <p>Name: {myProfile.name}</p>
      <p>Branch: {myProfile.branch}</p>
      <p>CGPA: {myProfile.cgpa}</p>

      <hr />

      <h3>Placement Stats</h3>
      <p>Total Companies: {totalCompanies}</p>
      <p>Eligible Companies: {eligibleCompanies.length}</p>
      <p>Applied Companies: {appliedCompanies.length}</p>

      <br />
      <Link to="/companies">Browse Companies</Link>
      {' '}
      <Link to="/applications">View Applications</Link>
    </div>
  );
}

export default Home;
