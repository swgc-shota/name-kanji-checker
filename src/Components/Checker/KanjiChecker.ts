import van from 'vanjs-core';
import { EditorState, Compartment } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { isDark, observeThemeMode } from './themes';
import { kanjiSupport } from './kanjiSupport';
import { kanjiLightTheme, kanjiDarkTheme } from './kanjiTheme';
import { mySetup } from './setup';
import { joyoOld } from './kanji/joyo';
import { ClearButton } from '../ClearButton';
export { EditorView } from '@codemirror/view';

const { div } = van.tags;

const KanjiChecker = (fluctTokens: Set<string>) => {
  const themeComp = new Compartment();
  const langComp = new Compartment();

  const state = EditorState.create({
    doc: joyoOld,
    extensions: [
      mySetup,
      themeComp.of(isDark() ? kanjiDarkTheme : kanjiLightTheme),
      langComp.of(kanjiSupport(fluctTokens)),
      EditorView.contentAttributes.of({
        'aria-label': '名前に使える漢字・使えない漢字のチェックツール',
      }),
    ],
  });

  const container = div({
    class:
      'bg-stone-50 overflow-y-auto dark:bg-zinc-800 dark:text-stone-300 p-[1px] rounded',
  });

  const view = new EditorView({
    state,
    parent: container,
  });

  observeThemeMode(view, themeComp, kanjiLightTheme, kanjiDarkTheme);

  //To buy time for option data to be loaded
  setTimeout(() => {
    view.dispatch({
      changes: {
        from: 0,
        to: view.state.doc.length,
        insert: view.state.doc.toString(),
      },
    });

    view.focus();
  });

  return div(
    {
      class:
        'w-[90%] max-w-[60rem] mx-4 sm:mx-auto pt-4 sm:pt-10 relative rounded',
      ontabfocus: (e) => {
        const { newTabId } = e.detail;
        if (newTabId !== 0) return;

        view.dispatch({
          effects: langComp.reconfigure(kanjiSupport(fluctTokens)),
        });

        view.dispatch({
          changes: {
            from: 0,
            to: view.state.doc.length,
            insert: view.state.doc.toString(),
          },
        });
      },
    },
    div(
      {
        class:
          'sticky top-0 size-8 z-50 ml-auto pr-4 sm:pr-12 mb-[-32px] sm:mb-[-52px]',
      },
      ClearButton(() => {
        view.dispatch({
          changes: { from: 0, to: view.state.doc.length, insert: '' },
        });
      })
    ),
    container
  );
};

export { KanjiChecker };
