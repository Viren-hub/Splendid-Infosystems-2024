import React from 'react';
import Paper from '@mui/material/Paper';

function News(props) {
    const { newsList } = props;
    return (
<div className='news'>
      {newsList.length > 0 ? (
        newsList.map((news, index) => (
          <div className="onenews" key={index}>
            <Paper elevation={1} style={{ padding: 10, marginBottom: 10 }}>
              <strong>{news.newsTitle}</strong>
              <p>{news.newsdetails}</p>
            </Paper>
          </div>
        ))
      ) : (
        <Paper elevation={1} style={{ padding: 10, marginBottom: 10 }}>
          <p>No news available at the moment.</p>
        </Paper>
      )}
    </div>
    );
}

export default News;