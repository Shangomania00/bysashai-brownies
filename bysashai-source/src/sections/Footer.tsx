import { useLanguage } from '../hooks/useLanguage';
import { getContent } from '../content';

export default function Footer() {
  const { language, isArabic, dir } = useLanguage();
  const content = getContent(language);
  const footer = content.footer;

  const hasFooterContent =
    footer.ageGateText ||
    footer.brandName ||
    footer.brandTaglineLines.length > 0 ||
    footer.columns.length > 0 ||
    footer.copyright;

  if (!hasFooterContent) {
    return null;
  }

  const textAlign = dir === 'rtl' ? 'right' : 'left';

  return (
    <footer
      id="footer"
      style={{
        backgroundColor: '#f0ecd7',
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(24, 12, 4, 0.1)',
      }}
    >
      {/* Age Gate */}
      <div
        style={{
          textAlign: 'center',
          padding: '80px 24px 60px',
        }}
      >
        {footer.ageGateText && (
          <p
            style={{
              fontFamily: isArabic
                ? 'system-ui, -apple-system, sans-serif'
                : '"Cormorant Garamond", Georgia, serif',
              fontSize: isArabic ? 'clamp(22px, 2.8vw, 34px)' : 'clamp(24px, 3vw, 36px)',
              fontWeight: 400,
              fontStyle: isArabic ? 'normal' : 'italic',
              color: '#180c04',
              lineHeight: 1.3,
              maxWidth: '500px',
              margin: '0 auto',
              textWrap: 'balance',
            }}
          >
            {footer.ageGateText}
          </p>
        )}
      </div>

      {/* Footer Columns */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px 80px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
        }}
      >
        {/* Brand Column */}
        <div>
          {footer.brandName && (
            <p
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: '18px',
                fontWeight: 500,
                color: '#180c04',
                letterSpacing: '1px',
                textTransform: isArabic ? 'none' : 'uppercase',
                marginBottom: '16px',
              }}
            >
              {footer.brandName}
            </p>
          )}
          {footer.brandTaglineLines.length > 0 && (
            <p
              style={{
                fontFamily: isArabic
                  ? 'system-ui, -apple-system, sans-serif'
                  : 'Inter, system-ui, sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: 1.6,
                color: '#696969',
              }}
            >
              {footer.brandTaglineLines.map((line, index) => (
                <span key={`${line}-${index}`}>
                  {line}
                  {index < footer.brandTaglineLines.length - 1 && <br />}
                </span>
              ))}
            </p>
          )}
        </div>

        {footer.columns.map((column) => (
          <div key={column.heading}>
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '11px',
                fontWeight: 600,
                color: '#938977',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '16px',
                textAlign,
              }}
            >
              {column.heading}
            </p>
            {column.links.map((item) => (
              <a
                key={`${column.heading}-${item.label}`}
                href={item.href}
                onClick={(e) => {
                  if (!item.href || item.href === '#') e.preventDefault();
                }}
                style={{
                  display: 'block',
                  fontFamily: isArabic
                    ? 'system-ui, -apple-system, sans-serif'
                    : 'Inter, system-ui, sans-serif',
                  fontSize: '12px',
                  fontWeight: 400,
                  color: '#696969',
                  textDecoration: 'none',
                  marginBottom: '10px',
                  transition: 'color 0.4s ease',
                  textAlign,
                }}
                onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = '#180c04'; }}
                onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = '#696969'; }}
              >
                {item.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: '1px solid rgba(24, 12, 4, 0.08)',
          padding: '24px',
          textAlign: 'center',
        }}
      >
        {footer.copyright && (
          <p
            style={{
              fontFamily: isArabic
                ? 'system-ui, -apple-system, sans-serif'
                : 'Inter, system-ui, sans-serif',
              fontSize: '11px',
              fontWeight: 400,
              color: '#696969',
              letterSpacing: '0.5px',
            }}
          >
            {footer.copyright}
          </p>
        )}
      </div>
    </footer>
  );
}
