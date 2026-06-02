import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import AboutPage from './AboutPage'
import ServicesPage from './ServicesPage'
import SolutionsPage from './SolutionsPage'
import CareersPage from './CareersPage'
import AlumniPage from './AlumniPage'
import ContactPage from './ContactPage'
import DisclaimerModal from './components/DisclaimerModal'

function App() {
  return (
    <Router>
      <DisclaimerModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
