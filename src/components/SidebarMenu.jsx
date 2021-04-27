import React from 'react'
import './sidebar-menu.css'

function SidebarMenu({Icon, title}) {
    return (
        <div className="sidebarMenu">
            {Icon && <Icon className="sidebarMenu-icon" />}
            {Icon ? <h3>{title}</h3> : 
                (
                    <h3 className="sidebarMenu-channel">
                        <span className="sidebarMenu-hash">#</span>
                        {title}
                    </h3>
                )
            }
        </div>
    )
}

export default SidebarMenu
