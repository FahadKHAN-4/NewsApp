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
      element: <div>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <News setProgress={setProgress} category="business" country="us" />
      </div>,
    },
    {
      path: "/health",
      element: <div>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <News setProgress={setProgress} category="health" country="us" />
      </div>,
    },
    {
      path: "/science",
      element: <div>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        /><News setProgress={setProgress} category="science" country="us" />
      </div>,
    },
    {
      path: "/sports",
      element: <div>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <News setProgress={setProgress} category="sports" country="us" />
      </div>,
    },
    {
      path: "/technology",
      element: <div>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <News setProgress={setProgress} category="technology" country="us" />
      </div>,
    },
    {
      path: "/entertainment",
      element: <div>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <News setProgress={setProgress} category="entertainment" country="us" />
      </div>,
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;