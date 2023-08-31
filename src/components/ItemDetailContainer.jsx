import { useState, useEffect } from 'react';

import { ItemDetail } from './ItemDetail';

import data from '../data/products.json';


export const ItemDetailContainer = (props) => {
    const [item, setItem] = useState(null);

    useEffect(()=> {
        const promise = new Promise ((resolve, reject) => {
            setTimeout(() => resolve(data[0]), 2000);
        });

        promise.then((data) => setItem(data));
    }, []);

    if (!item) return <div>Loading...</div>;

    return (
        <ItemDetail item = {item}/>
    );
}