import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import DashBoardContent from './DashBoardContent';

const Home = () => {
    const navigate = useNavigate();
    
    useEffect (() => {
        let username = localStorage.getItem('username');
        if (username == "" || username == null || username == 'undefined') {
            console.log(username);
            navigate('/login');
        }
    },[])



    return (
        <div> 
            <div className='header'>
                <Link to= { '/'}>Home</Link>
                <Link className='right' to= {'/login'}> Logout </Link>
            </div>
            <h1 className="text-center">Welcome</h1>
            <DashBoardContent/>
        </div>
    );
}

export default Home;