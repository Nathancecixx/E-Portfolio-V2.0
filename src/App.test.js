import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import App from './App';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import LabExplorer from './Components/LabExplorer/LabExplorer';
import { lab } from './Data/lab';

const click = element => act(() => userEvent.click(element));

test('introduces Nathan as a student looking for a first IT job', () => {
  render(<Home />);
  expect(screen.getByRole('heading', { level: 1, name: /IT systems, networking & software/i })).toBeInTheDocument();
  expect(screen.getByText(/fourth-year Computer Science student/i)).toBeInTheDocument();
  expect(screen.getByText(/first job in IT/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /home lab/i })).toHaveAttribute('href', '#home-lab');
  expect(screen.getByRole('img', { name: /rack/i })).toBeInTheDocument();
});

test('shows the real lab layout from the internet down to the virtual machines', () => {
  render(<LabExplorer />);
  const diagram = screen.getByRole('region', { name: /home lab diagram/i });
  ['Fibre', 'Router', '10Gb uplink', 'Lab switches', 'LilRed', 'Always-on Pi', 'Proxmox workstation'].forEach(text =>
    expect(within(diagram).getByText(text)).toBeInTheDocument());
  ['WireGuard', 'Pi-hole', 'Jellyfin', 'AI server', 'Immich', 'Forge', 'Gaming'].forEach(name =>
    expect(within(diagram).getByRole('button', { name })).toBeInTheDocument());
  expect(within(diagram).getByText('+ 10 more')).toBeInTheDocument();
  expect(diagram.textContent).not.toMatch(/pearl|school|192\.168\.|uptime/i);
});

test('explains a service when it is selected and returns to the host note when deselected', () => {
  render(<LabExplorer />);
  const ai = screen.getByRole('button', { name: 'AI server' });
  click(ai);
  expect(ai).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByText(/llama\.cpp runs AI models locally/)).toBeInTheDocument();
  click(screen.getByRole('button', { name: 'WireGuard' }));
  expect(ai).toHaveAttribute('aria-pressed', 'false');
  expect(screen.queryByText(/llama\.cpp runs AI models locally/)).not.toBeInTheDocument();
  expect(screen.getByText(/away from home/i)).toBeInTheDocument();
  click(screen.getByRole('button', { name: 'WireGuard' }));
  expect(screen.getAllByRole('button').filter(b => b.getAttribute('aria-pressed') === 'true')).toHaveLength(0);
});

test('keeps the lab data consistent so it stays easy to edit', () => {
  const ids = [...lab.path.map(n => n.id), ...lab.hosts.flatMap(h => [h.id, ...(h.services || []).map(s => s.id)])];
  expect(new Set(ids).size).toBe(ids.length);
  lab.hosts.forEach(host => {
    expect(host.name && host.tag && host.note).toBeTruthy();
    (host.services || []).forEach(service => expect(service.name && service.note).toBeTruthy());
    if (host.total) expect(host.total).toBeGreaterThanOrEqual(host.services.length);
  });
});

test('lists Forge with the nine original projects and filters them', () => {
  render(<Projects />);
  const pick = name => click(screen.getByRole('button', { name, exact: true }));
  expect(screen.getAllByRole('article')).toHaveLength(10);
  expect(screen.getAllByRole('heading', { level: 3 })[0]).toHaveTextContent('Forge');
  pick('Software');
  expect(screen.getAllByRole('article')).toHaveLength(7);
  expect(screen.getByRole('heading', { name: 'Forge' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Drive Aware on GitHub/i })).toHaveAttribute('href', 'https://github.com/Nathancecixx/Group5F24Backend');
  pick('Games');
  expect(screen.getAllByRole('article')).toHaveLength(3);
  expect(screen.getByRole('heading', { name: 'Little Wizard' })).toBeInTheDocument();
  pick('All');
  ['Forge', 'Drive Aware', 'Open Mind', 'Secure Kicks', 'Encrypterizer', 'UFC Stats Hub', 'Elo Engineer', 'BitNByte', 'Little Wizard', 'PingPong Boxing (VR Game)'].forEach(name =>
    expect(screen.getByRole('heading', { name, exact: true })).toBeInTheDocument());
});

test('whole page: navigation, contact links and plain wording', () => {
  render(<App />);
  const nav = screen.getByRole('navigation', { name: 'Main navigation' });
  within(nav).getAllByRole('link').forEach(link =>
    expect(document.querySelector(link.getAttribute('href'))).toBeInTheDocument());
  expect(screen.getByRole('link', { name: 'Nceci6042@conestogac.on.ca' })).toHaveAttribute('href', 'mailto:Nceci6042@conestogac.on.ca');
  expect(document.querySelector('a[href^="tel:"]')).not.toBeInTheDocument();
  expect(document.body.textContent).not.toMatch(/993/);
  expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/nathan-ceci/');
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  expect(document.body.textContent).not.toMatch(/mindful of the person|practical curiosity|field note|a lot to learn from/i);
  expect(document.body.textContent).not.toMatch(/help from LilRed|helped build|built this site|keep it running/i);
  expect(screen.getByText(/personal assistant\. I message it/i)).toBeInTheDocument();
  const ids = Array.from(document.querySelectorAll('[id]'), el => el.id);
  expect(new Set(ids).size).toBe(ids.length);
});
