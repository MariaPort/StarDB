import React, { Component } from 'react';
import './planet-details.css';
import SwapiService from '../../services/swapi-service';


export default class PlanetDetails extends Component {
  constructor(){
    super();

    this.swapiService = new SwapiService();

    this.state = {
      planetData: null
    };


    this.updatePlanet = () => {
      const { planetId } = this.props;

      console.log(planetId);

      if(!planetId){return;}

      this.swapiService
        .getPlanet(planetId)
        .then((planetData) => {
          this.setState({
            planetData
          });
        });
    };
  }

  componentDidMount(){
    this.updatePlanet();
  }

  componentDidUpdate(prevProp){
    console.log(this.props.planetId);
    if (this.props.planetId !== prevProp.planetId) {
      this.updatePlanet()
    }
  }



  render(){

    console.log('render', this.props.planetId);

    if(!this.state.planetData) {
      return <span>Select planet from a list</span>
    }

    const {id, name, population, rotationPeriod, diameter} = this.state.planetData;

    return (
      <div className='person-details card'>
        <img className='person-image card-image'
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
             alt=""/>
        <div className='card-body'>
          <h4>{name}</h4>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <span className='term'>Population</span>
              <span>{population}</span></li>
            <li className='list-group-item'>
              <span className='term'>Rotation Period</span>
              <span>{rotationPeriod}</span></li>
            <li className='list-group-item'>
              <span className='term'>Diameter</span>
              <span>{diameter}</span></li>
          </ul>
        </div>
      </div>
    )
  };
};