import React from 'react';
import '../css/SidebarOption.css';

// 
const SidebarOptions = ({title,Icon}) => {
    return (
        <div className="sidebar_option">
            {Icon && <Icon className="sidebarOption__icon"/>}
            {Icon? <h4>{title}</h4>:<p>{title}</p>}
            
          
        </div>
    );
};

export default SidebarOptions;