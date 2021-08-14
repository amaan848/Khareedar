import React from 'react';
import introImage from '../../assets/grocery-shopping.jpeg';
import classes from './IntroImage.module.css';

const IntroImage = (props) => {
    return (
        <div>
            <img src={introImage} alt="Let's Shop" className={classes.image}/>
        </div>
    );
};

export default IntroImage;