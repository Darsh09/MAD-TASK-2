import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BlogPage from './BlogPage';
import style2 from './style2.css';

class Categories extends React.Component {
    render() { 
        return (
            <section class="layout-grid">
	          <Link to={{pathname:"/Science",state:{name:"Science"}}}> <div class="block"><br /><br /><br />Science</div></Link>
              <Link to={{pathname:"/Travel",state:{name:"Travel"}}}><div class="block"><br /><br /><br />Travel</div></Link>
              <Link to={{pathname:"/Food",state:{name:"Food"}}}><div class="block"><br /><br /><br />Food</div></Link>
              <Link to={{pathname:"/Tech",state:{name:"Tech"}}}><div class="block"><br /><br /><br />Tech</div></Link>
              <Link to={{pathname:"/Fitness",state:{name:"Fitness"}}}><div class="block"><br /><br /><br />Fitness</div></Link>
              <Link to={{pathname:"/Music",state:{name:"Music"}}}><div class="block"><br /><br /><br />Music</div></Link>
            </section>
         );
    }
}   
export default Categories;