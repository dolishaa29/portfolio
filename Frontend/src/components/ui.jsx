import { motion } from 'framer-motion';

export const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true, margin: '-60px' }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Section = ({ id, eyebrow, title, accent, description, children, className = '' }) => (
  <section id={id} className={`relative py-24 md:py-32 ${className}`}>
    <div className='mx-auto max-w-6xl px-4 sm:px-6'>
      <Reveal className='mb-14 max-w-2xl'>
        <p className='mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent'>
          <span className='text-subtle'>//</span> {eyebrow}
        </p>
        <h2 className='text-4xl font-semibold tracking-tight text-white md:text-5xl'>
          {title} {accent && <span className='text-gradient'>{accent}</span>}
        </h2>
        {description && <p className='mt-5 text-lg leading-relaxed text-muted'>{description}</p>}
      </Reveal>
      {children}
    </div>
  </section>
);

export const Tag = ({ children }) => (
  <span className='rounded-full border border-line bg-white/3 px-3 py-1 text-xs text-zinc-300'>
    {children}
  </span>
);
