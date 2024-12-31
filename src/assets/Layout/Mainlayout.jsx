import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div>
     <Nav></Nav>
<Outlet></Outlet>
     <Footer></Footer>
        </div>
    );
};

export default Mainlayout;