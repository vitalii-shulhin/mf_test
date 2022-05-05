import React from "react";

import { Host } from "./components/Host";
import app1Routes from 'app1/routes';

const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));

console.log('app1Routes', app1Routes);
const routes = [
  {
    path: '/',
    element: <Host />,
  },
  ...app1Routes,
  {
    path: '/app2',
    element: <CounterAppTwo />,
  },
  {
    path: '*',
    element: <h1 style={{ padding: '1rem', margin: 0 }}>Not found</h1>,
  },
];

export default routes;
