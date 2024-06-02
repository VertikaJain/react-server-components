import React from 'react'

const url = "https://course-api.com/javascript-store-products"

const getProducts = async () => {
    console.log("in get products");
    // const products = await (await fetch(url)).json()
    // console.log(products);
}

const Products = () => {
    console.log("in products file..");
    getProducts()
    return (
        <div>
            {/* {getProducts()} */}
        </div>
    )
}

export default Products
