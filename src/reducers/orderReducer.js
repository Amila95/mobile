import { ORDER_ITEM  } from "../actions/types";

const initialState={
    OrderList:[]
};

export default function(state = initialState,action){

    console.log(action.type);
    switch(action.type){
        case ORDER_ITEM:
        console.log("aaa",action.payload);
        // case REMOVE_ITEM:
        // console.log("removed",action.payload);    
        return{
            ...state, 
            OrderList:[action.payload,...state.OrderList]
        }
        default:
        return state;
    }
}