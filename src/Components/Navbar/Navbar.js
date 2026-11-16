export default function Navbar() {
  return (
    <header className="site-header section-shell">
      <a className="wordmark" href="#home" aria-label="Nathan Ceci, back to top">Nathan Ceci<span aria-hidden="true">.</span></a>
      <nav aria-label="Main navigation">
        <a href="#home-lab">Home lab</a>
        <a href="#projects">Projects</a>
        <a href="#about-me">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
