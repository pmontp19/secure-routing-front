import React, {Component} from 'react';
import './App.css';
import MapComponent from './Map'
import SafetyScore from "./components/safety-score";
import Client from './services'
import axios from 'axios'
const origin = [41.388829,2.113191]
const destination = [41.441030,2.200062]

class App extends Component {
  constructor() {
    super();
    this.state = { score: [] };
  }
  componentDidMount() {
    axios.get('http://3.248.188.133:3001/api/v1/directions?origin=41.388829,2.113191&destination=41.441030,2.200062')
      .then(res => console.log(res));
  }

  render() {
    return (
      <div className="App">
        <SafetyScore score={1}/>
        <MapComponent origin={origin} destination={destination}/>
      </div>
    )
  }


}

export default App;
