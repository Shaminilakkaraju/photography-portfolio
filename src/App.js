import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import ClientPortal from './pages/ClientPortal';
import Feedback from './pages/Feedback';
import About from './pages/About';
import Contact from './pages/ContactUs';
import Testimonials from './pages/Testimonials';
import GlobalStyles from './styles/GlobalStyles';

const App = () => (
  <Router>
    <GlobalStyles />
    <Navbar />
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/client" element={<ClientPortal />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;


