import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator';
import './random-planet.css';

export default class RandomPlanet extends Component{

  constructor () {
    super();

    this.SwapiService = new SwapiService();

    this.state = {
      planet: {},
      loading: true,
      error: false
    };

    this.onPlanetLoaded = (planet) => {
      this.setState({
        planet,
        loading: false
      });
    };

    this.onError = (err) => {
      this.setState({
        loading: false,
        error: true
      });
    };

    this.updatePlanet = () => {
      const id = Math.floor(Math.random()*19) + 2;
      this.SwapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
    };
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render () {
    const { planet, loading, error } = this.state;
    const hasDone = !(loading || error);

    const spinner = loading ? <Spinner /> : null;
    const content = hasDone ? <PlanetView planet={planet} /> : null;
    const errInd = error ? <ErrorIndicator/> : null;

    return (
      <div className='random-planet card'>
        {spinner}
        {content}
        {errInd}
      </div>
    );
  };


};

const PlanetView = ({planet}) => {
  const { id, name,
        population,
        rotationPeriod,
        diameter } = planet;

  return (
    <React.Fragment>
      <img className='planet-image'
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
           alt=""/>
      <div className='card-body'>
        <h4>{ name }</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Population</span>
            <span>{ population }</span></li>
          <li className='list-group-item'>
            <span className='term'>Rotation Period</span>
            <span>{ rotationPeriod }</span></li>
          <li className='list-group-item'>
            <span className='term'>Diameter</span>
            <span>{ diameter }</span></li>
        </ul>
      </div>
    </React.Fragment>
  )
}