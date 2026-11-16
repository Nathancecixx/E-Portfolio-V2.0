import { useState } from 'react';
import { filters, portfolioProjects } from '../Data/portfolio';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const visible = portfolioProjects.filter(project => filter === 'All' || project.category === filter);

  return (
    <section className="projects-section section-shell" id="projects" aria-labelledby="projects-title">
      <div className="section-head">
        <h2 id="projects-title">Projects</h2>
        <p>School work, a hackathon, game jams and things I made for fun.</p>
      </div>

      <div className="project-filters" role="group" aria-label="Filter projects">
        {filters.map(name => <button key={name} type="button" aria-pressed={filter === name} onClick={() => setFilter(name)}>{name}</button>)}
      </div>

      <div className="project-archive">
        {visible.map(project => (
          <article className="archive-project" key={project.id} aria-labelledby={`project-${project.id}`}>
            <div className={`archive-media${project.showWhole ? ' whole' : ''}`}><img src={project.image} alt={`${project.title} screenshot`} loading="lazy" width="640" height="360" /></div>
            <div className="archive-copy">
              <p className="eyebrow">{project.context}</p>
              <h3 id={`project-${project.id}`}>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tech-list" aria-label={`${project.title} technologies`}>{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul>
              <div className="project-links">
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>GitHub <span aria-hidden="true">↗</span></a>}
                {project.website && <a href={project.website} target="_blank" rel="noopener noreferrer" aria-label={`${project.websiteLabel || 'Visit website'}: ${project.title}`}>{project.websiteLabel || 'Visit website'} <span aria-hidden="true">↗</span></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
