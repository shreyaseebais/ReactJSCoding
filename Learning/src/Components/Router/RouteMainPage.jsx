import {Routes, Route} from 'react-router-dom';
import { Link, NavLink } from "react-router-dom";
import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';

export default function RouteMainPage(){
    return (
        <>
            <nav>
                <NavLink to="/" style={({ isActive }) => ({
                    color: isActive ? "Green" : "black"
                })}>
                Home
                </NavLink> | 
                <NavLink to="/about">About</NavLink> | 
                <NavLink to="/contact">Contact</NavLink>
            </nav>
            <Routes>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="/" element={<Home></Home>}></Route>
            </Routes>      
        </>
    )
}