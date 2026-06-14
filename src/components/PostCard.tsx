import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Post } from '../data/posts.ts';

interface Props {
  post: Post;
  index: number;
}

export default function PostCard({ post, index }: Props) {
  const tapeYellow = 'rgba(245, 230, 163, 0.8)';
  const tapeBlue = 'rgba(184, 212, 232, 0.75)';
  const tapeColor = post.tapeColor === 'blue' ? tapeBlue : tapeYellow;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.2, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02, rotate: 0 }}
      style={{ rotate: `${post.rotation}deg`, transformOrigin: 'center center' }}
      className="scrap-card"
    >
      {/* Washi tape at top */}
      <div
        style={{
          position: 'absolute',
          top: '-11px',
          left: '50%',
          transform: 'translateX(-50%) rotate(-2deg)',
          width: '72px',
          height: '22px',
          background: tapeColor,
          borderLeft: '1px solid rgba(196,168,130,0.3)',
          borderRight: '1px solid rgba(196,168,130,0.3)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />

      <Link
        to={`/post/${post.slug}`}
        className="block p-6 pt-7 no-underline group"
        style={{ textDecoration: 'none' }}
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="section-label"
              style={{ fontSize: '9px', letterSpacing: '0.2em' }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2
          className="mb-2 group-hover:text-ink-light transition-colors duration-200"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '1.15rem',
            fontWeight: 700,
            color: '#1a1209',
            lineHeight: 1.25,
          }}
        >
          {post.title}
        </h2>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: '0.85rem',
            color: '#8a7a68',
            lineHeight: 1.55,
            margin: '0 0 1rem',
          }}
        >
          {post.tagline}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between">
          <span
            style={{
              fontFamily: "'Special Elite', monospace",
              fontSize: '10px',
              letterSpacing: '0.15em',
              color: '#c4a882',
              textTransform: 'uppercase',
            }}
          >
            {post.date}
          </span>
          <span
            className="group-hover:translate-x-1 transition-transform duration-200"
            style={{
              fontFamily: "'Special Elite', monospace",
              fontSize: '10px',
              letterSpacing: '0.12em',
              color: '#8a7a68',
              textTransform: 'uppercase',
            }}
          >
            read →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
