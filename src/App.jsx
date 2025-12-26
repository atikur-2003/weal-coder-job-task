import React from 'react';
import Header from './components/Header';
import HeaderBottomCards from './components/HeaderBottomCards';
import AboutSection from './components/AboutSection';
import FeaturedProperties from './components/FeaturedProperties';
import WhyUsSection from './components/WhyUsSection';
import AllProperties from './components/AllProperties';
import Testimonials from './components/Testimonial';
import ContactSection from './components/ContactSection';
import BlogSection from './components/BlogSection';

const App = () => {
    return (
        <div>
            <Header />
            <HeaderBottomCards/>
            <AboutSection/>
            <FeaturedProperties/>
            <WhyUsSection/>
            <AllProperties/>
            <Testimonials/>
            <ContactSection/>
            <BlogSection/>
        </div>
    );
};

export default App;