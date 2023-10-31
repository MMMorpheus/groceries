import { createBrowserRouter } from 'react-router-dom';

import App from 'App';
import { Home, Menu } from 'pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu />,
      },
    ],
  },
]);
