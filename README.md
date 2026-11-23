# Campus Placement Drive Portal

A modern, responsive React application built with **React 19**, **React Router**, and **Vite** for students to explore campus placement drives, check real-time eligibility based on branch and CGPA, apply for upcoming companies, and track their active applications.

---

## 🚀 Features

- **Dashboard & Student Profile (`/`)**:
  - Displays student dossier (Name, Branch, CGPA).
  - Live placement metrics overview: Total Companies, Eligible Companies, and Applied Companies.
  - Direct quick-navigation links to browse companies or view applications.

- **Company Directory & Filtering (`/companies`)**:
  - Browse all visiting companies with key drive metrics (Role, Package in LPA, Location, Drive Date).
  - Dynamic **Filter** dropdown:
    - **All**: View all visiting companies.
    - **Eligible**: View only companies where the student satisfies both CGPA and Branch criteria.
    - **Not Eligible**: View companies where criteria are not met.
  - **Dream Company Indicator**: Automatically highlights high-tier packages ($\ge 10\text{ LPA}$) with a `(Dream Company)` tag.

- **Company Details View (`/companies/:id`)**:
  - Dynamic route rendering individual company profile.
  - Full details including Minimum CGPA requirement and list of eligible engineering disciplines.
  - Direct Apply / Withdraw action button.

- **My Applications (`/applications`)**:
  - Dedicated dispatch tracker showing all drives the student has applied to.
  - Empty-state message if no applications have been submitted.

- **UI & UX Design**:
  - Minimalist, warm editorial theme inspired by modern product designer portfolio aesthetics.
  - Palette: Warm sand linen background (`#F5F2EB`), obsidian pill buttons, crisp white cards, and responsive grid layouts.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Routing**: [React Router](https://reactrouter.com/) (v8)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: Pure CSS with responsive layout and modern CSS custom properties
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

---

## 📂 Project Structure

```text
Campus-Placement-Drive/
├── index.html              # HTML entry point with Plus Jakarta Sans font
├── package.json            # Project dependencies and npm scripts
├── vite.config.js          # Vite build configuration
├── src/
│   ├── main.jsx            # React root mount
│   ├── App.jsx             # Top-level routing and application state
│   ├── index.css           # Global design system, warm theme variables & styles
│   ├── data/
│   │   └── companies.js    # Student profile and company dataset
│   └── components/
│       ├── Navbar.jsx          # Header navigation bar
│       ├── Home.jsx            # Student dashboard, profile & stats
│       ├── Companies.jsx       # Company listing with category filter
│       ├── CompanyCard.jsx     # Card component with eligibility check & apply action
│       ├── CompanyDetails.jsx  # Dynamic details page for specific company
│       ├── Applications.jsx    # Applied companies tracking view
│       └── NotFound.jsx        # 404 fallback page
```

---

## 🚦 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine (version 18 or higher recommended).

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd Campus-Placement-Drive
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

- `npm run dev`: Starts the Vite development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles and bundles production-ready assets into the `dist/` directory.
- `npm run lint`: Runs ESLint to check for code quality and syntax issues.
- `npm run preview`: Locally previews the production build.

---

## 📝 Eligibility Rules

Eligibility is evaluated dynamically against the candidate profile:
1. **CGPA Requirement**: Student's CGPA must be $\ge$ company's `minCGPA`.
2. **Branch Requirement**: Student's branch must be included in `eligibleBranches`.
3. **Dream Company**: Package $\ge 10\text{ LPA}$.
