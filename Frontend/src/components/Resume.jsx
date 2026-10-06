import { Download, ExternalLink, FileText } from 'lucide-react';
import { profile } from '../data/portfolio';
import { Reveal, Section } from './ui';

const Resume = () => (
  <Section
    id='resume'
    eyebrow='Resume'
    title='Everything on'
    accent='one page.'
    description='A quick read of my experience, projects and skills — or grab the PDF.'
  >
    <div className='grid gap-8 lg:grid-cols-[280px_1fr]'>
      <Reveal>
        <div className='card space-y-6 p-6 lg:sticky lg:top-28'>
          <div className='grid h-12 w-12 place-items-center rounded-xl bg-linear-to-br from-violet-400 to-fuchsia-400 text-ink'>
            <FileText size={22} />
          </div>
          <div>
            <p className='font-medium text-white'>Dolisha_Gandhi_Resume.pdf</p>
            <p className='mt-1 text-sm text-muted'>1 page · PDF</p>
          </div>
          <div className='space-y-2'>
            <a
              href={profile.resumePdf}
              download
              className='flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-ink transition hover:bg-zinc-200'
            >
              <Download size={17} /> Download PDF
            </a>
            <a
              href={profile.resumePdf}
              target='_blank'
              rel='noopener noreferrer'
              className='flex w-full items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-white transition hover:border-zinc-500'
            >
              <ExternalLink size={16} /> Open in new tab
            </a>
          </div>
          <dl className='space-y-3 border-t border-line pt-5 text-sm'>
            {[
              ['Role', profile.role],
              ['Current', 'SDE Intern @ Sipify'],
              ['Degree', 'B.Tech CSE · 9.3 CGPA'],
              ['Based in', profile.location],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className='text-xs font-semibold uppercase tracking-wider text-subtle'>{k}</dt>
                <dd className='mt-0.5 text-zinc-200'>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>

      <Reveal delay={0.1} className='min-w-0'>
        <a
          href={profile.resumePdf}
          target='_blank'
          rel='noopener noreferrer'
          className='block overflow-hidden rounded-xl bg-white shadow-2xl shadow-black/50 ring-1 ring-line transition hover:ring-violet-400/60'
        >
          <img
            src={profile.resumePreview}
            alt={`${profile.name} resume`}
            loading='lazy'
            width={1489}
            height={2105}
            className='h-auto w-full'
          />
        </a>
      </Reveal>
    </div>
  </Section>
);

export default Resume;
