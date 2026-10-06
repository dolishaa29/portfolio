import { Bot, Cloud, Code2, Radio, Sparkles } from 'lucide-react';
import { about, services } from '../data/portfolio';
import { Reveal, Section } from './ui';

const icons = [Code2, Bot, Radio, Cloud];

const About = () => (
  <Section id='about' eyebrow='About me' title='Engineer by craft,' accent='curious by default.'>
    <div className='grid gap-4 md:grid-cols-6'>
      <Reveal className='md:col-span-4'>
        <div className='card h-full p-7 md:p-9'>
          <p className='text-xl leading-relaxed text-zinc-200 md:text-2xl md:leading-relaxed'>{about.summary}</p>
          <div className='mt-8 flex flex-wrap gap-2'>
            {about.interests.map((i) => (
              <span key={i} className='rounded-full bg-violet-400/10 px-3 py-1 text-sm text-violet-200'>
                {i}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1} className='md:col-span-2'>
        <div className='card relative h-full overflow-hidden p-7'>
          <div className='absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl' />
          <Sparkles className='text-fuchsia-300' size={22} />
          <p className='mt-6 text-xs font-semibold uppercase tracking-wider text-subtle'>Currently</p>
          <p className='mt-2 text-lg font-medium text-white'>Software Developer Intern</p>
          <p className='text-muted'>Sipify · Marketing & Ads platform</p>
          <p className='mt-6 text-xs font-semibold uppercase tracking-wider text-subtle'>Studying</p>
          <p className='mt-2 text-white'>B.Tech in Computer Science</p>
        </div>
      </Reveal>

      {about.highlights.map((h, i) => {
        const Icon = icons[i];
        return (
          <Reveal key={h.title} delay={0.05 * i} className='md:col-span-3 lg:col-span-3'>
            <div className='card group h-full p-7 transition hover:border-zinc-600'>
              <div className='grid h-11 w-11 place-items-center rounded-xl border border-line bg-white/3 text-violet-300 transition group-hover:text-white'>
                <Icon size={20} />
              </div>
              <h3 className='mt-5 text-lg font-medium text-white'>{h.title}</h3>
              <p className='mt-2 leading-relaxed text-muted'>{h.text}</p>
            </div>
          </Reveal>
        );
      })}
    </div>

    <Reveal className='mt-20'>
      <p className='mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-subtle'>What I can do for you</p>
    </Reveal>
    <div className='grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4'>
      {services.map((s, i) => (
        <Reveal key={s.title} delay={0.05 * i} className='bg-ink'>
          <div className='h-full p-7'>
            <span className='text-sm text-violet-300'>0{i + 1}</span>
            <h3 className='mt-4 text-lg font-medium text-white'>{s.title}</h3>
            <p className='mt-2 text-sm leading-relaxed text-muted'>{s.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default About;
