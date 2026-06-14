import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen" style={{ paddingTop: '80px' }}>
      {/* ─── Header band ─── */}
      <div
        className="torn-bottom"
        style={{ background: '#ede3d0', paddingBottom: '3.5rem' }}
      >
        <div className="max-w-2xl mx-auto px-6 pt-12">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="section-label mb-4"
          >
            the person behind the yapping
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: 'clamp(2.5rem, 7vw, 3.5rem)',
              fontWeight: 700,
              color: '#1a1209',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            about me
          </motion.h1>
        </div>
      </div>

      {/* ─── Content ─── */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="paper-card"
          style={{
            padding: '2.5rem',
            borderRadius: '2px',
            position: 'relative',
          }}
        >
          {/* Washi tape */}
          <div
            style={{
              position: 'absolute',
              top: '-12px',
              left: '40px',
              width: '80px',
              height: '22px',
              background: 'rgba(184, 212, 232, 0.75)',
              transform: 'rotate(-1deg)',
              borderLeft: '1px solid rgba(196,168,130,0.3)',
              borderRight: '1px solid rgba(196,168,130,0.3)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              "You'd be thrilled to know I am nowhere near this sarcastic irl. In fact, I am quite, extravagantly, introverted. Very, very introverted. So please don't ever approach me.",
              "Anyways, I'm Edan, a uni student who's just trying to write random stuff that cures my boredom when I'm not busy wasting time on games or Netflix or stressing about my final exams. I never claim to be a writer. I just let my thoughts flow free, however controversial they may seem. I am very unapologetically me, although I will apologise to the right person.",
              "I hope that reading my articles makes you guys feel better about your lives. Haha jk I'm not that pessimistic. If you made it this far, my instagram is @edan_zhao if you wanna chat about life. Deep, I know.",
            ].map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: '#1a1209',
                  margin: 0,
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              margin: '2rem 0',
              height: '1px',
              background: 'rgba(196,168,130,0.4)',
            }}
          />

          {/* Quick facts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              ['currently', 'thinking about something I probably shouldn\'t overthink'],
              ['interests', 'filmmaking, philosophy, psychology, software dev, music, writing'],
              ['posting schedule', 'whenever the mood strikes, which is never predictable'],
              ['contact', 'chilledsneakers@gmail.com (business email. no, i don\'t sell sneakers anymore.)'],
            ].map(([label, value]) => (
              <div key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'baseline' }}>
                <span
                  style={{
                    fontFamily: "'Special Elite', monospace",
                    fontSize: '10px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#c4a882',
                    minWidth: '110px',
                    flexShrink: 0,
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: '0.875rem',
                    color: '#3d2e1e',
                    lineHeight: 1.5,
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

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
