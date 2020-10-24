import React from 'react';
import './Home.css';
import { Link } from "react-router-dom"
import AppsIcon from "@material-ui/icons/Apps"
import { Avatar } from '@material-ui/core';
import Search from '../Search'
function Home() {
    return (
        <div className="home">
            {/* Header Section */}
        <div className='home__header' >
            <div className='home__headerLeft' >
                <Link to="/about"> About </Link>
                <Link to="/store"> Store </Link>
            </div>
            <div className='home__headerRight' >
                <Link to="/gmail"> Gmail </Link>
                <Link to="/images"> Images </Link>
            {/* Menu Icon */}
            <AppsIcon />
            {/* Account Circle */}
            <Avatar />

            </div>
        </div>
            {/* Main body */}
        <div className='home__body' >
            <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google"></img>
       
            <div className="home__inputContainer">
                <Search />
            </div>

        </div>
        </div>
    )
}

export default Home
