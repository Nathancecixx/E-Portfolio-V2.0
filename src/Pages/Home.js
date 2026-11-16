import rack from '../Resources/Images/rack.jpg';

export default function Home() {
  return (
    <section className="intro section-shell" id="home" aria-labelledby="intro-title">
      <div className="intro-copy">
        <p className="eyebrow">Guelph, Ontario</p>
        <h1 id="intro-title">IT systems,<br />networking <span className="serif-italic">&amp; software.</span></h1>
        <p className="intro-lead">I'm a fourth-year Computer Science student at Conestoga College with one semester left. I built and run my own home lab, I'm the IT guy for my family, and I'm looking for my first job in IT.</p>
        <div className="actions">
          <a className="button primary" href="#home-lab">See my home lab <span aria-hidden="true">↓</span></a>
          <a className="text-link" href="#contact">Get in touch <span aria-hidden="true">→</span></a>
        </div>
      </div>
      <figure className="rack-photo">
        <img src={rack} alt="My main home lab rack" width="900" height="1394" />
        <figcaption>My main home lab rack.</figcaption>
      </figure>
    </section>
  );
}
