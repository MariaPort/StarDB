import React, { Component } from 'react';
import './person-details.css';
import SwapiService from '../../services/swapi-service';

export default class PersonDetails extends Component {
  constructor(){
    super();

    this.swapiService = new SwapiService();

    this.state = {
      personData: null
    };


    this.updatePerson = () => {
      const { personId } = this.props;

      if(!personId){return;}

      this.swapiService
          .getPerson(personId)
          .then((personData) => {
            this.setState({
              personData
            });
          });
    };
  }

  componentDidMount(){
    this.updatePerson();
  }

  componentDidUpdate(prevProp){
    if (this.props.personId !== prevProp.personId) {
      this.updatePerson()
    }
  }



  render(){

    if(!this.state.personData){
      return <span>Select person from a list</span>
    }

    const {id, name, gender, birthYear, eyeColor} = this.state.personData;

    return (
      <div className='person-details card'>
        <img className='person-image card-image'
             src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
             alt=""/>
        <div className='card-body'>
          <h4>{name}</h4>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <span className='term'>Gender</span>
              <span>{gender}</span></li>
            <li className='list-group-item'>
              <span className='term'>Birth Year</span>
              <span>{birthYear}</span></li>
            <li className='list-group-item'>
              <span className='term'>Eye color</span>
              <span>{eyeColor}</span></li>
          </ul>
        </div>
      </div>
    )
  };
};