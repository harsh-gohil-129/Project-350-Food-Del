import "./Orders.css";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Orders = ({ url }) => {
    const [orders, setOrders] = useState([]);
    const fetchAllOrders = async () => {
        const response = await axios.get(url + "api/order/list");
        if (response.data.success) {
            setOrders(response.data.data);
            console.log(response.data.data);
        }
        else {
            toast.error("Error")
        }
    }

    useEffect(() => {
        fetchAllOrders();
        
    },[])
    return (
        <div className='order add'>
            <h3> Order Page</h3>
            <div className="order-list"></div>
          
        </div>
    )
}

export default Orders
