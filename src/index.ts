import van from 'vanjs-core';
import { Header } from './Common/Header';
import { KanjiChecker } from './Components/Checker/KanjiChecker';

import { Footer } from './Common/Footer';
import Instruction from './Components/Checker/Instruction';

import './index.css';

const { main } = van.tags;
const fluctTokens = new Set<string>([]);
const appTitle = import.meta.env.VITE_TITLE;

van.add(
  document.body,
  Header(appTitle),
  main(
    { class: 'pt-0 sm:pt-5 dark:bg-stone-900' },
    KanjiChecker(fluctTokens),
    Instruction()
  ),
  Footer(appTitle)
);
