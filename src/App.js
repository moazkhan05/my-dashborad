import React , {Component} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Chart from './Components/Chart';
import Greet from './Components/Greet';
import Bootstrap from './Components/Bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Chart />
          <Bootstrap />
      </div>
    )
  }
}

export default App;
