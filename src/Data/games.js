import wizard from '../Resources/Images/LittleWizard_Poster.png';

// Games that can be played on the site.
// To add one: export it from Godot for the Web with thread support OFF, put the exported files in
// public/games/<id>/ (the page must be called index.html), then add an entry here.
// `keys` are shown as keyboard keys next to what they do.
export const games = [
  {
    id: 'little-wizard',
    title: 'Little Wizard',
    context: 'VARLab game jam, fall 2024',
    description: 'A 2D platformer I made with six classmates in four days. I was the only one who had used Godot before, so I got the team up to speed on it.',
    src: '/games/little-wizard/index.html',
    poster: wizard,
    download: '30 MB',
    controls: [
      { keys: ['A', 'D'], action: 'Move' },
      { keys: ['Space'], action: 'Jump' },
      { keys: ['Shift'], action: 'Fireball' },
      { keys: ['F'], action: 'Interact' },
    ],
    github: 'https://github.com/Nathancecixx/LittleWizard',
    website: 'https://nathanceci.itch.io/little-wizard',
    websiteLabel: 'itch.io page',
  },
];
