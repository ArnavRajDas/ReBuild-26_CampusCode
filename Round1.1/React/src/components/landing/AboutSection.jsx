                                                                                           
export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-section-top">
        <span className="section-number">01</span>
        <p className="section-label">
          <span className="status-dot"></span>
          WHAT IS CAMPUSCODE?
        </p>
      </div>

      <div className="about-container">
        
        <div className="about-content">
          <h2 className="about-title">
            <span>WHERE</span>
            <span>STUDENTS</span>
            <span className="about-title-outline">BUILD.</span>
          </h2>
          <p className="about-description">
            CampusCode brings students, teams, organizers
            and hackathons into one connected ecosystem.
          </p>
        </div>

        
        <div className="about-visual">
          <span className="orbit-number orbit-number-one">01</span>
          <span className="orbit-number orbit-number-two">02</span>
          <span className="orbit-number orbit-number-three">03</span>
          <div className="orbit orbit-outer"></div>
          <div className="orbit orbit-inner"></div>
          <div className="orbit-logo">CC</div>
        </div>
      </div>
    </section>
  );
}
