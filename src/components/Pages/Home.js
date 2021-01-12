import React from 'react';
import Header from "../Common/Header";
import image from '../assets/image/header-bg.jpg'

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
        </div>
    )
}

export default Home;