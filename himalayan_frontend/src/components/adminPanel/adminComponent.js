import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const MainContent = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Making the API request using Axios and await the response
        const response = await axios.get('http://192.168.54.30:3000/api/post');
        console.log(response.data)

        // Set the fetched data into the component's state
        setData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function to initiate the API request
  }, []);
  




  return (
    <div className="main-content">
      <div className='title'>Welcome to Admin Panel
      <div className='second-title'>Top Voted Complaints Of Your Ward</div>
      </div>
      <div className='complaints-area'>

      {data.map(item => (
        <>
          
      <div className='card'>
          <div className="votes">
          <h2 className="title">{item.content}</h2>
          <div className='ratings'>
          {item.upVotes}<div className='material-icons green'>&nbsp; thumb_up</div>
            </div>
            <div className='ratings'>
            {item.downVotes} <div className='material-icons red'>&nbsp;thumb_down</div>
            </div>
            <div>WardNumber : { item.wardNumber} </div>
          </div>
          <div className="comments">{item.numComments} Comments</div>
        </div> 
      </>))}

      
  );
      </div>
    </div>
  );
};

export default MainContent;
