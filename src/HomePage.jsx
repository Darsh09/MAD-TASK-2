 import React, { Component } from 'react';
 import {Link} from 'react-router-dom';
 import style1 from './style1.scss';
 import Categories from './Categories.jsx';
 class HomePage extends React.Component {
     render() { 
         return (
             <div>
                 <Link to="/Categories">
            <div class="button"><span>+ CREATE YOUR BLOG</span></div>
                 </Link>
            <h1>ABOUT US</h1>
            <p>
            An About Us page helps your company make a good first impression,<br />and is critical for building customer trust and loyalty. Which is why we've<br />created this free, easy-to-use tool that lets you instantly generate a<br />custom About Us page for your store.
            Once your content is generated,you’ll<br />be able to tweak and customize it until it's just right. Create yours now!
            </p>  
            </div>      
          );
    }
}
export default HomePage;
 