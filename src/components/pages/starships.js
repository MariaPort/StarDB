import React from 'react';
import ItemList from '../item-list';
import StarshipDetails from "../starship-details";

const Starships = ({onItemSelected, getData, starshipId}) => {
  return (
    <div className='row mb2'>
      <div className='left-col col-md-6'>
        <ItemList onItemSelected={ onItemSelected }
                  getData={ getData }/>
      </div>
      <div className='col-md-6'>
        <StarshipDetails starshipId = { starshipId } />
      </div>
    </div>)
};

export default Starships;