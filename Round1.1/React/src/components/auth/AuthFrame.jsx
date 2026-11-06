import { Link } from 'react-router-dom';
import BrandLogo from '../common/BrandLogo.jsx';

   
                                                             
                                                                               
                                                                                 
                 
  
         
                                                                       
                                                         
   
export default function AuthFrame({ mainClassName = '', children }) {
  return (
    <>
      
      <div className="bg-dots" aria-hidden="true">
        <span className="bg-dot bg-dot--1"></span>
        <span className="bg-dot bg-dot--2"></span>
        <span className="bg-dot bg-dot--3"></span>
        <span className="bg-dot bg-dot--4"></span>
        <span className="bg-dot bg-dot--5"></span>
        <span className="bg-dot bg-dot--6"></span>
      </div>

      <header className="site-header">
        
        <BrandLogo />

        <nav className="site-nav" aria-label="Main">
          <Link className="site-nav__link" to="/">← BACK TO HOME</Link>
        </nav>
      </header>

      <main className={`main-layout ${mainClassName}`.trim()}>{children}</main>

      <footer className="site-footer">
        <span>CAMPUSCODE © 2026</span>
        <span>LEARN · BUILD · COMPETE · SHIP</span>
        <span className="site-footer__status">ALL SYSTEMS OPERATIONAL</span>
      </footer>
    </>
  );
}
