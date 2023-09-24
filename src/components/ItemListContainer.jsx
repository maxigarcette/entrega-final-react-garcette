import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

import { ItemList } from './ItemList';

export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
    
        const refCollection = id 
          ? query(collection(db, "items"), where ("productId", "==", id))
          : collection(db, "items")
    
        getDocs(refCollection).then(dataBundle=> {
          if (dataBundle.size === 0) setItems([])
          else {
            setItems(
              dataBundle.docs.map(doc => ({
                 id: doc.id, 
                 ...doc.data(),
              }))
            )
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