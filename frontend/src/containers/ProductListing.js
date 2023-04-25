import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
import ProductComponent from "./ProductComponent";
import { fetchProducts, setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products)
    
    const dispatch = useDispatch(); 

    useEffect(() => { 
// call action create from action 
        dispatch(fetchProducts())
    }, []);


    console.log("Products :", products)
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing