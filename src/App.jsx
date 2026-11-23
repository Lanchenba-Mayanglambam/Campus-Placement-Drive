import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import companiesData from './data/companies';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Companies from './components/Companies';
import CompanyDetails from './components/CompanyDetails';
import Applications from './components/Applications';
import NotFound from './components/NotFound';

function App() {
  const [companies, setCompanies] = useState(companiesData);

  const toggleApply = (id) => {
    const updated = companies.map((c) => {
      if (c.id === id) {
        return { ...c, isApplied: !c.isApplied };
      }
      return c;
    });
    setCompanies(updated);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home companies={companies} />} />
            <Route
              path="/companies"
              element={<Companies companies={companies} toggleApply={toggleApply} />}
            />
            <Route
              path="/companies/:id"
              element={<CompanyDetails companies={companies} toggleApply={toggleApply} />}
            />
            <Route
              path="/applications"
              element={<Applications companies={companies} toggleApply={toggleApply} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
