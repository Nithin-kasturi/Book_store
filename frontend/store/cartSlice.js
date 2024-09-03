import {createSlice} from '@reduxjs/toolkit';
const initialState={
    cart:[],
    total:0,
}
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        add(state,action){
            state.cart.push(action.payload);
            state.total += action.payload.price;
        },
        delete(state,action){
            const itemToRemove = state.cart.find(item => item._id === action.payload);
            const tempArr=state.cart.filter(item=>item._id===action.payload);
            const count=tempArr.length;
            console.log(count);
            if (itemToRemove) {
                state.cart = state.cart.filter(item => item._id !== action.payload);
                state.total -= count*itemToRemove.price; // Assuming `price` is a property of the item
            }
        //    return state.cart
        },
        
        resetState:()=>initialState
    }
});
export const {add,delete:remove,resetState}=cartSlice.actions;

export default cartSlice.reducer;
