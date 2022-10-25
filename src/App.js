import { RouterProvider } from 'react-router-dom';
import './App.css';

import { routes } from './routes/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider route={routes}></RouterProvider>
    </div>
  );
}

export default App;
