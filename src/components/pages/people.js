import React from 'react';
import ItemList from '../item-list'
import PersonDetails from '../person-details'

const People = ({onItemSelected, getData, personId}) => {
  return (
    <div className='row mb2'>
      <div className='left-col col-md-6'>
        <ItemList onItemSelected={ onItemSelected }
                  getData={ getData }/>
      </div>
      <div className='col-md-6'>
        <PersonDetails personId = { personId } />
      </div>
    </div>)
};

export default People;