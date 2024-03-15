import './App.css';
import React, { Component } from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';


class App extends Component {
  constructor(){
    super();
  }
  state = { progress: 30 }

  setProgress = (progress) =>{
    this.setState({progress: progress})
  }

  router = createBrowserRouter([
    {
      path: "/",
      element: <News setProgress={this.setProgress} country="us" />,
    },
    {
      path: "/business",
      element: <News setProgress={this.setProgress} category="business" country="us" />,
    },
    {
      path: "/health",
      element: <News setProgress={this.setProgress} category="health" country="us" />,
    },
    {
      path: "/science",
      element: <News setProgress={this.setProgress} category="science" country="us" />,
    },
    {
      path: "/sports",
      element: <News setProgress={this.setProgress} category="sports" country="us" />,
    },
    {
      path: "/technology",
      element: <News setProgress={this.setProgress} category="technology" country="us" />,
    },
    {
      path: "/entertainment",
      element: <News setProgress={this.setProgress} category="entertainment" country="us" />,
    } 
  ]);

  render() {
    return (
      <div>
        <NavBar />
        <LoadingBar 
          height= {3} 
          color='#f11946'
          progress={this.state.progress} />

        <RouterProvider router={this.router}></RouterProvider>
      </div>
    );
  }
}

export default App;