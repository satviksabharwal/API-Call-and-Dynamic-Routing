import React, {useState, useEffect} from 'react';
import '../App.css';

function Item({match}) {
    
    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({
        images: {}
    });

    const fetchItem = async () => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)
        const item = await data.json();
        setItem(item.data.item);
    }

    return (
        <div className="itemStyle">
            <h1>{item.name}</h1>
            <img src={item.images.background} />
        </div>
    )
}

export default Item
