import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { profile, socials } from '../data/portfolio';
import { Reveal, Section } from './ui';

const inputClass =
  'w-full rounded-xl border border-line bg-ink px-4 py-3 text-white placeholder:text-zinc-600 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = form.subject || `Portfolio enquiry from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const details = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: profile.location },
  ];

  const socialLinks = [
    { href: socials.github, icon: FaGithub, label: 'GitHub' },
    { href: socials.linkedin, icon: FaLinkedinIn, label: 'LinkedIn' },
    { href: socials.twitter, icon: FaXTwitter, label: 'X' },
    { href: socials.facebook, icon: FaFacebookF, label: 'Facebook' },
  ];

  return (
    <Section
      id='contact'
      eyebrow='Contact'
      title="Let's build"
      accent='something together.'
      description='Hiring, collaborating or just want to say hi? My inbox is always open.'
      className='border-t border-line bg-surface/40'
    >
      <div className='grid gap-6 lg:grid-cols-5'>
        <Reveal className='lg:col-span-2'>
          <div className='flex h-full flex-col gap-4'>
            {details.map(({ icon: Icon, label, value, href }) => {
              const Wrapper = href ? 'a' : 'div';
              return (
                <Wrapper
                  key={label}
                  href={href}
                  className='card group flex items-center gap-4 p-5 transition hover:border-zinc-600'
                >
                  <div className='grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-white/3 text-violet-300'>
                    <Icon size={19} />
                  </div>
                  <div className='min-w-0'>
                    <p className='text-xs font-semibold uppercase tracking-wider text-subtle'>{label}</p>
                    <p className='truncate text-white'>{value}</p>
                  </div>
                  {href && <ArrowUpRight size={18} className='ml-auto text-subtle transition group-hover:text-white' />}
                </Wrapper>
              );
            })}

            <div className='card mt-auto p-5'>
              <p className='text-xs font-semibold uppercase tracking-wider text-subtle'>Elsewhere</p>
              <div className='mt-4 flex gap-2'>
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={label}
                    className='grid h-11 w-11 place-items-center rounded-xl border border-line text-zinc-300 transition hover:border-violet-400 hover:bg-violet-400/10 hover:text-white'
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className='lg:col-span-3'>
          <form onSubmit={handleSubmit} className='card space-y-5 p-6 md:p-8'>
            <div className='grid gap-5 sm:grid-cols-2'>
              <label className='block'>
                <span className='mb-2 block text-sm text-zinc-300'>Name</span>
                <input required name='name' value={form.name} onChange={update} placeholder='Your name' className={inputClass} />
              </label>
              <label className='block'>
                <span className='mb-2 block text-sm text-zinc-300'>Email</span>
                <input required type='email' name='email' value={form.email} onChange={update} placeholder='you@company.com' className={inputClass} />
              </label>
            </div>
            <label className='block'>
              <span className='mb-2 block text-sm text-zinc-300'>Subject</span>
              <input name='subject' value={form.subject} onChange={update} placeholder='Job opportunity, project, collaboration…' className={inputClass} />
            </label>
            <label className='block'>
              <span className='mb-2 block text-sm text-zinc-300'>Message</span>
              <textarea required rows={6} name='message' value={form.message} onChange={update} placeholder='Tell me a bit about it…' className={`${inputClass} resize-none`} />
            </label>
            <button
              type='submit'
              className='group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-medium text-ink transition hover:bg-zinc-200 sm:w-auto'
            >
              Send message <Send size={16} className='transition group-hover:translate-x-0.5' />
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
