import { Award, GraduationCap, Trophy } from 'lucide-react';
import { achievements, certifications, education } from '../data/portfolio';
import { Reveal, Section } from './ui';

const Education = () => (
  <Section id='education' eyebrow='Education & recognition' title='Learning,' accent='and proving it.'>
    <div className='grid gap-4 lg:grid-cols-5'>
      <Reveal className='lg:col-span-2'>
        <div className='card h-full p-7'>
          <div className='flex items-center gap-3 text-white'>
            <GraduationCap size={20} className='text-violet-300' />
            <h3 className='font-medium'>Education</h3>
          </div>
          <div className='mt-6 space-y-6'>
            {education.map((e) => (
              <div key={e.degree} className='border-l border-line pl-5'>
                <p className='text-xs text-subtle'>{e.period}</p>
                <p className='mt-1 font-medium text-white'>{e.degree}</p>
                <p className='text-sm text-muted'>{e.school}</p>
                <p className='mt-2 inline-block rounded-full bg-violet-400/10 px-2.5 py-0.5 text-xs text-violet-200'>
                  {e.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className='grid gap-4 lg:col-span-3'>
        <Reveal delay={0.1}>
          <div className='card p-7'>
            <div className='flex items-center gap-3 text-white'>
              <Trophy size={20} className='text-amber-300' />
              <h3 className='font-medium'>Achievements</h3>
            </div>
            <div className='mt-6 grid gap-3 sm:grid-cols-2'>
              {achievements.map((a) => (
                <div key={a.title} className='rounded-xl border border-line bg-white/2 p-4'>
                  <p className='font-medium text-white'>{a.title}</p>
                  <p className='mt-1 text-sm leading-relaxed text-muted'>{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className='card p-7'>
            <div className='flex items-center gap-3 text-white'>
              <Award size={20} className='text-sky-300' />
              <h3 className='font-medium'>Certifications</h3>
            </div>
            <ul className='mt-5 divide-y divide-line'>
              {certifications.map((c) => (
                <li key={c.title} className='flex items-center justify-between gap-4 py-3'>
                  <span className='text-zinc-200'>{c.title}</span>
                  <span className='shrink-0 text-xs text-subtle'>{c.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  </Section>
);

export default Education;
