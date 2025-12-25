import React from 'react';
import Header from './components/Header';
import HeaderBottomCards from './components/HeaderBottomCards';
import AboutSection from './components/AboutSection';
import FeaturedProperties from './components/FeaturedProperties';

const App = () => {
    return (
        <div>
            <Header />
            <HeaderBottomCards/>
            <AboutSection/>
            <FeaturedProperties/>
        </div>
    );
};

export default App;