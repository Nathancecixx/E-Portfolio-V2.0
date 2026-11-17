import { useRef, useState } from 'react';
import { games } from '../Data/games';

function Game({ game }) {
  const [playing, setPlaying] = useState(false);
  const stage = useRef(null);
  const canFullscreen = typeof document !== 'undefined' && document.fullscreenEnabled;

  return (
    <article className="game" aria-labelledby={`game-${game.id}`}>
      <div className="game-play">
        <div className="game-stage" ref={stage}>
          {playing ? (
            // The game is only fetched once the visitor presses play.
            <iframe src={game.src} title={game.title} allow="fullscreen; autoplay; gamepad" onLoad={event => event.target.focus()} />
          ) : (
            <button type="button" className="game-start" onClick={() => setPlaying(true)} aria-label={`Play ${game.title}`}>
              <img src={game.poster} alt="" width="1536" height="864" loading="lazy" />
              <span className="game-start-label"><span aria-hidden="true">▶</span> Play</span>
            </button>
          )}
        </div>
        {playing && (
          <div className="game-bar">
            <button type="button" onClick={() => setPlaying(false)}>Stop</button>
            {canFullscreen && <button type="button" onClick={() => stage.current?.requestFullscreen?.()}>Full screen</button>}
            <p>Click the game if the keys stop responding.</p>
          </div>
        )}
      </div>

      <div className="game-copy">
        <p className="eyebrow">{game.context}</p>
        <h3 id={`game-${game.id}`}>{game.title}</h3>
        <p>{game.description}</p>
        <ul className="game-controls" aria-label={`${game.title} controls`}>
          {game.controls.map(control => (
            <li key={control.action}>
              <span className="game-keys">{control.keys.map(key => <kbd key={key}>{key}</kbd>)}</span>
              <span>{control.action}</span>
            </li>
          ))}
        </ul>
        <p className="game-note">About a {game.download} download. Needs a keyboard.</p>
        <div className="project-links">
          {game.github && <a href={game.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${game.title} source on GitHub`}>Source <span aria-hidden="true">↗</span></a>}
          {game.website && <a href={game.website} target="_blank" rel="noopener noreferrer" aria-label={`${game.websiteLabel}: ${game.title}`}>{game.websiteLabel} <span aria-hidden="true">↗</span></a>}
        </div>
      </div>
    </article>
  );
}

export default function Games() {
  return (
    <section className="games-section section-shell" id="games" aria-labelledby="games-title">
      <div className="section-head">
        <h2 id="games-title">Games</h2>
        <p>Play one here in your browser. Nothing loads until you press play.</p>
      </div>
      {games.map(game => <Game key={game.id} game={game} />)}
    </section>
  );
}
