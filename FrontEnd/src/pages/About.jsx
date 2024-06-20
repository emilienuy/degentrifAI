import React, { useEffect } from 'react';
import '../styles/About.scss'; 

const About = () => {
    useEffect(() => {
        const element = document.querySelector('.about-container');
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }, 100);
    }, []);

    return (
        <div className="about-container">
            <div className="header-section">
                <h1>About Page</h1>
                <div className="video-container">
                    <video width="100%" controls>
                        <source src="path/to/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <section className="mission-section">
                <h2>Our Mission</h2>
                <p>
                    Why degentrifAI? … <br />
                    What is degentriA? … <br />
                    How does it work? … <br />
                    <a href="/process">Click here to learn more about our process.</a>
                </p>
            </section>

            <section className="land-acknowledgment-section">
                <h2>Land Acknowledgment</h2>
                <p>
                    As our project pertains to discussions of land and neighborhoods in Tiohtiá:ke/Montreal, we would like to acknowledge, recognize, and respect the Kanien’kehà:ka as the traditional custodians of the lands and waters which we stand on. Mila is situated on the traditional territory of the Kanien’kehà:ka, a place which has long served as a site of meeting and exchange amongst many First Nations including the Kanien’kehá:ka of the Haudenosaunee Confederacy, Huron/Wendat, Abenaki, and Anishinaabeg. In future iterations of degentrifAI, we hope to integrate more Indigenous expertise and perspectives into the design of our website and the mission of our project.
                </p>
            </section>
        </div>
    );
};

export default About;
