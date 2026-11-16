import { useEffect, useState } from 'react';

// The visitor's choice is saved under this key. public/index.html reads the same key
// before the page paints, so keep the two in step.
const KEY = 'theme';
const COLOURS = { light: '#f6f3eb', dark: '#171916' };

const deviceQuery = () => (window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null);
const deviceTheme = () => (deviceQuery()?.matches ? 'dark' : 'light');

function savedChoice() {
  try {
    const value = localStorage.getItem(KEY);
    return value === 'dark' || value === 'light' ? value : null;
  } catch {
    return null;
  }
}

function saveChoice(choice) {
  try {
    if (choice) localStorage.setItem(KEY, choice);
    else localStorage.removeItem(KEY);
  } catch {
    // Storage can be blocked (private browsing). The choice still applies for this visit.
  }
}

// Follows the device setting unless the visitor has picked a theme.
export function useTheme() {
  const [choice, setChoice] = useState(savedChoice);
  const [device, setDevice] = useState(deviceTheme);
  const theme = choice || device;

  useEffect(() => {
    const query = deviceQuery();
    if (!query) return undefined;
    const onChange = event => setDevice(event.matches ? 'dark' : 'light');
    if (query.addEventListener) query.addEventListener('change', onChange);
    else query.addListener(onChange);
    return () => {
      if (query.removeEventListener) query.removeEventListener('change', onChange);
      else query.removeListener(onChange);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', COLOURS[theme]);
  }, [theme]);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    // Choosing what the device already uses means "follow the device" again.
    const nextChoice = next === device ? null : next;
    setChoice(nextChoice);
    saveChoice(nextChoice);
  };

  return [theme, toggle];
}
