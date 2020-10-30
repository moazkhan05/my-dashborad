import React , {Component} from 'react';
import './App.css';
import Greet from './Components/Greet';
import 'bootstrap/dist/css/bootstrap.min.css';


import Bootstrap from './Components/Bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Greet />
          <Bootstrap />
      </div>
    )
  }
}

export default App;
