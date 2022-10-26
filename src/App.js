import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';

import { routes } from './routes/Routes';

function App() {

  const [dark, setDark] = useState(false);

  return (
    <div>
      <RouterProvider router={routes} setDark={setDark} dark={dark}></RouterProvider>
    </div>
  );
}

export default App;
