import { Briefcase } from 'lucide-react';
import { experience } from '../data/portfolio';
import { Reveal, Section, Tag } from './ui';

const Experience = () => (
  <Section
    id='experience'
    eyebrow='Experience'
    title='Where I have'
    accent='worked.'
    description='Building real products with real teams — from MERN apps to a live ads platform.'
  >
    <div className='relative'>
      <div className='space-y-10'>
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={0.08 * i}>
            <div className='relative grid gap-4 md:grid-cols-4'>
              <div className='hidden pt-2.5 text-sm text-muted md:block'>{job.period}</div>
              <div className='relative pl-14 md:col-span-3'>
                {i < experience.length - 1 && (
                  <div className='absolute top-12 -bottom-10 left-[19px] w-px bg-linear-to-b from-violet-400/50 to-line' />
                )}
                <div className='absolute top-1 left-0 grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-violet-300'>
                  <Briefcase size={17} />
                </div>
                <div className='card p-6 md:p-7'>
                  <div className='flex flex-wrap items-start justify-between gap-3'>
                    <div>
                      <h3 className='text-xl font-medium text-white'>{job.role}</h3>
                      <p className='mt-1 text-violet-300'>{job.company}</p>
                    </div>
                    <span className='rounded-full border border-line px-3 py-1 text-xs text-muted'>{job.type}</span>
                  </div>
                  <p className='mt-2 text-sm text-muted md:hidden'>{job.period}</p>
                  <ul className='mt-5 space-y-2.5'>
                    {job.points.map((p) => (
                      <li key={p} className='flex gap-3 leading-relaxed text-zinc-300'>
                        <span className='mt-2.5 h-1 w-1 shrink-0 rounded-full bg-violet-400' />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className='mt-6 flex flex-wrap gap-2'>
                    {job.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);

export default Experience;
