import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import CardItem from '../CardItem';

function Home(){
    return (
        <>
            <HeroSection />
            <Cards />
            <CardItem />
        </>
    );
}

export default Home;
