import React from 'react';
import './App.css'
import Header from './components/Header/header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import RightSidebar from './components/RightSidebar/RightSidebar';

function Home() {
    return (
        <div className="app">
            <Header />
            <div className="app_body">
                <Sidebar />
                <Feed />
                <RightSidebar /> 
            </div>
            
        </div>
    )
}

export default Home
