import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ItemDetail } from './ItemDetail';

import data from '../data/products.json';


export const ItemDetailContainer = (props) => {
    const [item, setItem] = useState(null);

    const {id} = useParams();

    useEffect(()=> {
        const promise = new Promise ((resolve, reject) => {
            setTimeout(() => { 
                const itemById = data.find((item)=>item.id === id)
                resolve(itemById)}, 2000);
        });

        promise.then((data) => setItem(data));
    }, []);

    if (!item) return <div>Loading...</div>;

    return (
        <ItemDetail item = {item}/>
    );
}