import { render, screen } from '@testing-library/react';
import Home from './Pages/Home';
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import LabExplorer from './Components/LabExplorer/LabExplorer';
import Projects from './Pages/Projects';
import App from './App';

test('provides keyboard navigation, working contact links and honest experience context', () => {
  render(<App />);
  const skip = screen.getByRole('link', { name: 'Skip to content' });
  act(() => userEvent.tab());
  expect(skip).toHaveFocus();
  expect(skip).toHaveAttribute('href', '#main-content');
  expect(document.getElementById('main-content')).toHaveAttribute('tabindex', '-1');
  const nav = screen.getByRole('navigation', { name: 'Main navigation' });
  ['Home lab', 'Projects', 'About', 'Contact'].forEach(name => {
    const link = Array.from(nav.querySelectorAll('a')).find(a => a.textContent === name);
    expect(link).toBeTruthy();
    expect(document.querySelector(link.getAttribute('href'))).toBeInTheDocument();
  });
  expect(screen.getByRole('link', { name: 'Nceci6042@conestogac.on.ca' })).toHaveAttribute('href', 'mailto:Nceci6042@conestogac.on.ca');
  expect(screen.getByRole('link', { name: '519 993 5617' })).toHaveAttribute('href', 'tel:5199935617');
  expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/nathan-ceci/');
  expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  expect(screen.getByText('May 2024 – present')).toBeInTheDocument();
  expect(screen.getByText('September 2021 – August 2023')).toBeInTheDocument();
  expect(screen.getByText(/AI backend infrastructure, security and architecture/i)).toBeInTheDocument();
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  const ids = Array.from(document.querySelectorAll('[id]'), el => el.id);
  expect(new Set(ids).size).toBe(ids.length);
});

test('filters the full project archive and restores all original projects', () => {
  render(<Projects />);
  const pick = name => act(() => userEvent.click(screen.getByRole('button', { name, exact: true })));
  expect(screen.getByRole('button', { name: 'All', exact: true })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getAllByRole('article')).toHaveLength(12);
  pick('Systems & networking');
  expect(screen.getAllByRole('article')).toHaveLength(3);
  expect(screen.getByRole('heading', { name: 'Home lab' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Drive Aware' })).not.toBeInTheDocument();
  pick('Software');
  expect(screen.getAllByRole('article')).toHaveLength(6);
  expect(screen.getByRole('heading', { name: 'Drive Aware' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Drive Aware on GitHub/i })).toHaveAttribute('href', 'https://github.com/Nathancecixx/Group5F24Backend');
  pick('Games & experiments');
  expect(screen.getAllByRole('article')).toHaveLength(3);
  expect(screen.getByRole('heading', { name: 'Little Wizard' })).toBeInTheDocument();
  expect(screen.getByText(/four-day/i)).toBeInTheDocument();
  pick('All');
  expect(screen.getAllByRole('article')).toHaveLength(12);
  ['Drive Aware', 'Open Mind', 'Secure Kicks', 'Encrypterizer', 'UFC Stats Hub', 'Elo Engineer', 'BitNByte', 'Little Wizard', 'PingPong Boxing (VR Game)'].forEach(name => expect(screen.getByRole('heading', { name, exact: true })).toBeInTheDocument());
  expect(screen.getByRole('status')).toHaveTextContent('12 projects');
});

test('lets visitors inspect every lab node without exposing live infrastructure', () => {
  render(<LabExplorer />);
  expect(screen.getByText(/simplified diagram, not live monitoring/i)).toBeInTheDocument();
  const choices = [
    ['Home network', /personally built my network rack/i],
    ['Proxmox host', /personally built the machine/i],
    ['Virtual machines', /Windows and Linux/i],
    ['Raspberry Pi DNS', /DNS resolution/i],
    ['Encrypted VPN', /encrypted remote access/i],
    ['Development environment', /separate environment/i],
  ];
  choices.forEach(([name, explanation]) => {
    const node = screen.getByRole('button', { name: new RegExp(name, 'i') });
    act(() => userEvent.click(node));
    expect(node).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('region', { name: /lab field note/i })).toHaveTextContent(explanation);
    expect(screen.getAllByRole('button').filter(button => button.getAttribute('aria-pressed') === 'true')).toHaveLength(1);
  });
  expect(document.body.textContent).not.toMatch(/192\.168\.|10\.\d+\.\d+\.|uptime|https?:\/\/[^\s]+:8006/i);
});

test('introduces Nathan as an IT-focused student seeking a first opportunity', () => {
  render(<Home />);
  expect(screen.getByRole('heading', { level: 1, name: /IT systems, networking & software/i })).toBeInTheDocument();
  expect(screen.getByText(/fourth-year Bachelor of Computer Science student/i)).toBeInTheDocument();
  expect(screen.getByText(/one semester remaining/i)).toBeInTheDocument();
  expect(screen.getByText(/first IT opportunity/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /explore my home lab/i })).toHaveAttribute('href', '#home-lab');
  expect(screen.getByLabelText('Current focus')).toHaveTextContent('Learning by building the thing.');
});
