import { Fragment, useState } from 'react';
import { lab } from '../../Data/lab';

function Host({ host, selected, onSelect }) {
  const services = host.services || [];
  const active = services.find(service => service.id === selected);
  const more = host.total ? host.total - services.length : 0;

  return (
    <article className={`lab-host${host.wide ? ' wide' : ''}`} aria-labelledby={`lab-${host.id}`}>
      <h3 id={`lab-${host.id}`}>{host.name}</h3>
      <p className="lab-tag">{host.tag}</p>

      {services.length > 0 && (
        <ul className="lab-services">
          {services.map(service => (
            <li key={service.id}>
              <button type="button" aria-pressed={selected === service.id} onClick={() => onSelect(service.id)}>
                {service.name}
              </button>
            </li>
          ))}
          {more > 0 && <li className="lab-more">+ {more} more</li>}
        </ul>
      )}

      <div className="lab-note" aria-live="polite">
        {active && <p className="lab-runs">{active.runs}</p>}
        <p>{active ? active.note : host.note}</p>
      </div>
    </article>
  );
}

export default function LabExplorer() {
  const [selected, setSelected] = useState(null);
  const toggle = id => setSelected(current => (current === id ? null : id));

  return (
    <section className="lab-section section-shell" id="home-lab" aria-labelledby="lab-title">
      <div className="section-head">
        <h2 id="lab-title">Home lab</h2>
        <p>Two Raspberry Pis and a Proxmox workstation, wired into a small rack. I set all of it up and I keep it running.</p>
      </div>

      <section className="lab" aria-label="Home lab diagram">
        <ol className="lab-path">
          {lab.path.map(stop => (
            <Fragment key={stop.id}>
              <li className="lab-stop"><strong>{stop.name}</strong><span>{stop.detail}</span></li>
              {stop.link && <li className="lab-link"><span>{stop.link}</span></li>}
            </Fragment>
          ))}
        </ol>

        <div className="lab-hosts">
          {lab.hosts.map(host => <Host key={host.id} host={host} selected={selected} onSelect={toggle} />)}
        </div>

        <p className="lab-updated">Simplified layout, not live data. Last updated {lab.updated}.</p>
      </section>
    </section>
  );
}
