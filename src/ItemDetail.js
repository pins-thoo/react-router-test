/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import './App.css';
const FortniteAPI = require("fortnite-api-io");
const fortniteAPI= new FortniteAPI("5be289e3-b77ce869-98c3fe44-e3165ec1");

function ItemDetail({ match }) {

  useEffect(() => {
    fetchItem();
  },[]);

  const [item, setItem] = useState({ images: {} });

  const fetchItem = async () => {
    const item = await fortniteAPI.getItemDetails(match.params.id);
    console.log(item);
    setItem(item.item);
  };

  return (  
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <img src={item.images.icon} alt=""/>     
    </div>
  );
}

export default ItemDetail;