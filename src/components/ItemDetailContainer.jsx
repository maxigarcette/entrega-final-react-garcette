import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore()
    
        const refDoc = doc(db, "items", id)
    
        getDoc(refDoc).then(dataBundle => {
            setItem({ id: dataBundle.id, ...dataBundle.data() })
        }).finally(() => setLoading(false))
    }, [id]);
    if (loading) return <div>Loading...</div>;

    return (
        <ItemDetail item = {item}/>
    );
}