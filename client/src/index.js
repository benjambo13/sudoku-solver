import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Components/header'
import Solver from './Components/Solver/index'
import About from './Components/About/about';
import 'bootstrap/dist/css/bootstrap.css'

class App extends React.Component
{
  render() {
    return (
      <React.Fragment>
        <Header />
        <BrowserRouter>
          <Route exact strict path='/' component={Solver}/>
          <Route exact strict path='/about' component={About}/>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));