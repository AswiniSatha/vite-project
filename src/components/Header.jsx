import React from "react";
import './Header.css';

function Header()
{
    const date=new Date();
    const datanumber=date.getDate();
    const day=date.getDay();
    const month=date.getMonth();
    const year=date.getFullYear();
    const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months=['January','Feb','March','April','May','June','July','August','September','October','November','December']
    return(<div className="header">
        <div className="header-container">
        <div className="header-day">
        <div className="header-day_day">
            {days[day]}
        </div>
        <div className="header-day_date">
            {datanumber+' '+months[month]+' '+year}
        </div>
        </div>
        {/* <div className="header_logo">
            All Tasks
        </div> */}
        </div>
    </div>)
}

export default Header;