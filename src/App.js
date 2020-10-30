import React , {Component} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Chart from './Components/Chart';
import Dashboard from './Components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Dashboard />
          <Chart />
      </div>
    )
  }
}

export default App;
