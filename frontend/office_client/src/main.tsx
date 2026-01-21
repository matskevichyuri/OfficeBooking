import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// PrimeReact темы
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // можно выбрать любую тему
import 'primereact/resources/primereact.min.css'; // базовые стили компонентов
import 'primeicons/primeicons.css'; // иконки
import 'primeflex/primeflex.css'; // flex utilities

import './index.css'; // если есть свои стили

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
