import React from 'react';
import './NotificationComponents.css'
import SingleNotification from './SingleNotification';
import { Container } from '@mui/material';

function NotificationComponents(props) {
    const notificationList = [
        {
            notificationTitle: "Alert! Please pay you balance fees. Ignore if you paid already",
            type:"warning"
        },
        
        {
            notificationTitle: "Internship Batch started ",
            type:"info" 
        },
        {
            notificationTitle: "You have paid full fees successfully ",
            type:"success" 
        }
       
    ];
    return (
        <Container >
           <SingleNotification notificationList={notificationList}/>
        </Container>
    );
}

export default NotificationComponents;