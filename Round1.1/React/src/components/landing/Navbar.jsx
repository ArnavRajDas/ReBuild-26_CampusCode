import { Link } from 'react-router-dom';
import BrandLogo from '../common/BrandLogo.jsx';

   
                                                                                     
                                                                            
                                                         
   
export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        
        <BrandLogo />

        <div className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#how-it-works">HOW IT WORKS</a>
          <a href="#arena">HACKATHONS</a>
          <a href="#community">COMMUNITY</a>
        </div>

        <div className="nav-actions">
          <Link to="/login" className="login-btn">LOGIN</Link>
          <Link to="/register" className="get-started-btn">
            JOIN CAMPUSCODE
            <span className="button-arrow">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
