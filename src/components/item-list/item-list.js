import React, { Component } from 'react';
import Spinner from '../spinner'
import './item-list.css'


export default class ItemList extends Component {

  constructor(){
    super();

    this.state = {
      itemList: [],
      loading: false
    };

    this.renderItems = (arr) => {
      return arr.map(({id, name}) => {
        return (
          <li className='item-list-item list-group-item'
              key={id}
              onClick={()=>{this.props.onItemSelected(id)}}>
            {name}
          </li>
        )
      });
    };
  };

  componentDidMount(){
    const { getData } = this.props;
    getData()
      .then((itemList) => {
        this.setState({itemList});
      });
  };


  render () {
    const { itemList, loading } = this.state;

    const items = !loading ? this.renderItems(itemList) : null;
    const spinner = loading ? <Spinner /> : null;

    return (
      <ul className='item-list list-group'>
        {items}
        {spinner}
      </ul>
    )
  }
};

