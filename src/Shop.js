import React, {useState, useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
const FortniteAPI = require("fortnite-api-io");
const fortniteAPI= new FortniteAPI("5be289e3-b77ce869-98c3fe44-e3165ec1");

function Shop() {

  useEffect(() => {
    upcomingItems();
  },[]);

  const [items, setItems] = useState([]);

  const upcomingItems = async () => {
    const items = await fortniteAPI.listUpcomingItems();
    console.log(items);
    setItems(items.items);
  };

  return (
    
    <div>
      {items.map(item => (
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;