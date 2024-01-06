import React from 'react';
import { Container } from '@mui/material';
import './NewsComponents.css'
import News from './News';

function NewsComponents(props) {
    const newsList = [
        {
            newsTitle: "PPC Batch will be going to start",
            newsdetails: "From 10 of Jan, PPC batch will be going to start. This batch is totally online, and registration will start from today."
        },
        {
            newsTitle: "Logic building Batch will be going to start soon",
            newsdetails: "From 2nd of dec, PPC batch will be going to start. This batch is totally online, and registration will start from today."
        },
        {
            newsTitle: "Internship Batch started ",
            newsdetails: "From 10 of Jan, PPC batch will be going to start. This batch is totally online, and registration will start from today."
        },
       
    ];
    return (
        <div className='newsSection'>
            <Container>
               <News newsList={newsList} />
            </Container>
        </div>
    );
}

export default NewsComponents;