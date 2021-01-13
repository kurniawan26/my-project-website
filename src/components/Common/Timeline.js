import React, { Component} from 'react';
import TimelineItem from "./TimelineItem"

import img1 from "../assets/image/about/1.jpg";
import img2 from "../assets/image/about/2.jpg";
import img3 from "../assets/image/about/3.jpg";
import img4 from "../assets/image/about/4.jpg"

const timeline =[
    {class : "", time: '2004 - 2008', heading: 'Our Humble Begins', image: img1, description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'},
    {class : "timeline-inverted", time: 'March 2011', heading: 'An Agency is Born', image: img2, description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'},
    {class : "", time: 'December 2012', heading: 'Transition to Full Service', image: img3, description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'},
    {class : "timeline-inverted", time: 'July 2014', heading: 'Phase Two Expansion', image: img4, description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'}
]

class Timeline extends Component{
    render(){
        return(
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">About</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <ul className="timeline">
                        {timeline.map((item, index) => {
                            return <TimelineItem {...item} key={index}/>
                        })}
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>
                                    Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Timeline;