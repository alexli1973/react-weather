import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import WeatherDisplay from './weather-page/WeatherDisplay'
import Dropdown from "./dropdown-page/Dropdown";
import Header from "./Header";
import RegistrtionForm from "./RegistrtionForm";
import Weather from "./weather-page/weather";
import Users from "./users-page/Users";
import User from "./users-page/User";
import UserDetail from "./users-page/UserDetail";

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
        <Switch>
      <div className="App">
          <Header/>
          <Route path="/"
                 render={() => <h2>Wellcome to My App</h2>}
                 exact={true}
          />
          <Route path="/weather" component={Weather}/>
          <Route path="/dropdown" component={Dropdown}/>
          <Route path="/users" component={Users} exact/>
          <Route exact path="/users/:id" component={UserDetail}/>

            {/*<Header items = {menu}/>*/}
            {/*<RegistrtionForm/>*/}




      </div>
        </Switch>
    </Router>
    );
  }
}

export default App;
