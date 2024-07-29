import './powcha.css';
import './worker?worker';
import Altcha from './PoWCHA.svelte';

declare global {
  var createPoWCHAWorker: (url?: string) => Worker;
}

globalThis.createPoWCHAWorker = (url?: string) => new Worker(new URL(url || './worker.js', import.meta.url));

export { Altcha };
