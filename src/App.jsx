import React from 'react';
import Header from './components/Header';
import HeaderBottomCards from './components/HeaderBottomCards';
import AboutSection from './components/AboutSection';
import FeaturedProperties from './components/FeaturedProperties';
import WhyUsSection from './components/WhyUsSection';
import AllProperties from './components/AllProperties';

const App = () => {
    return (
        <div>
            <Header />
            <HeaderBottomCards/>
            <AboutSection/>
            <FeaturedProperties/>
            <WhyUsSection/>
            <AllProperties/>
        </div>
    );
};

export default App;