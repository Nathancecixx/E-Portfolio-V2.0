import { useState } from 'react';
import { filters, portfolioProjects } from '../Data/portfolio';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const visible = portfolioProjects.filter(project => filter === 'All' || project.category === filter);
  return (
    <section className="projects-section section-shell" id="projects" aria-labelledby="projects-title">
      <div className="section-heading"><p className="eyebrow">02 / Work &amp; experiments</p><div><h2 id="projects-title">Things I've built.<br /><em>And built on.</em></h2><p>Home projects, coursework and game jams. Some solo, some with teammates. Each one has given me a different problem to work through.</p></div></div>
      <div className="project-toolbar"><div className="project-filters" role="group" aria-label="Filter projects">{filters.map(name => <button key={name} type="button" aria-pressed={filter === name} onClick={() => setFilter(name)}>{name}</button>)}</div><p className="project-count" role="status" aria-live="polite">{visible.length} projects</p></div>
      <div className="project-archive">
        {visible.map(project => <article className={`archive-project ${project.image ? '' : 'system-project'}`} key={project.id} aria-labelledby={`project-${project.id}`}>
          <div className="archive-media">{project.image ? <img src={project.image} alt={`${project.title} project screenshot`} loading="lazy" width="640" height="360" /> : <div className={`project-study study-${project.illustration}`} aria-hidden="true"><span>{project.illustration === 'rack' ? '[ host ]' : project.illustration === 'network' ? '[ VLAN A ]' : '[ person ]'}</span><i /><span>{project.illustration === 'rack' ? '[ vm ]  [ vm ]' : project.illustration === 'network' ? '[ VLAN B ]' : '[ problem ]'}</span><small>{project.illustration === 'rack' ? 'HARDWARE → HYPERVISOR → OS' : project.illustration === 'network' ? 'SIMULATED / PACKET TRACER' : 'LISTEN → INVESTIGATE → HELP'}</small></div>}</div>
          <div className="archive-copy"><p className="eyebrow">{project.context}</p><h3 id={`project-${project.id}`}>{project.title}</h3><p>{project.description}</p><ul className="tech-list" aria-label={`${project.title} technologies`}>{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul><div className="project-links">{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>Source on GitHub <span aria-hidden="true">↗</span></a>}{project.website && <a href={project.website} target="_blank" rel="noopener noreferrer" aria-label={`${project.websiteLabel || 'Visit website'}: ${project.title}`}>{project.websiteLabel || 'Visit website'} <span aria-hidden="true">↗</span></a>}{project.anchor && <a href={project.anchor}>{project.linkLabel} <span aria-hidden="true">↑</span></a>}{!project.github && !project.website && !project.anchor && <span className="archive-note">{project.id === 'boxing' ? 'Game jam experiment · no public demo linked' : 'Field notes · described above'}</span>}</div></div>
        </article>)}
      </div>
      <p className="archive-disclosure">A note on tools: I also work with AI assistants on personal software and infrastructure projects. Where I use assisted code, I don't treat every generated line as my own authorship. The original project images and source links are kept here.</p>
    </section>
  );
}
