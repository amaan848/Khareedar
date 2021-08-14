import React, { Component } from 'react';
//import classes from './Khareedar.module.css';
import IntroImage from '../../UI/IntroImage/IntroImage';
import ClothingItems from '../ClothingItems/ClothingItems';

class Khareedar extends Component {
    render() {
        return (
            <div>
               <IntroImage/>
               <ClothingItems/>
            </div>
        )
    }
}

export default Khareedar;