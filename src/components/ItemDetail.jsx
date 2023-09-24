import { useContext } from 'react';
import { ItemCount } from './ItemCount';
import { CartContext } from '../contexts/CartContext'

export const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext)
    const onAdd = count => addItem(item, count)

    return (
        <div className='cardDetailContainer'>
            <img src={item.img} alt="img" />
            <h1>{item.product}</h1>
            <h6>{item.description}</h6>
            <h6>Stock disponible: {item.stock}</h6>
            <div>${item.price}</div> 
            <ItemCount stock={item.stock} onAdd={onAdd}/> 
        </div>
    )
}