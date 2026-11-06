   
                                                             
                                                                                           
  
                                                         
                                                                                 
                                                                 
                                                                           
                                                                                
                                                                                   
                                    
                                                                                   
                                                                        
                                                    
   
export default function AuthHero({
  status, step, lines, titleClass = '', accentClass = '', text,
  cardsClass = '', cards, footerStatus,
}) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <p className="hero__status"><span className="dot dot--lime"></span>{status}</p>
      <p className="hero__steps"><span>{step[0]}</span><span>{step[1]}</span></p>

      <h1 className={`hero__title ${titleClass}`.trim()} id="hero-title">
        <span className="hero__line">{lines[0]}</span>
        <span className="hero__line">{lines[1]}</span>
        
        <span className={`hero__line hero__line--outline ${accentClass}`.trim()}>{lines[2]}</span>
      </h1>

      <p className="hero__text">{text}</p>

      <ul className={`feature-cards ${cardsClass}`.trim()}>
        {cards.map((card) => (
          <li className="feature-card" key={card.title}>
            <div className="feature-card__meta">
              {card.meta.map((m) => <span key={m}>{m}</span>)}
            </div>
            <h2 className="feature-card__title">{card.title}</h2>
            {card.text && <p className="feature-card__text">{card.text}</p>}
            {card.line && <span className="feature-card__line" aria-hidden="true"></span>}
          </li>
        ))}
      </ul>

      <div className="hero__footer">
        <span className="hero__footer-status"><span className="dot dot--lime"></span>{footerStatus}</span>
        <span>STUDENT INNOVATION NETWORK</span>
        <span>2026</span>
      </div>
    </section>
  );
}
