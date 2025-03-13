import "./Sidebar.css";
import React from "react";
import { assets } from "../../assets/assets";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="div sidebar-options">
                
                <div className="div sidebar-option">
                <img src={assets.order_icon} alt=" "/>
                <p>List Items</p>
                </div>

                <div className="div sidebar-option">
                <img src={assets.order_icon} alt=" "/>
                <p>Orders</p>
                </div>
                </div>
        </div>
    )
}

export default Sidebar
