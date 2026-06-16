import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import Background from './components/Background';
import ProjectsPage from './routes/ProjectsPage';
import SkillsPage from './routes/SkillsPage';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';
import MobileFooter from './components/MobileFooter';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  return (
   <>
    <Router>
    <Background />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    <WhatsAppWidget />
    <MobileFooter />
    </Router>
   </>
  );
}

export default App;
