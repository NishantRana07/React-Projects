import React from 'react';
import {useState} from 'react'
import './Card.css'
// eslint-disable-next-line react/prop-types
function Card({ value }) {
     var [a,b] =useState(0);
    return (
        <React.Fragment>
            <div className='Header text-white flex items-center content-center bg-red-800 h-24'>Hii I am {value}</div>
            <div className='mid'>
                <div className='btn' onClick={()=>{b(a+1)}}>Click Me</div>
                <div >Value = {a}</div>
            </div>
            <div className='Footer'></div>
        </React.Fragment>
    );
}

export default Card;
