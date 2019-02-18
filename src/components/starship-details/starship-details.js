import React, { Component } from 'react';
import './starship-details.css';
import SwapiService from '../../services/swapi-service';


export default class StarshipDetails extends Component {
  constructor(){
    super();

    this.swapiService = new SwapiService();

    this.state = {
      starshipData: null
    };


    this.updateStarship = () => {
      const { starshipId } = this.props;
      if(!starshipId){return;}

      this.swapiService
        .getStarship(starshipId)
        .then((starshipData) => {
          this.setState({
            starshipData
          });
        });
    };
  }

  componentDidMount(){
    this.updateStarship();
  }

  componentDidUpdate(prevProp){
    if (this.props.starshipId !== prevProp.starshipId) {
      this.updateStarship();
    }
  }



  render(){

    if(!this.state.starshipData){
      return <span> Select starship from a list </span>
    }

    const {id, name, model, length, cost} = this.state.starshipData;

    return (
      <div className='person-details card'>
        <img className='person-image card-image'
             src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
             alt=""/>
        <div className='card-body'>
          <h4>{name}</h4>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <span className='term'>Model</span>
              <span>{model}</span></li>
            <li className='list-group-item'>
              <span className='term'>Length</span>
              <span>{length}</span></li>
            <li className='list-group-item'>
              <span className='term'>Cost</span>
              <span>{cost}</span></li>
          </ul>
        </div>
      </div>
    )
  };
};