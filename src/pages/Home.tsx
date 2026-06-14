import { motion } from 'framer-motion';
import { posts } from '../data/posts.ts';
import PostCard from '../components/PostCard.tsx';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ─── */}
      <section
        className="torn-bottom relative flex flex-col items-center justify-center text-center pt-32 pb-24 px-6"
        style={{ background: '#ede3d0', minHeight: '52vh' }}
      >
        {/* Decorative torn scrap top-left */}
        <motion.div
          initial={{ opacity: 0, rotate: -8 }}
          animate={{ opacity: 1, rotate: -6 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{
            position: 'absolute',
            top: '72px',
            left: '5%',
            width: '90px',
            height: '56px',
            background: '#faf7f2',
            boxShadow: '2px 2px 8px rgba(26,18,9,0.1)',
            transform: 'rotate(-6deg)',
            clipPath: 'polygon(0 0, 92% 0, 100% 85%, 88% 100%, 10% 96%, 0 80%)',
          }}
        >
          <div
            style={{
              padding: '10px 12px',
              fontFamily: "'Special Elite', monospace",
              fontSize: '9px',
              letterSpacing: '0.2em',
              color: '#c4a882',
              textTransform: 'uppercase',
            }}
          >
            est. 2026
          </div>
        </motion.div>

        {/* Decorative tape strip top-right */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.35 }}
          style={{
            position: 'absolute',
            top: '90px',
            right: '8%',
            width: '64px',
            height: '22px',
            background: 'rgba(184, 212, 232, 0.7)',
            transform: 'rotate(8deg)',
            borderLeft: '1px solid rgba(196,168,130,0.3)',
            borderRight: '1px solid rgba(196,168,130,0.3)',
          }}
        />

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label mb-4" style={{ letterSpacing: '0.3em' }}>
            a blog of sorts
          </p>

          <h1
            className="collage-title"
            style={{ fontSize: 'clamp(4rem, 14vw, 9rem)' }}
          >
            yap 'n' crap
          </h1>

          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: '0.82rem',
              color: '#8a7a68',
              marginTop: '2.75rem',
              maxWidth: '480px',
              lineHeight: 1.85,
              textAlign: 'left',
              borderLeft: '2px solid rgba(196,168,130,0.5)',
              paddingLeft: '1rem',
            }}
          >
            <p style={{ margin: '0 0 0.75rem', fontStyle: 'italic' }}>
              "This is a story about how I learned something and I'm not saying this thing is true or not
              <br />I'm just saying it's what I learned
              <br />I told you something. It was just for you and you told everybody
              <br />So I learned cut out the middle man, make it all for everybody, always
              <br />Everybody can't turn around and tell everybody, everybody already knows, I told them
              <br />But this means there isn't a place in my life for you or someone like you
              <br />Is it sad? Sure. But it's a sadness I chose"
            </p>
            <span style={{
              fontFamily: "'Special Elite', monospace",
              fontSize: '10px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#c4a882',
            }}>
              — "That Power" · Childish Gambino
            </span>
          </motion.blockquote>
        </motion.div>

        {/* Floating sticker — bottom right */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            bottom: '52px',
            right: '7%',
            transform: 'rotate(12deg)',
            fontFamily: "'Special Elite', monospace",
            fontSize: '11px',
            color: '#8a7a68',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            border: '1.5px solid #c4a882',
            padding: '4px 10px',
            background: 'rgba(244, 237, 224, 0.6)',
          }}
        >
          opinions included
        </motion.div>
      </section>

      {/* ─── Posts Grid ─── */}
      <section
        className="torn-top relative px-6 py-20"
        style={{ background: '#f4ede0', paddingTop: '5rem' }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="flex items-center gap-4 mb-12"
          >
            <span className="section-label">the pile</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(196,168,130,0.4)' }} />
            <span className="section-label">{posts.length} posts</span>
          </motion.div>

          <div
            className="grid gap-8"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
          >
            {[...posts]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
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
          yap 'n' crap — all thoughts are mine, all typos are also mine
        </p>
      </footer>
    </div>
  );
}
