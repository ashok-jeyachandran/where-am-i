import { StrictMode } from 'react';
import { BrowserRouter, createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import './i18n';
import './styles.scss';
import App from './app/app';

import { dashboardRoutes } from '@org/feature-dashboard';
import { cricketRoutes } from '@org/feature-cricket';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Navigate to='/dashboard' replace/>},
      ...dashboardRoutes,
      ...cricketRoutes
    ]
  }
]); 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
