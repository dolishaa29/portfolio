import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projects } from '../data/portfolio';
import { Reveal, Section, Tag } from './ui';

const Cover = ({ project }) =>
  project.image ? (
    <img
      src={project.image}
      alt={`${project.title} screenshot`}
      loading='lazy'
      className='h-64 w-full object-cover object-top transition duration-700 group-hover:scale-[1.03] lg:h-full'
    />
  ) : (
    <div className='relative grid h-64 w-full place-items-center overflow-hidden bg-surface-2 lg:h-full'>
      <div className='absolute inset-0 bg-grid opacity-60' />
      <div className='absolute h-32 w-32 rounded-full bg-violet-500/30 blur-3xl' />
      <span className='relative text-sm text-zinc-400'>planner → search → reader</span>
    </div>
  );

const Links = ({ project }) => (
  <div className='flex gap-2'>
    {project.live && (
      <a
        href={project.live}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink transition hover:bg-zinc-200'
      >
        Live <ArrowUpRight size={15} />
      </a>
    )}
    <a
      href={project.github}
      target='_blank'
      rel='noopener noreferrer'
      className='inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm text-white transition hover:border-zinc-500'
    >
      <FaGithub size={14} /> Code
    </a>
  </div>
);

const Projects = () => {
  return (
    <Section
      id='projects'
      eyebrow='Selected work'
      title='Things I have'
      accent='built.'
      description='Production-style platforms and AI systems — from telemedicine and campus ERP to autonomous research agents.'
      className='border-y border-line bg-surface/40'
    >
      <div className='space-y-6'>
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={0.05 * i}>
            <article className='card group grid overflow-hidden lg:grid-cols-2'>
              <div className={`overflow-hidden border-line ${i % 2 ? 'lg:order-2 lg:border-l' : 'lg:border-r'} border-b lg:border-b-0`}>
                <Cover project={p} />
              </div>
              <div className='flex flex-col p-7 md:p-9'>
                <p className='text-xs font-semibold uppercase tracking-wider text-violet-300'>{p.subtitle}</p>
                <h3 className='mt-3 text-3xl font-semibold tracking-tight text-white'>{p.title}</h3>
                <p className='mt-4 leading-relaxed text-muted'>{p.description}</p>
                <ul className='mt-5 space-y-2'>
                  {p.points.map((pt) => (
                    <li key={pt} className='flex gap-3 text-sm leading-relaxed text-zinc-300'>
                      <span className='mt-2 h-1 w-1 shrink-0 rounded-full bg-fuchsia-300' />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className='mt-6 flex flex-wrap gap-2'>
                  {p.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <div className='mt-auto pt-8'>
                  <Links project={p} />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

    </Section>
  );
};

export default Projects;
