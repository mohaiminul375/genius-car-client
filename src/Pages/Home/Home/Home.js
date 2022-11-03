import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        </div>
    );
};

export default Home;