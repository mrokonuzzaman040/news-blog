import React from 'react';
import Header from '../Shared/Header/Header';
import NavBar from '../Shared/NavBar/NavBar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSiteNav from '../Shared/RightSiteNav/RightSiteNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className="md:col-span-2 border">
                    <h2 className='text-4xl'>News coming soon</h2>
                </div>

                <div className="border">
                    <RightSiteNav></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default Home;