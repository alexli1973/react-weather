import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import WeatherDisplay from './weather-page/WeatherDisplay'
import Dropdown from "./Dropdown";
import Header from "./Header";
import RegistrtionForm from "./RegistrtionForm";
import Weather from "./weather-page/weather";

// const PLACES = [
//     { name: "Palo Alto", zip: "94303" },
//     { name: "San Jose", zip: "94088" },
//     { name: "Santa Cruz", zip: "95062" },
//     { name: "Honolulu", zip: "96803" }
// ];

const menu = [
    {
      link: '/articles',
      label: 'Articles',
    },
    {
        link: '/contacts',
        label: 'Contacts',
    },
    {
        link: '/posts',
        label: 'Posts',
    }
];

class App extends Component {

  render() {
    return (

    <Router>
      <div className="App">
          <Header/>
          <Route path="/"
                 render={() => <h2>Wellcome to My App</h2>}
                 exact={true}
          />
          <Route path="/weather" component={Weather}/>

            {/*<Header items = {menu}/>*/}
            {/*<RegistrtionForm/>*/}




      </div>
    </Router>
    );
  }
}

export default App;
