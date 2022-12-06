import { BrowserRouter as Routes, Route, Router } from 'react-router-dom';
import Home from '../pages/home';

const Navbar = () => (
  <Router>
    <nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </nav>
  </Router>
);

export default Navbar;
