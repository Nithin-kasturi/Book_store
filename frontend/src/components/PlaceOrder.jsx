import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetState } from '../../store/cartSlice';
import axios from 'axios';

export const PlaceOrder = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const productCart = useSelector(state => state.cart.cart);

    // State to manage user details
    const [userDetails, setUserDetails] = useState({
        address: '',
        pincode: '',
        phone: '',
        email: JSON.parse(localStorage.getItem('users')).email,
        items: productCart,
        date: new Date().toLocaleString()
    });

    // Update userDetails whenever productCart changes
    useEffect(() => {
        setUserDetails(prevDetails => ({
            ...prevDetails,
            items: productCart
        }));
    }, [productCart]);

    const handleSubmit = async () => {
        // Validation
        if (userDetails.address === '' || userDetails.pincode === '' || userDetails.phone === '') {
            toast.error('All fields are required');
            return;
        }
        if (!/^\d+$/.test(userDetails.phone)) {
            toast.error('Phone number must be numeric');
            return;
        }
        if (userDetails.phone.length !== 10) {
            toast.error('Phone number must be of length 10');
            return;
        }
        if (!/^\d+$/.test(userDetails.pincode)) {
            toast.error('Pincode number must be numeric');
            return;
        }

        // Submit order
        try {
            await axios.post('https://book-store-ap.vercel.app/order/set', userDetails);
            toast.success('Order placed :)');
            dispatch(resetState());
            navigate('/');
        } catch (err) {
            console.error(err);
            toast.error('An error occurred while placing the order');
        }
    };

    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Those are some nice choices!</h3>
                    <div className='flex justify-around mt-4'>
                        <label>Address</label>
                        <input 
                            type='text' 
                            placeholder='Enter Address' 
                            className='border-2 text-center w-3/4 rounded-xl'
                            value={userDetails.address}
                            onChange={(e) => setUserDetails(prevDetails => ({
                                ...prevDetails,
                                address: e.target.value
                            }))}
                        />
                    </div>
                    <div className='flex justify-around mt-4'>
                        <label className='mr-2'>Pincode</label>
                        <input 
                            type='text' 
                            placeholder='Pincode'
                            className='border-2 text-center w-3/4 rounded-xl'
                            value={userDetails.pincode}
                            onChange={(e) => setUserDetails(prevDetails => ({
                                ...prevDetails,
                                pincode: e.target.value
                            }))}
                        />
                    </div>
                    <div className='flex justify-around mt-4'>
                        <label className='mr-2'>Phone</label>
                        <input 
                            type='text' 
                            placeholder='Contact details' 
                            className='border-2 text-center w-3/4 rounded-xl'
                            value={userDetails.phone}
                            onChange={(e) => setUserDetails(prevDetails => ({
                                ...prevDetails,
                                phone: e.target.value
                            }))}
                        />
                    </div>
                    <button 
                        className="bg-[#e5981f] text-[#000001] px-3 py-2 rounded-md w-full hover:bg-black hover:text-[#e5981f] duration-300 cursor-pointer mt-6"
                        onClick={handleSubmit}
                    >
                        Confirm Details
                    </button> 
                </div>
            </dialog>
        </div>
    );
};
