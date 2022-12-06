import { BrowserRouter as Routes, Route, Router } from 'react-router-dom';
import Home from '../pages/home';
import Profile from '../pages/profile';

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
