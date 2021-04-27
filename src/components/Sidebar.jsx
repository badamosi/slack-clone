import React from 'react'
import './sidebar.css'
import FibreManualRecrodIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'

import InsertCommentIcon from '@material-ui/icons/InsertComment'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import AppsIcon from '@material-ui/icons/Apps'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import AddIcon from '@material-ui/icons/Add'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'

import SidebarMenu from './SidebarMenu'
import { BookmarkBorder } from '@material-ui/icons'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-info">
                    <h2>My Consult360 LLC</h2>
                    <h3><FibreManualRecrodIcon /> Badamosi Majeed</h3>
                </div>
                <CreateIcon />
            </div>

            <SidebarMenu Icon={InsertCommentIcon} title="Threads" />
            <SidebarMenu Icon={InboxIcon} title="Mention & Reactions" />
            <SidebarMenu Icon={DraftsIcon} title="Saved items" />
            <SidebarMenu Icon={BookmarkBorderIcon} title="Bookmark" />
            <SidebarMenu Icon={PeopleAltIcon} title="People" />
            <SidebarMenu Icon={AppsIcon} title="Apps" />
            <SidebarMenu Icon={FileCopyIcon} title="File browser" />
            <hr/>
            <SidebarMenu Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarMenu Icon={ExpandMoreIcon} title="Show more" />
            <SidebarMenu Icon={AddIcon} title="Channels" />

            <SidebarMenu title="YouTube" />
        </div>
    )
}

export default Sidebar
