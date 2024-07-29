import InlineWorker from './worker?worker&inline';
import Altcha from './PoWCHA.svelte';

declare global {
  var createPoWCHAWorker: (url?: string) => Worker;
}

globalThis.createPoWCHAWorker = (url?: string) => url ? new Worker(new URL(url)) : new InlineWorker();

export { Altcha };
