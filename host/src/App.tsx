import React from 'react';
import './App.css';
import {
  useRoutes
} from "react-router-dom";

import hostRoutes from './routes';

function App() {
  const _routes = useRoutes(hostRoutes);

  return (
    <div className="App">
      <React.Suspense fallback='Loading...'>
        {_routes}
      </React.Suspense>
    </div>
  );
}

export default App;
