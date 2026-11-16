export default function Home() {
  return (
    <section className="intro section-shell" id="home" aria-labelledby="intro-title">
      <div className="intro-copy">
        <p className="eyebrow">Nathan Ceci / Guelph, Ontario</p>
        <h1 id="intro-title">IT systems,<br />networking <span className="serif-italic">&amp; software.</span></h1>
        <p className="intro-lead">I like understanding what makes a system work.<br className="desktop-break" /> Then getting my hands on it.</p>
        <p className="intro-context">I'm a fourth-year Bachelor of Computer Science student at Conestoga College, with one semester remaining. I build and learn in my home lab, help family with their tech, and write software. I'm looking for my first IT opportunity.</p>
        <div className="actions"><a className="button primary" href="#home-lab">Explore my home lab <span aria-hidden="true">↗</span></a><a className="text-link" href="#projects">Browse my projects <span aria-hidden="true">↓</span></a></div>
      </div>
      <aside className="intro-note" aria-label="Current focus">
        <span className="note-cross" aria-hidden="true">+</span>
        <p className="eyebrow">On the workbench</p>
        <p className="note-title">Learning by<br /> building the thing.</p>
        <dl><div><dt>At home</dt><dd>Proxmox, networking &amp; Raspberry Pi DNS</dd></div><div><dt>In class</dt><dd>Computer science &amp; network labs</dd></div><div><dt>Up next</dt><dd>A first role in IT, with more to learn</dd></div></dl>
        <span className="note-footer">Personal projects. Practical curiosity.</span>
      </aside>
      <div className="intro-bottom"><span>Selected work &amp; field notes</span><span>01 — Start with the systems <span aria-hidden="true">↓</span></span></div>
    </section>
  );
}
