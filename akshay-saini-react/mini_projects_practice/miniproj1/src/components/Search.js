import React from "react"
import { useState, useEffect } from "react";
import Product from "./Product";


const Search = () => {

    const url = 'https://mocki.io/v1/740f8211-03cf-4bad-acd7-9842e882617b'
    
    const [listOfProducts,setListOfProducts] =  useState(['Products']);
    const [searchText, setSearchText] = useState('Abc');
    const [listOfProductsSearch, setListOfProductsSearch] = useState([]);
 
    useEffect(() => {
        fetchProducts()
    },[])

     async function fetchProducts() {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        setListOfProducts(jsonResponse.items)
        setListOfProductsSearch(jsonResponse.items)
    }


    return (
     <div className = "items-container">

         <div className="search-container" >
            <input type="text" placeholder="Search ...." value={searchText}
            onChange={(event) => {
                setSearchText(event.target.value)
            }} ></input>
            <button  onClick= {
                () => {
                    const filteredProducts = listOfProductsSearch.filter((productName) => productName.includes(searchText));
                    console.log(filteredProducts)
                    setListOfProducts(filteredProducts)
                }
            }  >Search</button>
         </div>

         <div className="products-list">
             {
                listOfProducts.map((item) => ( <Product key={item} productName={item} />))
             }
         </div>
     </div>
    )
}

export default Search