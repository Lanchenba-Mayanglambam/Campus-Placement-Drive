import { Link } from 'react-router';
import { myProfile } from '../data/companies';

function CompanyCard({ company, toggleApply }) {

  const hasGoodCGPA = myProfile.cgpa >= company.minCGPA;
  const hasValidBranch = company.eligibleBranches.includes(myProfile.branch);
  const isEligible = hasGoodCGPA && hasValidBranch;

  const isDream = company.packageLPA >= 10;

  return (
    <div style={{ border: '1px solid black', margin: '10px 0', padding: '10px' }}>
      <h3>
        {company.name} {isDream && <span>(Dream Company)</span>}
      </h3>
      <p>Role: {company.role}</p>
      <p>Package: {company.packageLPA} LPA</p>
      <p>Location: {company.location}</p>
      <p>Drive Date: {company.driveDate}</p>

      <Link to={`/companies/${company.id}`}>View Details</Link>
      {' '}

      {isEligible ? (
        <button onClick={() => toggleApply(company.id)}>
          {company.isApplied ? 'Withdraw' : 'Apply'}
        </button>
      ) : (
        <span>Not Eligible</span>
      )}
    </div>
  );
}

export default CompanyCard;
