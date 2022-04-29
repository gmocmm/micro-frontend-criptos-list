import React from 'react'

const Cripto = ({props}) => {
    console.log(props);
   const { asset_id, name,price_usd, volume_1day_usd} = props;
  return (
    <div key={asset_id}>
      <p>Id : {asset_id}</p>  
      <p>Name: {name}</p>  
      <p>Price: {price_usd}</p>  
      <p>Volume: {volume_1day_usd}</p> 
    </div>
  )
}

export default Cripto