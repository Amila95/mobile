import { ORDER_ITEM } from './types';

export const setOrder = (data) => dispatch =>{
    console.log("setorder", data)
 
    dispatch ( {
        type: ORDER_ITEM,
        payload:data
    })
}
