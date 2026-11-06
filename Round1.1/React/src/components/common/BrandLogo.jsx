import { Link } from 'react-router-dom';
import usePageStyles from '../../hooks/usePageStyles.js';
import brandLogoCss from '../../styles/shared/brand-logo.css?inline';

   
                                                                              
                                                                                 
  
                                                                                    
                                                                              
  
                                                                                
                                                                           
  
                                                                       
   
export default function BrandLogo({ to = '/' }) {
  usePageStyles([brandLogoCss]);

  return (
    <Link to={to} className="landing-logo">
      <span className="landing-logo-mark">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <span className="landing-logo-content">
        <span className="landing-logo-text">CAMPUSCODE</span>
        <span className="landing-logo-subtext">HACKATHON ARENA</span>
      </span>
    </Link>
  );
}
