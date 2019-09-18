import React, { Component } from 'react';
import Search from './components/Search';
import Weather from './components/Weather';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    flag: 0,
    weatherData: {}
  }

  serachWeather = (query) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=1177c4d6b79fc812f33857dfde2d9650`)
    .then(res => this.setState({ weatherData: res.data }));
  }

  componentDidMount() {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=aurangabad&appid=1177c4d6b79fc812f33857dfde2d9650')
    .then(res => this.setState({ weatherData: res.data}))
    .then(() => this.setState({ flag: 1 }))
    .catch(error => console.error(error));
  }

  renderWeather = () => {
    if (this.state.flag == 1)
      return <Weather weatherData={this.state.weatherData} />;
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Search serachWeather={this.serachWeather} />
          {this.renderWeather()}
        </div>
      </div>
    );
  }
}

export default App;
