import { Link } from 'react-router';
import { myProfile } from '../data/companies';

function CompanyCard({ company, toggleApply }) {

  const hasGoodCGPA = myProfile.cgpa >= company.minCGPA;
  const hasValidBranch = company.eligibleBranches.includes(myProfile.branch);
  const isEligible = hasGoodCGPA && hasValidBranch;

  const isDream = company.packageLPA >= 10;

  return (
    <div className="company-card">
      <div>
        <h3>
          {company.name} {isDream && <span className="dream-tag">(Dream Company)</span>}
        </h3>
        <p>Role: {company.role}</p>
        <p>Package: {company.packageLPA} LPA</p>
        <p>Location: {company.location}</p>
        <p>Drive Date: {company.driveDate}</p>
      </div>

      <div className="card-actions">
        <Link to={`/companies/${company.id}`} className="view-details-link">View Details</Link>
        {' '}

        {isEligible ? (
          <button
            className={`btn-apply ${company.isApplied ? 'applied' : ''}`}
            onClick={() => toggleApply(company.id)}
          >
            {company.isApplied ? 'Withdraw' : 'Apply'}
          </button>
        ) : (
          <span className="not-eligible-tag">Not Eligible</span>
        )}
      </div>
    </div>
  );
}

export default CompanyCard;
