import { Fragment } from 'react';


const WORDS = ['PEOPLE', 'PRODUCTS', 'INNOVATION', 'COMMUNITY', 'IDEAS'];

   
                                                                                     
                                                                                        
   
function MarqueeContent({ hidden }) {
  return (
    <div className="marquee-content" aria-hidden={hidden ? 'true' : undefined}>
      {WORDS.map((word) => (
        
        <Fragment key={word}>
          <span>{word}</span>
          <span className="marquee-star">✦</span>
        </Fragment>
      ))}
    </div>
  );
}

                                                                               
export default function MarqueeStrip() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        <MarqueeContent />
        
        <MarqueeContent hidden />
      </div>
    </div>
  );
}
