import { useState } from 'react';
import CompanyCard from './CompanyCard';
import { myProfile } from '../data/companies';

function Companies({ companies, toggleApply }) {
  const [filter, setFilter] = useState('All');

  const filteredCompanies = companies.filter((c) => {
    const isEligible =
      myProfile.cgpa >= c.minCGPA &&
      c.eligibleBranches.includes(myProfile.branch);

    if (filter === 'Eligible') {
      return isEligible;
    }
    if (filter === 'Not Eligible') {
      return !isEligible;
    }
    return true;
  });

  return (
    <div>
      <h1>All Companies</h1>

      <label>Filter: </label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Eligible">Eligible</option>
        <option value="Not Eligible">Not Eligible</option>
      </select>

      <br />
      <br />

      {filteredCompanies.map((company) => (
        <CompanyCard
          key={company.id}
          company={company}
          toggleApply={toggleApply}
        />
      ))}
    </div>
  );
}

export default Companies;
