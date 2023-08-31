import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import data from '../data/products.json';
import { ItemList } from './ItemList';

export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    
    const { id } = useParams();

    useEffect(()=> {
        const promise = new Promise ((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        });

        promise.then((data) => {
            if (!id){
                setItems(data);
            } else {
                const filteredItems = data.filter((item) => item.productId === id);
                setItems(filteredItems);
            }
        });
    }, [id]);

    return (
        <>
            <div className="saludo">{props.greeting}</div>
            <div className='cardContainer'>
                <ItemList items = {items}/>
            </div>
        </>
    );
}