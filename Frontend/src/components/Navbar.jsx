import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ['home', ...navLinks.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className='fixed inset-x-0 top-0 z-50 px-4 pt-4'>
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-5 ${
          scrolled || open ? 'border-line bg-ink/75 shadow-2xl shadow-black/40 backdrop-blur-xl' : 'border-transparent'
        }`}
      >
        <a href='#home' className='flex items-center gap-2.5 font-semibold tracking-tight text-white'>
          <span className='grid h-8 w-8 place-items-center rounded-lg bg-linear-to-br from-violet-400 to-fuchsia-400 text-sm font-bold text-ink'>
            DG
          </span>
          <span className='hidden sm:inline'>{profile.name}</span>
        </a>

        <div className='hidden items-center gap-1 rounded-full border border-line bg-white/3 p-1 md:flex'>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
                active === link.id ? 'text-white' : 'text-muted hover:text-white'
              }`}
            >
              {active === link.id && (
                <motion.span
                  layoutId='nav-pill'
                  className='absolute inset-0 rounded-full bg-white/10'
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className='relative'>{link.label}</span>
            </a>
          ))}
        </div>

        <div className='flex items-center gap-2'>
          <a
            href={profile.resumePdf}
            download
            className='hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink transition hover:bg-zinc-200 sm:flex'
          >
            <Download size={15} /> Resume
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className='grid h-10 w-10 place-items-center rounded-xl border border-line text-white md:hidden'
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className='mx-auto mt-2 max-w-6xl rounded-2xl border border-line bg-surface/95 p-3 backdrop-blur-xl md:hidden'
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base ${
                  active === link.id ? 'bg-white/10 text-white' : 'text-muted'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumePdf}
              download
              className='mt-2 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 font-medium text-ink'
            >
              <Download size={16} /> Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
