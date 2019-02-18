import React from 'react';
import ItemList from '../item-list'
import PlanetDetails from '../planet-details'

const Planets = ({onItemSelected, getData, planetId}) => {
  return (
    <div className='row mb2'>
      <div className='left-col col-md-6'>
        <ItemList onItemSelected={ onItemSelected }
                  getData={ getData }/>
      </div>
      <div className='col-md-6'>
        <PlanetDetails planetId = { planetId } />
      </div>
    </div>)
};

export default Planets;