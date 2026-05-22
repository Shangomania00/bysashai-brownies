import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLanguage } from '../hooks/useLanguage';
import { getContent } from '../content';

export default function Hero() {
  const { language, isArabic } = useLanguage();
  const content = getContent(language);
  const hero = content.hero;

  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  const hasHeroContent =
    hero.eyebrow ||
    hero.titleLine ||
    hero.titleEmphasis ||
    hero.subtitleLine1 ||
    hero.subtitleLine2 ||
    hero.ctaText;

  useEffect(() => {
    if (!hasHeroContent) return;

    const tl = gsap.timeline({ delay: 0.4 });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30, filter: 'blur(8px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.4, ease: 'power2.out' }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 0.8, y: 0, duration: 1.0, ease: 'power2.out' },
        '-=0.6'
      );

    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.4'
      );
    }

    return () => {
      tl.kill();
    };
  }, [hasHeroContent]);

  if (!hasHeroContent) {
    return null;
  }

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: '12vh',
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.7) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content Panel */}
      <div
        className="liquid-glass"
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '600px',
          width: '90%',
          padding: '48px 40px 40px',
          borderRadius: '2px',
          textAlign: 'center',
        }}
      >
        {hero.eyebrow && (
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: '#c69c6d',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            {hero.eyebrow}
          </p>
        )}

        {(hero.titleLine || hero.titleEmphasis) && (
          <h1
            ref={titleRef}
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: isArabic ? 'clamp(40px, 5vw, 68px)' : 'clamp(36px, 5vw, 62px)',
              fontWeight: 400,
              color: '#fcfaee',
              lineHeight: 1.15,
              marginBottom: '20px',
              opacity: 0,
            }}
          >
            {hero.titleLine}
            {hero.titleEmphasis && (
              <>
                <br />
                <em style={{ fontStyle: 'italic' }}>{hero.titleEmphasis}</em>
              </>
            )}
          </h1>
        )}

        {(hero.subtitleLine1 || hero.subtitleLine2) && (
          <p
            ref={subtitleRef}
            style={{
              fontFamily: isArabic ? 'system-ui, -apple-system, sans-serif' : 'Inter, system-ui, sans-serif',
              fontSize: '13px',
              fontWeight: 400,
              color: '#fcfaee',
              lineHeight: 1.7,
              marginBottom: '32px',
              opacity: 0,
              maxWidth: '420px',
              margin: '0 auto 32px',
            }}
          >
            {hero.subtitleLine1}
            {hero.subtitleLine1 && hero.subtitleLine2 && <br />}
            {hero.subtitleLine2}
          </p>
        )}

        {hero.ctaText && (
          <a
            ref={ctaRef}
            href={hero.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: '#2b0e06',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '14px 32px',
              backgroundColor: '#c69c6d',
              borderRadius: '50px',
              opacity: 0,
              transition: 'all 0.4s ease',
              boxShadow: '0 4px 20px rgba(198, 156, 109, 0.3)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = '#d4aa7a';
              el.style.transform = 'scale(1.05)';
              el.style.boxShadow = '0 6px 28px rgba(198, 156, 109, 0.5)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = '#c69c6d';
              el.style.transform = 'scale(1)';
              el.style.boxShadow = '0 4px 20px rgba(198, 156, 109, 0.3)';
            }}
          >
            {hero.ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
