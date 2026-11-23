import { useTheme } from '../../theme';

const Sun = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8" />
  </svg>
);

const Moon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
  </svg>
);

export default function Navbar() {
  const [theme, toggleTheme] = useTheme();
  const other = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className="site-header section-shell">
      <a className="wordmark" href="#home" aria-label="Nathan Ceci, back to top">Nathan Ceci<span aria-hidden="true">.</span></a>
      <nav aria-label="Main navigation">
        <a href="#home-lab">Home lab</a>
        <a href="#projects">Projects</a>
        <a href="#games">Games</a>
        <a href="#about-me">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${other} theme`} title={`Switch to ${other} theme`}>
        {theme === 'dark' ? <Sun /> : <Moon />}
      </button>
    </header>
  );
}
