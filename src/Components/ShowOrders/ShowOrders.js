import React from 'react';
import ShowOrder from '../../Containers/ShowOrder/ShowOrder';
import classes from './ShowOrders.module.css';

const ShowOrders = (props) => {
   const orderKeyArray = Object.keys(props.allOrders);
   
   let orderObjectArray = orderKeyArray.map(key => {
      return props.allOrders[key]
    })
   
    let showOrder = orderObjectArray.map((order) => {
        return (
        <ShowOrder 
        name={order.orderData.name} 
        shirt={order.itemsPicked.shirt}
        jeans={order.itemsPicked.jeans}
        trouser={order.itemsPicked.trouser}
        cap={order.itemsPicked.cap}
        shoes={order.itemsPicked.shoes}
        hoodie={order.itemsPicked.hoodie}
        key={order.userId}
        totalPrice={order.totalPrice}
        />
        );
        
    })
    
    return (
        <div>
            {showOrder}
            <button onClick={()=>window.history.go()} className={classes.button}>SHOP MORE</button>
        </div>
    )
}

export default ShowOrders;