import fakestoreapi from "../../apis/fakeStoreApi";
import {ActionTypes} from "../constants/action-types"



//  middleware
// export const fetchProducts = () =>{
//     return async function(dispatch, getState){
//         const response = await fakestoreapi.get("/products");
//         dispatch({type:ActionTypes.FETCH_PRODUCTS , payload:response.data})
//     }
    
// };

// this code is same with above commented code

export const fetchProducts = () => async (dispatch) => {
    const response = await fakestoreapi.get("/products");
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data })
    console.log(response.data)
};

export const fetchProduct = (id) => async (dispatch) => {
    const response = await fakestoreapi.get(`/products/${id}`);
    dispatch({ type: ActionTypes.SELECTED_PRODUCTS, payload: response.data })
    console.log(response.data)
};

export const setProducts = (products) =>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
};

export const selectedProduct = (product) =>{
    return {
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:product
    }
};

export const removeSelectedProduct = ()=>{
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCTS
    }
}