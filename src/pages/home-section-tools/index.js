import React from 'react';
import "./home-section-tools.css"

const HomeSectionTools = () => {
    const tools = [
        {
            toolName:'Smart Resume Analysis',
            image:'../../assets/smartanalysis.webp',
            description:'In-depth analysis of resume content, language expression, formatting, and more.'
        },{
            toolName:'Personalized Recommendations',
            image:'../../assets/recommendations.webp',
            description: 'Provides customized improvement suggestions based on industry standards and job matching.'
        },{
            toolName:'Format Optimization',
            image:'../../assets/optimization.webp',
            description: 'Helps you adjust your resume format to meet standard job application requirements.'
        },{
            toolName:'Increase Job Success Rate',
            image:'../../assets/successrate.webp',
            description: 'Enhances resume pass rates and increases interview opportunities through AI-driven recommendations.'
        }
    ];
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col">
                    <div className="section-header">Our Gold Digging Models Boost Your Career Sysmatically</div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 section-indent">
                {tools.map((item) => {
                    return (
                        <div className="col" key={item.id}>
                            <div className="card card-tools">
                                <a href="#"><img src={item.image} className="card-img-top" alt={item.toolName} /></a>
                                <div className="card-body">
                                    <h5 className="card-title">{item.toolName}</h5>
                                    <p className="card-text">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    )
}

export default HomeSectionTools