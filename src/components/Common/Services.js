import React from 'react';
import SingleService from '../Common/SingleService'

const services = [
    { title: "E - Commerce", description: 'Butuh layanan pemasaran untuk bisnis anda? selamat anda mengunjungi website yang tepat', icon: "fa-shopping-cart" },
    { title: "Responsive Design", description: 'Butuh layanan pembuatan website responsif untuk bisnis anda? anda berada di website yang tepat', icon: "fa-laptop"},
    { title: "Web - Security", description: 'Khawatir akan keamanan website anda? kami akan membantu anda menjaga data dari serangan luar', icon: "fa-lock"}
]

function Services() {
    return (
        <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Services</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row text-center">
                    {services.map((service, index) => {
                        return <SingleService {...service} key={index}/>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services;