import React from 'react'
import { useState, useEffect } from 'react'
import ShimmerUI from './Shimmer'
import { RES_DETAIL_URL } from '../utils/constants'
import { useParams } from 'react-router-dom'

const RestaurantDetails = () => {
  
  const { id } =  useParams() ;
  const [ resDetailsJson , setResDetailsJson] = useState(null)

  useEffect( () => {
     fetchData()
  }, [])

  console.log(id, 'Id')

  const fetchData = async () => {
    const resp = await fetch(RES_DETAIL_URL+id)
    const respJson = await resp.json()
    setResDetailsJson(respJson)
    console.log(respJson)
  }

  if(resDetailsJson === null)
    return <ShimmerUI />

   //Destructuring the properties

   const { name, locality} = resDetailsJson?.data?.cards[2].card?.card?.info

   const itemCardsPath =
   resDetailsJson?.data?.cards[4]?.groupedCard?.cardGroupMap?.['REGULAR']?.cards[2]?.card?.card;

 // Proper destructuring of `itemCards`
 const itemCards =
   itemCardsPath?.itemCards ||
   itemCardsPath?.categories?.[0]?.itemCards ||
   [];

   console.log(itemCards,'items')

//    console.log(resDetailsJson?.data?.cards[4]?.groupedCard?.cardGroupMap?.['REGULAR']?.cards[2]?.card?.card?.categories[0],'hi')

  return (
    <div>
      <h2> { name }</h2>
       <p> { locality }</p>
       <ul>
          { console.log(itemCards)}
          { itemCards.map ((item) =>    <li key={item?.card?.info?.id}> { item?.card?.info?.name} - { 'Rs.' + parseInt(item?.card?.info?.price,10) / 100 }</li>) }
       </ul>
    </div>
  )
}

export default RestaurantDetails