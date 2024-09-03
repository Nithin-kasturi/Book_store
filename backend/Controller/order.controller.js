import Order from "../model/order.model.js";
export const getOrderDetails=async(req,res)=>{
    try {
        const {email}=req.body;
        console.log(email)
        if(email){
            const details=await Order.find({email});
            if(details){
                res.status(200).json({
                    message:"Found details",
                    detailsOfOrder:{
                        details
                    },
                }
                )
            }
            else{
                res.status(400).json({
                    "message":"No orders yet"
                })
            }
        }
        else{
            res.status(401).json({
                "message":"Email is empty"
            })
        }
        
    } catch (error) {
        console.log("error while getting order details ",error);
        res.status(500).json(error);
    }
}
export const setOrderDetails=(req,res)=>{
    try {
        const {address,phone,pincode,email,items,date}=req.body;
        const orderDetails=new Order({
            address,
            phone,
            pincode,
            email,
            status:"Out for delivery",
            items,
            date
        });
        orderDetails.save();
        res.status(201).json({message:"Order taken"});
                
    } catch (error) {
        console.log("Error while setting order details in backend",error);
        res.status(500).send("Internal server error");
    }
}