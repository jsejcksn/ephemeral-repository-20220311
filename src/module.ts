import {assert} from './utils.js';
import {addStyles, type StyleRule} from './css-utils.js';

function initializeStyles (): void {
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
}

function init (root: HTMLElement): void {
  initializeStyles();

  const h1 = document.createElement('h1');

  const updateTitle = (text: string) => void (h1.textContent = `Hello ${text}`);
  const initialName = 'World';
  updateTitle(initialName);

  const titleInput = document.createElement('input');
  titleInput.setAttribute('class', 'title-input');
  titleInput.value = initialName;

  titleInput.addEventListener(
    'input',
    ev => updateTitle((ev.target as HTMLInputElement).value),
  );

  root.appendChild(h1);
  root.appendChild(titleInput);
}

async function main () {
  const root = document.getElementById('root');
  assert(root, 'Root element not found');

  init(root);
}

main();
