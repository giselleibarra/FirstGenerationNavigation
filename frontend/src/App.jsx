import { Link, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ScholarshipsPage from "./pages/ScholarshipsPage";
import FinancialAid from "./pages/FinancialAid";
import TermsPage from "./pages/TermsPage";
import TestPrep from "./pages/TestPrep";

const App = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="First Generatoin Navigation logo" />
        </div>

        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/roadmap">Roadmap</Link>
          <Link to="/applications">Applications</Link>
          <Link to="/financial-aid">Financial Aid</Link>
          <Link to="/scholarships">Scholarships</Link>
          <Link to="/test-prep">Test Prep</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/scholarships" element={<ScholarshipsPage />} />
        <Route path="/financial-aid" element={<FinancialAid />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/test-prep" element={<TestPrep />} />
      </Routes>
    </div>
  )
}

export default App