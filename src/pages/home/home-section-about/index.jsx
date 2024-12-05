import React from 'react';
import "./home-section-about.css"

const HomeSectionAbout = () => {
    const tools = [
        {
            id:1,
            toolName:'Smart Resume Analysis',
            image:'../../../assets/images-v2/smartanalysis.webp',
            description:'In-depth analysis of resume content, skills, and experience.'
        },{
            id:2,
            toolName:'Personalized Recommendations',
            image:'../../../assets/images-v2/recommendations.webp',
            description: 'Provides customized improvement suggestions based on your resume and expectations.'
        },{
            id:3,
            toolName:'Reasons for the Recommendation',
            image:'../../../assets/images-v2/optimization.webp',
            description: 'Provides insights into the reasons for the recommendation.'
        },{
            id:4,
            toolName:'Increase Success in Study Plan ',
            image:'../../../assets/images-v2/successrate.webp',
            description: 'Enhances your chances of success in your career plan through AI-driven recommendations.'
        }
    ];
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col">
                    <div className="section-header">Our Gold Digging Models Boost Your Study Plan Sysmatically</div>
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

export default HomeSectionAbout