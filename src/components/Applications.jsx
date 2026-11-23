import CompanyCard from './CompanyCard';

function Applications({ companies, toggleApply }) {
  const appliedCompanies = companies.filter((c) => c.isApplied);

  return (
    <div className="applications-container">
      <h1>My Applications</h1>

      {appliedCompanies.length === 0 ? (
        <p className="no-applications">No applications yet</p>
      ) : (
        <div className="company-cards-grid">
          {appliedCompanies.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
              toggleApply={toggleApply}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Applications;
