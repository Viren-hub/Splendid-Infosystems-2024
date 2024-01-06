import React from 'react';
import './NotificationComponents.css'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { Margin } from '@mui/icons-material';

function SingleNotification(props) {
    const { notificationList } = props;

    return (
        <div className='allNofication'>
            {notificationList.map((news, index) => (
                <Alert severity={news.type} style={{ marginBottom: 10 }}>
                    <AlertTitle>{news.type}</AlertTitle>
                    {news.notificationTitle}
                </Alert>
            ))}
        </div>
    );
}


export default SingleNotification;