import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data  = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const dataItems = await data.json();
        setItems(dataItems.data);
    } 

    return (
        <div>
        {items.map(item => (
            <h1 key={item.itemId}>
            <Link to={`/shop/${item.itemId}`}
            style={{textDecoration: 'none', color: 'brown', marginRight: '20px', textAlign: 'center', fontWeight: 700, justifyContent: 'center'}}
        >
            {item.item.name}
            </Link>
            </h1>
        ))}
        </div>
    )
}

export default Shop;
