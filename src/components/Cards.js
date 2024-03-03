import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import PropTypes from 'prop-types';

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
                src="../../public/images/img-9.jpg"
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

