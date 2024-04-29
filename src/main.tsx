import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/layout/index.tsx';
import MainPage from './pages/mainPage/index.tsx';
import MoviePage from './pages/moviePage/index.tsx';

import './index.css';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/movie/:id',
        element: <MoviePage />,
      }
    ],
  },
], 
  {
    basename: import.meta.env.DEV ? '/' : '/moviesList',
  }
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
