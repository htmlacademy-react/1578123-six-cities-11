import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
 
const Settings = {
  CardsCount: 5
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App cardsCount={Settings.CardsCount}/>
  </React.StrictMode>,
);
