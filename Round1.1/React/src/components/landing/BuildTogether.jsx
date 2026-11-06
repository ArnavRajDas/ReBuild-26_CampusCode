
import { useEffect, useRef } from 'react';
import showcaseVideo from '../../assets/what-is-campuscode.mp4';

export default function BuildTogether() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((error) => {
            console.log("Video autoplay blocked:", error);
          });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  return (
    <section
      className="build-together-section"
      id="build-together"
      ref={sectionRef}
    >
      <div className="bt-meta">
        <span>02 — EXPERIENCE</span>
        <span>00 / 06</span>
      </div>

      <p className="bt-eyebrow">
        THE CAMPUSCODE EXPERIENCE
      </p>

      <h2 className="build-together-title">
        BUILD<br />
        TOGETHER.
      </h2>

      <div className="showcase-card">
        <video
          ref={videoRef}
          className="showcase-video"
          loop
          playsInline
          preload="auto"
        >
          <source src={showcaseVideo} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
    </section>
  );
}
