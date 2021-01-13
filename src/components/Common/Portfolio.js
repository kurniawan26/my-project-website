import React, { Component } from 'react'
import PortfolioItem from './PortfolioItem';

// Import Image
import image1 from "../assets/image/Portfolio/01-thumbnail.jpg";
import image2 from "../assets/image/Portfolio/02-thumbnail.jpg";
import image6 from "../assets/image/Portfolio/06-thumbnail.jpg";
import image3 from "../assets/image/Portfolio/03-thumbnail.jpg";
import image4 from "../assets/image/Portfolio/04-thumbnail.jpg";
import image5 from "../assets/image/Portfolio/05-thumbnail.jpg";

const portfolio = [
    {title : 'Threads', subtitle: 'Illustration', image: image1},
    {title : 'Explore', subtitle: 'Graphic Designer', image: image2},
    {title : 'Finish', subtitle: 'Identity', image: image3},
    {title : 'Lines', subtitle: 'Branding', image: image4},
    {title : 'Southwest', subtitle: 'Website Design', image: image5},
    {title : 'Window', subtitle: 'Photography', image: image6},
]

class Portfolio extends Component {
    render() {
        return (
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {portfolio.map((item, index) =>{
                            return <PortfolioItem {...item} key={index}/>
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;