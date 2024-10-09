import { EditorView } from '@codemirror/view';
import { Compartment, Extension } from '@codemirror/state';

const themeSpec = {
  '&': {},
  '&.cm-editor': {
    width: '100%',
    padding: '16px',
    maxHeight: '70vh',
    scrollbarColor: '#52525b #27272a',
    scrollbarWidth: 'auto',
  },
  '&.cm-editor.cm-focused': {
    backgroundColor: 'rgb(245 245 244)',
    outline: 'dashed',
  },
  '.cm-scroller': {
    fontFamily:
      '"HiraMinProN-W3", "Hiragino Mincho ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif',
    fontSize: '32px',
  },
  '@media (min-width: 640px)': {
    '.cm-scroller': {
      fontSize: '64px',
    },
  },
  '.cm-line': {
    textWrap: 'wrap',
    textAlign: 'center',
  },
};

export const myLightTheme = EditorView.theme({ ...themeSpec }, { dark: false });
export const myDarkTheme = EditorView.theme(
  {
    ...themeSpec,
    '&.cm-editor.cm-focused': {
      backgroundColor: '#292524',
      outline: 'dashed',
    },
    '&.cm-focused .cm-cursor': {
      borderLeftColor: 'white',
    },
  },
  { dark: true }
);

export const isDark = () => document.documentElement.classList.contains('dark');

export const observeThemeMode = (
  view: EditorView,
  themeComp: Compartment,
  lightTheme: Extension,
  darkTheme: Extension
) => {
  const observer = new MutationObserver(() => {
    view.dispatch({
      effects: themeComp.reconfigure(isDark() ? darkTheme : lightTheme),
    });
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });
};
