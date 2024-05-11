import './App.css';
import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [progress, setProgress] = useState(30);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <News setProgress={setProgress} country="us" />
      </div>,
    },
    {
      path: "/business",
      element: <News setProgress={setProgress} category="business" country="us" />,
    },
    {
      path: "/health",
      element: <News setProgress={setProgress} category="health" country="us" />,
    },
    {
      path: "/science",
      element: <News setProgress={setProgress} category="science" country="us" />,
    },
    {
      path: "/sports",
      element: <News setProgress={setProgress} category="sports" country="us" />,
    },
    {
      path: "/technology",
      element: <News setProgress={setProgress} category="technology" country="us" />,
    },
    {
      path: "/entertainment",
      element: <News setProgress={setProgress} category="entertainment" country="us" />,
    }
  ]);

  return (
    <div>
      {/* <NavBar />
            <LoadingBar
                height={3}
                color='#f11946'
                progress={progress}
            /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;