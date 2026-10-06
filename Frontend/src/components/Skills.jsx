import { coreCS, skillGroups } from '../data/portfolio';
import { Reveal, Section, Tag } from './ui';

const marquee = skillGroups.flatMap((g) => g.items);

const Skills = () => (
  <Section
    id='skills'
    eyebrow='Skills'
    title='The toolkit I'
    accent='ship with.'
    description='Languages, frameworks and infrastructure I use to take products from idea to production.'
    className='border-y border-line bg-surface/40'
  >
    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {skillGroups.map((group, i) => (
        <Reveal key={group.title} delay={0.05 * i}>
          <div className='card h-full p-6 transition hover:border-zinc-600'>
            <div className='mb-5 flex items-center justify-between'>
              <h3 className='font-medium text-white'>{group.title}</h3>
              <span className='text-xs text-subtle'>{String(group.items.length).padStart(2, '0')}</span>
            </div>
            <div className='flex flex-wrap gap-2'>
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>

    <Reveal className='mt-6'>
      <div className='card flex flex-col gap-4 p-6 md:flex-row md:items-center'>
        <h3 className='shrink-0 font-medium text-white'>Core CS</h3>
        <div className='flex flex-wrap gap-2'>
          {coreCS.map((c) => (
            <Tag key={c}>{c}</Tag>
          ))}
        </div>
      </div>
    </Reveal>

    <div className='mask-fade-x mt-14 overflow-hidden' aria-hidden='true'>
      <div className='flex w-max animate-marquee gap-10 pr-10'>
        {[...marquee, ...marquee].map((s, i) => (
          <span key={i} className='whitespace-nowrap text-3xl font-semibold tracking-tight text-zinc-700'>
            {s}
          </span>
        ))}
      </div>
    </div>
  </Section>
);

export default Skills;
