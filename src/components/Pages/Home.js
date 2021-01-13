import React from 'react';
import Header from "../Common/Header";
import image from '../assets/image/header-bg.jpg'

// Re usable components
import Services from '../Common/Services'
import Portfolio from '../Common/Portfolio';

function Home() {
    return (
        <div>
            <Header
                title="Welcome To My Website"
                subtitle="Its Nice To Meet You"
                buttonText="Tell Me More"
                link="/services"
                showButton={true}
                image = {image}
            />
            <Services/>
            <Portfolio/>
        </div>
    )
}

export default Home;