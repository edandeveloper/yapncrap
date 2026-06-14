import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NavBar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{ background: 'rgba(244, 237, 224, 0.88)', backdropFilter: 'blur(8px)' }}
    >
      <Link to="/" className="group flex items-baseline gap-2 no-underline">
        <span
          className="font-bold text-ink"
          style={{
            fontFamily: "'Lora', Georgia, serif",
            fontWeight: 700,
            fontSize: '1.2rem',
            letterSpacing: '-0.03em',
            textShadow: '2px 3px 0 rgba(255,255,255,0.9), 4px 6px 0 rgba(255,255,255,0.35)',
            transition: 'text-shadow 0.2s ease',
          }}
        >
          yap 'n' crap
        </span>
      </Link>

      <div className="flex items-center gap-6">
        {!isHome && (
          <Link to="/" className="paper-nav-link">
            all posts
          </Link>
        )}
        <Link to="/about" className="paper-nav-link">
          about
        </Link>
      </div>
    </motion.nav>
  );
}
