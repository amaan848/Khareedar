import React, { Component } from 'react';
import ClothingItem from './ClothingItem/ClothingItem';
import classes from './ClothingItems.module.css';

class ClothingItems extends Component {
    state = {
        itemsPicked : {
            shirt : 1,
            trouser : 1,
            shoes : 1,
            cap : 1,
            hoodie : 1,
            jeans : 1
        }
    };

    render() {
        const items = Object.keys(this.state.itemsPicked).map((item => {
           return <ClothingItem 
            item={item} 
            number={this.state.itemsPicked[item]} 
            key={item}/>
        }))
        return (
            <div className={classes.allItems}>
                {items}
            </div>
        )
    }
}

export default ClothingItems;