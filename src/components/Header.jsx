import React from 'react'
import {Avatar} from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import './header.css'

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <Avatar className="header-avatar" alt="Badamosi Majeed" />
                <AccessTimeIcon />
            </div>
            <div className="header-search">
                <SearchIcon />
                <input type="text" placeholder="Search My Consult360 LLC"/>
            </div>
            <div className="header-right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
