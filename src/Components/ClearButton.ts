import van from 'vanjs-core';
import { bounceIcon } from './util';

const { button } = van.tags;
const { path, svg } = van.tags('http://www.w3.org/2000/svg');

export const ClearButton = (listener: (e: MouseEvent) => void) =>
  button(
    {
      class:
        'grid size-8 items-center justify-center rounded-full bg-stone-200 hover:bg-stone-300 dark:bg-stone-700 dark:hover:bg-stone-800',
      onclick: (e: MouseEvent) => {
        listener(e);
        bounceIcon(e.currentTarget as HTMLButtonElement);
      },
      'aria-label': 'エディタクリアボタン',
      title: 'エディタをクリア',
    },
    svg(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 -960 960 960',
        class: 'size-5 fill-stone-500 dark:fill-stone-300',
      },
      path({
        d: 'M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z',
      })
    )
  );
