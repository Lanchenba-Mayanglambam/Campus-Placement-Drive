import { useParams, Link } from 'react-router';
import { myProfile } from '../data/companies';

function CompanyDetails({ companies, toggleApply }) {
  const { id } = useParams();

  const company = companies.find((c) => c.id === Number(id));

  if (!company) {
    return (
      <div className="details-container">
        <h2>Company Not Found</h2>
        <Link to="/companies" className="btn-back">Back to Companies</Link>
      </div>
    );
  }

  const hasGoodCGPA = myProfile.cgpa >= company.minCGPA;
  const hasValidBranch = company.eligibleBranches.includes(myProfile.branch);
  const isEligible = hasGoodCGPA && hasValidBranch;

  const isDream = company.packageLPA >= 10;

  return (
    <div className="details-container">
      <Link to="/companies" className="btn-back">Back to Companies</Link>

      <div className="details-card">
        <h1>
          {company.name} {isDream && <span className="dream-tag">(Dream Company)</span>}
        </h1>
        <p>Role: {company.role}</p>
        <p>Package: {company.packageLPA} LPA</p>
        <p>Location: {company.location}</p>
        <p>Drive Date: {company.driveDate}</p>

        <p>Minimum CGPA: {company.minCGPA}</p>

        <h3>Eligible Branches</h3>
        <ul className="branches-list">
          {company.eligibleBranches.map((branch) => (
            <li key={branch}>{branch}</li>
          ))}
        </ul>

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

export default CompanyDetails;
