import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { profile, socials, stats } from '../data/portfolio';

const fade = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const Str = ({ children }) => <span className='text-emerald-300'>'{children}'</span>;

const CodeCard = () => (
  <div className='card overflow-hidden bg-surface/80 font-mono text-[12.5px] leading-relaxed shadow-2xl shadow-violet-950/40 backdrop-blur sm:text-[13px]'>
    <div className='flex items-center gap-2 border-b border-line px-4 py-3'>
      <span className='h-3 w-3 rounded-full bg-[#ff5f57]' />
      <span className='h-3 w-3 rounded-full bg-[#febc2e]' />
      <span className='h-3 w-3 rounded-full bg-[#28c840]' />
      <span className='ml-3 text-xs text-subtle'>dolisha.ts</span>
    </div>
    <pre className='overflow-x-auto p-5 text-zinc-300'>
      <span className='text-fuchsia-300'>const</span> <span className='text-sky-300'>developer</span> = {'{'}
      {'\n'}  name: <Str>{profile.name}</Str>,
      {'\n'}  role: <Str>{profile.role}</Str>,
      {'\n'}  currently: <Str>SDE Intern @ Sipify</Str>,
      {'\n'}  education: <Str>B.Tech CSE · 9.3 CGPA</Str>,
      {'\n'}  stack: [<Str>React</Str>, <Str>Next.js</Str>, <Str>NestJS</Str>,
      {'\n'}          <Str>FastAPI</Str>, <Str>LangChain</Str>],
      {'\n'}  cloud: [<Str>AWS</Str>, <Str>Docker</Str>, <Str>Nginx</Str>],
      {'\n'}  openToWork: <span className='text-orange-300'>true</span>,
      {'\n'}{'}'};
    </pre>
  </div>
);

const Hero = () => (
  <section id='home' className='relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28'>
    <div className='pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]' />
    <div className='pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[140px]' />
    <div className='pointer-events-none absolute top-40 -right-40 h-[360px] w-[360px] rounded-full bg-fuchsia-500/15 blur-[120px]' />

    <div className='relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]'>
      <div>
        <motion.div {...fade(0)} className='mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-white/3 px-3.5 py-1.5 text-sm text-zinc-300'>
          <span className='h-2 w-2 animate-pulse-dot rounded-full bg-green-400' />
          {profile.availability}
        </motion.div>

        <motion.h1 {...fade(0.1)} className='text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[3.75rem] xl:text-[4rem]'>
          Hi, I&apos;m Dolisha.
          <br />
          <span className='text-gradient'>I build for the web</span>
          <br />
          <span className='text-zinc-500'>&amp; with AI.</span>
        </motion.h1>

        <motion.p {...fade(0.2)} className='mt-7 max-w-xl text-lg leading-relaxed text-muted'>
          {profile.intro}
        </motion.p>

        <motion.div {...fade(0.3)} className='mt-9 flex flex-wrap items-center gap-3'>
          <a
            href='#projects'
            className='group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-ink transition hover:bg-zinc-200'
          >
            View my work <ArrowRight size={17} className='transition group-hover:translate-x-0.5' />
          </a>
          <a
            href={profile.resumePdf}
            download
            className='inline-flex items-center gap-2 rounded-full border border-line bg-white/3 px-6 py-3 font-medium text-white transition hover:border-zinc-500'
          >
            <Download size={17} /> Download CV
          </a>
        </motion.div>

        <motion.div {...fade(0.4)} className='mt-9 flex flex-wrap items-center gap-5 text-sm text-muted'>
          <span className='inline-flex items-center gap-1.5'>
            <MapPin size={15} /> {profile.location}
          </span>
          <span className='hidden h-4 w-px bg-line sm:block' />
          <div className='flex gap-2'>
            {[
              [socials.github, FaGithub, 'GitHub'],
              [socials.linkedin, FaLinkedinIn, 'LinkedIn'],
              [socials.twitter, FaXTwitter, 'X / Twitter'],
            ].map(([href, Icon, label]) => (
              <a
                key={label}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={label}
                className='grid h-9 w-9 place-items-center rounded-full border border-line text-zinc-300 transition hover:border-violet-400 hover:text-white'
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className='relative min-w-0'
      >
        <div className='absolute -inset-4 rounded-[2rem] bg-linear-to-br from-violet-500/20 to-fuchsia-500/10 blur-2xl' />
        <div className='relative'>
          <CodeCard />
        </div>
      </motion.div>
    </div>

    <div className='relative mx-auto mt-20 max-w-6xl px-4 sm:px-6'>
      <motion.div {...fade(0.5)} className='grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4'>
        {stats.map((s) => (
          <div key={s.label} className='bg-ink px-6 py-6'>
            <div className='text-3xl font-semibold tracking-tight text-white'>{s.value}</div>
            <div className='mt-1 text-sm text-muted'>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
