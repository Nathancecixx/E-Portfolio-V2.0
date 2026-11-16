import { useState } from 'react';
import { labNodes } from '../../Data/lab';

export default function LabExplorer() {
  const [selected, setSelected] = useState('host');
  const active = labNodes.find(node => node.id === selected);
  return (
    <section className="lab-section section-shell" id="home-lab" aria-labelledby="lab-title">
      <div className="section-heading"><p className="eyebrow">01 / Systems in practice</p><div><h2 id="lab-title">A home lab.<br /><em>A lot to learn from.</em></h2><p>Hardware I've built, services I've set up, and a place to try things. Select a part of the lab to see what I do with it.</p></div></div>
      <div className="explorer">
        <div className="lab-map">
          <div className="map-caption"><span className="eyebrow">Lab topology / select a node</span><span aria-hidden="true">↙</span></div>
          <div className="diagram-nodes" role="group" aria-label="Home lab components">
            {labNodes.map((node, index) => <button type="button" key={node.id} className={`lab-node node-${node.id}`} aria-pressed={selected === node.id} aria-controls="lab-field-note" onClick={() => setSelected(node.id)}><span className="node-index" aria-hidden="true">0{index + 1}</span><span><strong>{node.label}</strong><small>{node.short}</small></span><span className="node-select" aria-hidden="true">↗</span></button>)}
          </div>
          <p className="diagram-disclaimer">Simplified diagram, not live monitoring. Connections show concepts, not the full network layout.</p>
        </div>
        <section className="lab-detail" id="lab-field-note" aria-label="Lab field note" aria-live="polite" aria-atomic="true">
          <p className="eyebrow">Field note / {active.category}</p><h3>{active.title}</h3>
          <dl><div><dt>What I've done</dt><dd>{active.work}</dd></div><div><dt>Why it's here</dt><dd>{active.purpose}</dd></div><div><dt>What I'm learning</dt><dd>{active.lesson}</dd></div></dl>
          <span className="detail-footer">Personal home lab · hands-on experience</span>
        </section>
      </div>
      <div className="lab-footnote"><span className="eyebrow">A different kind of lab</span><p><strong>Cisco Packet Tracer:</strong> I practise VLAN configurations and lab network design in simulation. That's separate from the physical home lab above.</p></div>
    </section>
  );
}
