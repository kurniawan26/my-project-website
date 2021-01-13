import React, { Component } from 'react'
import Teamitem from './Teamitem';

import img1 from "../assets/image/team/2.jpg";
import img2 from "../assets/image/team/2.jpg";
import img3 from "../assets/image/team/2.jpg"

const teamitem = [
    {name : "Kurniawan", image: img1, jabatan: "Lead Designer"},
    {name : "Fauzi Kurniawan", image: img2, jabatan: "Front End Developer"},
    {name : "Jiwong", image: img3, jabatan: "Full Stack Developer"}
]

class Team extends Component {
    render() {
        return (
            <section className="page-section bg-light" id="team">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {teamitem.map((item, index) => {
                            return <Teamitem {...item} key={index} />
                        })}
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Team;