import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "../header";
import RandomPlanet from "../random-planet";
import LoginPage from "../pages/login-page";
import SecretPage from "../pages/secret-page";
import People from "../pages/people";
import Planets from "../pages/planets";
import Starships from "../pages/starships";


import './app.css'
import SwapiService from "../../services/swapi-service";

export default class App extends Component {

  constructor(){
    super();

    this.swapiService = new SwapiService();

    this.state = {
      selectedPerson: null,
      selectedPlanet: null,
      selectedStarship: null,
      isLoggedIn: false
    };

    this.onLogin = () => {
      this.setState({isLoggedIn: true});
    };

    this.onPersonSelected = (id) => {
      this.setState({selectedPerson: id});
    };
    this.onPlanetSelected = (id) => {
      this.setState({selectedPlanet: id});
    };
    this.onStarshipSelected = (id) => {
      this.setState({selectedStarship: id});
    };
  }

  render(){
    const {isLoggedIn} = this.state;
    return (
      <Router>
        <div className='stardb-app'>
          <Header />
          <RandomPlanet />
          <Switch>
            <Route
              path='/'
              render={()=><h2>Welcome to StarDB</h2>}
              exact
            />
            <Route
              path='/people'
              render={()=>{ return ( <People
                onItemSelected={ this.onPersonSelected }
                getData={ this.swapiService.getAllPeople }
                personId = { this.state.selectedPerson } />
              )
              }}
              exact
            />
            <Route
              path='/planets'
              render={()=> { return ( <Planets
                onItemSelected={ this.onPlanetSelected }
                getData={ this.swapiService.getAllPlanets }
                planetId = { this.state.selectedPlanet } />
              )
              }}
              exact />
            <Route
              path='/starships'
              render={()=> { return ( <Starships
                onItemSelected={ this.onStarshipSelected }
                getData={ this.swapiService.getAllStarships }
                starshipId = { this.state.selectedStarship } />
              )
              }}
              exact />

            <Route
              path='/login'
              render={() => { return <LoginPage isLoggedIn={isLoggedIn}
                                                onLogin={this.onLogin} />}}
            />
            <Route
              path='/secret'
              render={()=>{ return <SecretPage isLoggedIn={isLoggedIn} />}}
            />

            <Route render={()=><h2>Page not found(((</h2>}/>
          </Switch>
        </div>
      </Router>
    );
  };
};