import React, { Component } from 'react';
import './App.css';
import WeatherDisplay from './WeatherDisplay'
import Dropdown from "./Dropdown";
import Header from "./Header";
import RegistrtionForm from "./RegistrtionForm";

const PLACES = [
    { name: "Palo Alto", zip: "94303" },
    { name: "San Jose", zip: "94088" },
    { name: "Santa Cruz", zip: "95062" },
    { name: "Honolulu", zip: "96803" }
];

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

  constructor() {
    super();
    this.state = {
      activePlace: 0
    }
  }

  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        <Header items = {menu}/>
        <RegistrtionForm/>


          {PLACES.map((place, index) =>
             (
                <button
                  key={index}
                  onClick={() => {
                    this.setState({activePlace: index});
                    console.log('Clicked index ' + index);
                  }}
                >{place.name}
                </button>
            )
          )}
          <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip}/>
      </div>
    );
  }
}

export default App;
