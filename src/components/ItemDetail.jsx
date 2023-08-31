import { ItemCount } from './ItemCount';

export const ItemDetail = ({item}) => (
    <div className='cardDetailContainer'>
        <img src={item.img} alt="img" />
        <h1>{item.product}</h1>
        <h6>{item.description}</h6>
        <div>${item.price}</div> 
        <ItemCount item = {item}/> 
    </div>
)