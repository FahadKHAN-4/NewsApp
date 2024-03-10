// import './App.css';
// import React, { Component } from 'react';
// import NavBar from './components/NavBar';
// import News from './components/News';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <NavBar />
//         <News category="general" country="us"/>
//       </div>
          
//     );
//   }
// }
// export default App;

import './App.css';
import React, { Component } from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import NavBar from './components/NavBar';
import News from './components/News';

// Create the router using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <News country="us" />,
  },
  {
    path: "/business",
    element: <News category="business" country="us" />,
  },
  {
    path: "/health",
    element: <News category="health" country="us" />,
  },
  {
    path: "/science",
    element: <News category="science" country="us" />,
  },
  {
    path: "/sports",
    element: <News category="sports" country="us" />,
  },
  {
    path: "/technology",
    element: <News category="technology" country="us" />,
  },
]);

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <RouterProvider router={router}></RouterProvider>
      </div>
    );
  }
}

export default App;