import CompanyCard from './CompanyCard';

function Applications({ companies, toggleApply }) {
  const appliedCompanies = companies.filter((c) => c.isApplied);

  return (
    <div>
      <h1>My Applications</h1>

      {appliedCompanies.length === 0 ? (
        <p>No applications yet</p>
      ) : (
        appliedCompanies.map((company) => (
          <CompanyCard
            key={company.id}
            company={company}
            toggleApply={toggleApply}
          />
        ))
      )}
    </div>
  );
}

export default Applications;
