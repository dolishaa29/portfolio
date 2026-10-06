import { ArrowUp } from 'lucide-react';
import { navLinks, profile } from '../data/portfolio';

const Footer = () => (
  <footer className='border-t border-line'>
    <div className='mx-auto max-w-6xl px-4 py-14 sm:px-6'>
      <div className='flex flex-col justify-between gap-10 md:flex-row md:items-end'>
        <div>
          <p className='text-4xl font-semibold tracking-tight text-gradient md:text-5xl'>{profile.name}</p>
          <p className='mt-3 text-muted'>{profile.role} · {profile.location}</p>
        </div>
        <nav className='flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted'>
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className='transition hover:text-white'>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className='mt-12 flex items-center justify-between border-t border-line pt-6 text-sm text-subtle'>
        <p>© {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.</p>
        <a
          href='#home'
          aria-label='Back to top'
          className='grid h-10 w-10 place-items-center rounded-full border border-line text-zinc-300 transition hover:border-zinc-500 hover:text-white'
        >
          <ArrowUp size={16} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
