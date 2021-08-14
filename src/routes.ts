import React from 'react';
import Home from './pages/Home';
import MessiNews from './pages/NewsMessi';
import NewsWindows11 from './pages/NewsWindows11';

const routes = [
  { path: '/', exact: true, component: Home },
  { path: '/messi', exact: true, component: MessiNews },
  { path: '/windows-11', exact: true, component: NewsWindows11 },
];

export default routes;