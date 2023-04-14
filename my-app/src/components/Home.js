import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
    const usenavigate = useNavigate();
    
    useEffect (() => {
        let username = localStorage.getItem('username');
        if (username === "" || username === null) {
            usenavigate('/');
        }
    })



    return (
        <div> 
            <div className='header'>
                <Link to= { '/'}>Home</Link>
                <Link className='right' to= {'/login'}> Logout </Link>
            </div>
            <h1 className="text-center">Welcome</h1>

        </div>
    );
}

export default Home;