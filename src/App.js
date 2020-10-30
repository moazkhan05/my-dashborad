import React , {Component} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import WidgetChart from './Components/Widgets/WidgetChart';
import Dashboard from './Components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Dashboard />
          <WidgetChart />
      </div>
    )
  }
}

export default App;
