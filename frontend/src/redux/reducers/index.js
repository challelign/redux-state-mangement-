import {combineReducers} from 'redux'

import { productReducer, selectedProductReducer } from './productReducer'

// this js file is used to combine all reducers

const reducers = combineReducers({
    allProducts:productReducer,
    product:selectedProductReducer
})

export default reducers;