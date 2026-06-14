import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPost } from '../data/posts.ts';

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  if (!post) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen" style={{ paddingTop: '80px' }}>
      {/* ─── Header band ─── */}
      <div
        className="torn-bottom"
        style={{ background: '#ede3d0', paddingBottom: '3.5rem' }}
      >
        <div className="max-w-2xl mx-auto px-6 pt-12">
          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-2 mb-5"
          >
            {post.tags.map(tag => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Special Elite', monospace",
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#8a7a68',
                }}
              >
                #{tag}
              </span>
            ))}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: 'clamp(2rem, 6vw, 3rem)',
              fontWeight: 700,
              color: '#1a1209',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}
          >
            {post.title}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            style={{
              fontFamily: "'Special Elite', monospace",
              fontSize: '0.9rem',
              color: '#8a7a68',
              lineHeight: 1.6,
              letterSpacing: '0.03em',
            }}
          >
            {post.tagline}
          </motion.p>

          {/* Date */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28, duration: 0.4 }}
            style={{
              fontFamily: "'Special Elite', monospace",
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#c4a882',
              marginTop: '1rem',
            }}
          >
            {post.date}
          </motion.p>
        </div>
      </div>

      {/* ─── Article body ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-2xl mx-auto px-6 py-16"
      >
        {/* Paper card with ruled lines */}
        <div
          className="ruled-paper paper-card"
          style={{
            padding: '2rem 2.5rem 2.5rem 4.5rem',
            position: 'relative',
            borderRadius: '2px',
          }}
        >
          {/* Red margin line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '48px',
              width: '1.5px',
              background: 'rgba(196,168,130,0.45)',
              pointerEvents: 'none',
            }}
          />

          {/* Washi tape decoration */}
          <div
            style={{
              position: 'absolute',
              top: '-12px',
              left: '32px',
              width: '80px',
              height: '22px',
              background: post.tapeColor === 'blue'
                ? 'rgba(184, 212, 232, 0.75)'
                : 'rgba(245, 230, 163, 0.8)',
              transform: 'rotate(-1.5deg)',
              borderLeft: '1px solid rgba(196,168,130,0.3)',
              borderRight: '1px solid rgba(196,168,130,0.3)',
            }}
          />

          <div className="prose-yap" style={{ position: 'relative', zIndex: 1 }}>
            {post.paragraphs.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </div>
        </div>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            to="/"
            className="paper-nav-link"
            style={{ fontSize: '11px' }}
          >
            ← back to the pile
          </Link>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer
        className="text-center py-10"
        style={{ borderTop: '1px solid rgba(196,168,130,0.3)' }}
      >
        <p
          style={{
            fontFamily: "'Special Elite', monospace",
            fontSize: '11px',
            color: '#c4a882',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          yap 'n' crap
        </p>
      </footer>
    </div>
  );
}
