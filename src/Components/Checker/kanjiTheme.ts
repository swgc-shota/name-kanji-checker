import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags as t } from '@lezer/highlight';
import { myLightTheme, myDarkTheme } from './themes';

const lightHighlightStyles = HighlightStyle.define([
  { tag: t.keyword, color: '#008000', fontWeight: 'bold' },
  { tag: t.invalid, color: '#ff0000', fontWeight: 'bold' },
]);

const darkHighlightStyles = HighlightStyle.define([
  { tag: t.keyword, color: '#00935f', fontWeight: 'bold' },
  { tag: t.invalid, color: '#cd3939', fontWeight: 'bold' },
]);

const lightHighlight = syntaxHighlighting(lightHighlightStyles);
const darkHighlight = syntaxHighlighting(darkHighlightStyles);

export const kanjiDarkTheme = [myDarkTheme, darkHighlight];
export const kanjiLightTheme = [myLightTheme, lightHighlight];
