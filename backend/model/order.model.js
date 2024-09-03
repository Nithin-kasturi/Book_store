import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type:String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
    ,
    category:{
        type:String,
    },
    image:{
        type:String
    }
}, { _id: false }); // _id is false to avoid creating an id for each item

const orderSchema = mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    items: [itemSchema],
    date:{
        type:String,
    }
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
