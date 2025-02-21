import van from 'vanjs-core';
import ThemeToggle from './ThemeToggler';

const { header, h1, div, a } = van.tags;
const { path, svg, circle } = van.tags('http://www.w3.org/2000/svg');

const Header = (appTitle?: string) => {
  return header(
    {
      class: 'w-full',
    },
    div(
      {
        class:
          'bg-white border-b border-stone-300 dark:bg-stone-900 shadow-stone-0 dark:shadow-stone-800 dark:border-stone-700 w-full sm:py-2',
      },
      div(
        { class: 'container flex justify-between mx-auto' },
        div(
          { class: 'flex items-center' },
          ToachLogo,
          h1(
            {
              class:
                'flex items-center ml-1 text-sm sm:text-xl dark:text-stone-300',
            },
            appTitle
          )
        ),
        div(
          { class: 'flex items-center justify-between pr-1 sm:pr-0' },
          ThemeToggle,
          ToGitHub,
          ShareX
        )
      )
    )
  );
};

export { Header };

const ToachLogo = () =>
  div(
    { class: 'pl-4 sm:pl-0' },
    a(
      {
        href: '/',
        class:
          'flex items-center justify-center size-6 sm:size-12 rounded-full fill-stone-700 stroke-stone-700 dark:fill-stone-300 dark:stroke-stone-300 hover:fill-stone-950 hover:bg-stone-50 dark:hover:bg-stone-800 dark:hover:fill-yellow-500 dark:hover:stroke-yellow-500',
        'aria-label': 'トップページへのリンク',
      },
      svg(
        {
          xmlns: 'http://www.w3.org/2000/svg',
          class: 'size-5',
          width: '42',
          height: '34',
          viewBox: '0 0 42 34',
          role: 'img',
          'aria-labelledby': 'svg-title svg-desc',
        },
        circle({ cx: '4', cy: '4', r: '4', fill: '' }),
        circle({ cx: '38', cy: '4', r: '4', fill: '' }),
        path({
          d: 'M8 33C8 33 20 -30 34 33',
          stroke: '',
          fill: 'none',
          'stroke-width': '5',
        })
      )
    )
  );

const ToGitHub = () =>
  div(
    { class: 'hidden sm:block sm:ml-4' },
    a(
      {
        target: '_blank',
        href: 'https://github.com/swgc-shota',
        rel: 'noreferrer noopener',
        'aria-label': 'Open on GitHub',
        class:
          'flex items-center justify-center size-12 rounded-full fill-stone-700 hover:bg-stone-50 dark:fill-stone-300 dark:hover:bg-stone-800 dark:hover:fill-yellow-500',
      },
      svg(
        {
          width: '98',
          height: '96',
          viewBox: '0 0 98 96',
          xmlns: 'http://www.w3.org/2000/svg',
          class: 'size-6',
        },
        path({
          'fill-rule': 'evenodd',
          'clip-rule': 'evenodd',
          d: 'M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z',
        })
      )
    )
  );

const ShareX = () =>
  div(
    { class: 'hidden sm:block sm:ml-4' },
    a(
      {
        href: 'https://twitter.com/SWGC_shota',
        target: '_blank',
        rel: 'noopener noreferrer',
        class:
          'flex items-center justify-center size-12 rounded-full hover:bg-stone-50 dark:hover:bg-stone-800 fill-stone-700 dark:fill-stone-300 dark:hover:fill-yellow-500',
        'aria-label': 'Open on X',
      },
      svg(
        {
          width: '1200',
          height: '1227',
          viewBox: '0 0 1200 1227',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          class: 'size-5 fill-inherit',
        },
        path({
          d: 'M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z',
        })
      )
    )
  );
