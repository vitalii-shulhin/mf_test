import React from 'react';

import { Outlet } from 'react-router-dom';

const DetailView1 = React.lazy(() => import('./components/DetailView1'));
const DetailView2 = React.lazy(() => import('./components/DetailView2'));
const CounterAppOne = React.lazy(() => import('./components/CounterAppOne'));

const routes = [
  {
    path: 'app1',
    element: <>
      <CounterAppOne />
      <Outlet />
    </>,
    children: [
      {
        path: 'detail_view1',
        element: <>
          <DetailView1 />
          <Outlet />
        </>,
      },
      {
        path: 'detail_view2',
        element: <>
          <DetailView2 />
          <Outlet />
        </>,
      },
    ]
  },
];

export default routes;
