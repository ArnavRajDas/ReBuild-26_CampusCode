import usePageStyles from '../../hooks/usePageStyles.js';
import useDocumentTitle from '../../hooks/useDocumentTitle.js';
import studentCss from '../../styles/pages/student-dashboard.css?inline';

import SvgSprite from '../../components/student/SvgSprite.jsx';
import Sidebar from '../../components/student/Sidebar.jsx';
import OverviewTopbar from '../../components/student/OverviewTopbar.jsx';
import { Welcome, FeaturedEvent, Stats, DiscoverEvents, Trio, Bottom } from '../../components/student/OverviewSections.jsx';

   
                                                                                     
                                                                                         
                                        
   
export default function StudentDashboard() {
  useDocumentTitle('CampusCode — Student Overview');
  usePageStyles([studentCss]);

  return (
    <>
      <SvgSprite />
      <Sidebar />

      <div className="main">
        <OverviewTopbar />
        <main className="content">
          <Welcome />
          <FeaturedEvent />
          <Stats />
          <DiscoverEvents />
          <Trio />
          <Bottom />
        </main>
      </div>
    </>
  );
}
