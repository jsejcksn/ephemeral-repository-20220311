import type {ReactElement, ReactNode} from 'react';

import {addStyles, type StyleRule} from './css-utils.js';

// Loaded from UMD module in HTML
const {Suspense, useEffect, useState} = window.React;

function useInitializeStyles (): void {
  useEffect(() => {
    const styleRules: StyleRule[] = [
      ['.title-input', [
        ['background-color', 'var(--color-bg)'],
        ['border', '1px solid var(--color-fg)'],
        ['border-radius', '0.25rem'],
        ['color', 'var(--color-fg)'],
        ['padding', '0.5rem'],
      ]],
    ];
  
    addStyles(styleRules);
  }, []);
}

function App (): ReactElement {
  useInitializeStyles();

  const [name, setName] = useState('React app');

  return (
    <div>
      <h1>Hello {name}</h1>
      <input
        className="title-input"
        onChange={ev => setName(ev.target.value)}
        value={name}
      />
    </div>
  );
}

window.ReactDOM.render(<App />, document.getElementById('root'));
