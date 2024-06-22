import React, { useEffect } from 'react';
import '../styles/About.scss'; 

const About = () => {
    useEffect(() => {
        const textLines = document.querySelectorAll('.text-container p, .text-container h1');
        textLines.forEach((line, index) => {
            line.style.opacity = 0;
            line.style.transform = 'translateX(100%)';
            setTimeout(() => {
                line.style.transition = `opacity 0.5s ease ${index * 0.3}s, transform 0.5s ease ${index * 0.3}s`;
                line.style.opacity = 1;
                line.style.transform = 'translateX(0)';
            }, 100);
        });

        const animateSections = (containerSelector, boxSelector) => {
            const container = document.querySelector(containerSelector);
            const boxes = document.querySelectorAll(boxSelector);
            const animationFlags = Array(boxes.length).fill(false);

            const handleScroll = () => {
                const sectionPosition = container.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                if (sectionPosition < screenPosition && !animationFlags.some(flag => flag)) {
                    boxes.forEach((box, index) => {
                        setTimeout(() => {
                            box.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
                            box.style.opacity = 1;
                            box.style.transform = 'translateX(0)';
                            animationFlags[index] = true;
                        }, index * 300);
                    });
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        };

        animateSections('.mission-container', '.mission-box');
        animateSections('.involvement-container', '.involvement-box');
        animateSections('.land-acknowledgment-container', '.land-acknowledgment-box');

    }, []);

    return (
        <div className="about-container">
            <div className="background-image">
                <div className="text-container">
                    <h1>Welcome to DegentrifAI!</h1>
                    <p>We are your guide to understanding and predicting gentrification trends across the Montreal metropolitan area. Our mission is to provide valuable insights into neighborhood transformations, raise awareness, empower informed decision-making, and foster discussions about the impact of urban development.</p>
                </div>
            </div>
            
            <section className="mission-container">
                <div className="mission-left">
                    <h2>OUR MISSION</h2>
                    <a href="/process">Click here to learn more about our process.</a>
                </div>
                <div className="mission-right">
                    <div className="mission-box"> 
                        <p><strong>Why DegentrifAI?</strong><br />
                        Gentrification can have profound impacts on neighborhoods, affecting housing affordability, cultural identity, and social dynamics. Our website aims to shed light on these complex issues, enabling residents, policymakers, investors, and researchers to understand the evolving landscape of Montreal.</p>
                    </div>
                    <div className="mission-box">
                        <p><strong>What is DegentrifAI?</strong><br />
                        DegentrifAI is an interactive tool that maps and predicts gentrification across the Montreal metropolitan area.</p>
                    </div>
                    <div className="mission-box">
                        <p><strong>How does it work?</strong><br />
                        At DegentrifAI, we utilize advanced data analytics and predictive modeling to forecast gentrification patterns. By analyzing a diverse range of factors including demographic shifts, economic indicators, housing market trends, and historical data, we generate reliable predictions that help stakeholders anticipate changes in their communities.</p>
                    </div>
                </div>
            </section>

            <section className="involvement-container">
                <div className="involvement-left">
                    <h2>GET INVOLVED</h2>
                    <a href="/get-involved">Click here to learn more about how you can get involved.</a>
                </div>
                <div className="involvement-right">
                    <div className="involvement-box">
                        <p>Join us in exploring the dynamics of gentrification in Montreal. Whether you're a resident concerned about neighborhood changes, an investor seeking ethical and sustainable opportunities, or a researcher studying urban development, DegentrifAI is here to support your interests and initiatives.</p>
                    </div>
                    <div className="involvement-box">
                        <p>Have questions or feedback? We'd love to hear from you! Contact our team at <a href="mailto:your-email@example.com">your-email@example.com</a> to get in touch.</p>
                    </div>
                    <div className="involvement-box">
                        <p>Thank you for visiting DegentrifAI. Together, let's navigate the future of Montreal's neighborhoods with knowledge and insight.</p>
                    </div>
                </div>
            </section>

            <section className="land-acknowledgment-container">
                <div className="land-acknowledgment-left">
                    <h2>LAND ACKNOWLEDGMENT</h2>
                    <a href="/land-acknowledgment">Click here to learn more about our land acknowledgment.</a>
                </div>
                <div className="land-acknowledgment-right">
                    <div className="land-acknowledgment-box">
                        <p>As our project pertains to discussions of land and neighborhoods in Tiohtiá:ke/Montreal, we would like to acknowledge, recognize, and respect the Kanien’kehà:ka as the traditional custodians of the lands and waters which we stand on. Mila is situated on the traditional territory of the Kanien’kehà:ka, a place which has long served as a site of meeting and exchange amongst many First Nations including the Kanien’kehá:ka of the Haudenosaunee Confederacy, Huron/Wendat, Abenaki, and Anishinaabeg.</p>
                    </div>
                    <div className="land-acknowledgment-box">
                        <p>In future iterations of DegentrifAI, we hope to integrate more Indigenous expertise and perspectives into the design of our website and the mission of our project.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
