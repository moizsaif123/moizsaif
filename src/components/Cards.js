import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import PropTypes from 'prop-types';
import logo from "./img-9.jpg";
import logo1 from "./img-2.jpg";

Cards.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string,
};

function Cards() {
  
  return (
    <div className='cards'> 
      <h1>Check out these EPIC Destination!</h1>
      <div className='cards__container'>
        <div className='cards_wrapper'>
            <ul className='cards__items'>
                <CardItem
                src={logo}
                text="Explore the hidden waterfall deep
                inside the Amazon Jungle"
                label="Adventure"
                path="/services"
                />
                <CardItem
                src={logo1}
                text="Explore the hidden waterfall deep
                inside the Amazon Jungle"
                label="Adventure"
                path="/services"
                />
               
            </ul>
            <ul className='cards__items'>
                <CardItem
                src={logo}
                text="Explore the hidden waterfall deep
                inside the Amazon Jungle"
                label="Adventure"
                path="/services"
                />
                <CardItem
                src={logo1}
                text="Explore the hidden waterfall deep
                inside the Amazon Jungle"
                label="Adventure"
                path="/services"
                />
                <CardItem
                src={logo1}
                text="Explore the hidden waterfall deep
                inside the Amazon Jungle"
                label="Adventure"
                path="/services"
                />
               
            </ul>
        </div>
      </div>
    </div>
  )
}




export default Cards;

