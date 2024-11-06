import React from "react";

const Product = ( { productName }) => {
    return (
        <div className="product">
            <h2>{productName}</h2>    
        </div>
    )
}

export default Product