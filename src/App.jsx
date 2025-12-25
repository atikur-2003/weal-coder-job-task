import React from 'react';
import Header from './components/Header';
import HeaderBottomCards from './components/HeaderBottomCards';
import AboutSection from './components/AboutSection';

const App = () => {
    return (
        <div>
            <Header />
            <HeaderBottomCards/>
            <AboutSection/>
        </div>
    );
};

export default App;