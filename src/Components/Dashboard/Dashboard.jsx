import React from 'react';
import './Dashboard.css'
import { Link, Outlet } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Dashboard(props) {
    return (
        <div className='dashboard'> 
        
         <Outlet />
            <div className="tapbar">
            <Link className='Link' to=""><HomeIcon color="secondary"  sx={{fontSize:40}}/></Link>
            <Link className='Link' to="uNotification"><NotificationsIcon color="secondary"  sx={{fontSize:40}}/></Link>
            <Link className='Link' to="uNews"><AnnouncementIcon color="secondary"  sx={{fontSize:40}}/></Link>
            <Link className='Link' to="uProfle"><AccountCircleIcon color="secondary"  sx={{fontSize:40}}/></Link>
            </div>
           
        </div>
    );
}

export default Dashboard;