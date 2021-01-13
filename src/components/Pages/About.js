import React from 'react'
import Header from '../Common/Header'
import image from "../assets/image/about2.jpg"
import Timeline from '../Common/Timeline'

function About() {
    return (
        <div>
            <Header
                title="About Us"
                subtitle="It's Really a great story"
                showButton={false}
                image = {image}
            />
            <Timeline/>
        </div>

    )
}

export default About;