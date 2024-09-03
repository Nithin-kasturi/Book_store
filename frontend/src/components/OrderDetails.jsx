import React, { useEffect, useState } from 'react';
import { getOrderD } from '../api/orderDetails';
import { CartCards } from './CartCards';

export const OrderDetails = () => {
    const [orderDetails, setOrderDetails] = useState([]);
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        const getDetails = async () => {
            try {
                const data = await getOrderD();
                setOrderDetails(data.detailsOfOrder.details || []); // Set details or an empty array
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false); // Set loading to false after data fetching is done
            }
        };

        getDetails();
    }, []);

    return (
        <div className=''>
            <dialog id="my_modal_4" className="modal text-black">
                <div className="modal-box w-full">
                    <form method="dialog">
                        {/* If there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-[#e5981f]">Order Details</h3>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        orderDetails.length > 0 ? (
                            orderDetails.map((order, index) => (
                                <div key={index} className='flex flex-col justify-around gap-4 mt-3'>
                                    <p><strong>Order Id:</strong> {order._id || 'N/A'}</p>
                                    <p><strong>Time:</strong> {order.date|| 'N/A'}</p>
                                    
                                    <p><strong>Address:</strong> {order.address || 'N/A'}</p>
                                    <p><strong>Email:</strong> {order.email || 'N/A'}</p>
                                    <p><strong className='text-green-500'>Status:</strong> {order.status || 'N/A'}</p>
                                    <p><strong>Phone:</strong> {order.phone || 'N/A'}</p>
                                    <p><strong>Pincode:</strong> {order.pincode || 'N/A'}</p>
                                    {order.items && order.items.length > 0 ? (
                                        order.items.map((item, itemIndex) => (
                                            <CartCards item={item} key={itemIndex} removeBtn={false} />
                                        ))
                                    ) : (
                                        <p>No items found</p>
                                    )}
                                    <div className='w-full border-2 border-[#e5981f]'></div>
                                </div>
                                
                            ))
                        ) : (
                            <p>No orders found</p>
                        )
                    )}
                </div>
            </dialog>
        </div>
    );
};
