import React from 'react';
import "style/home-v2/home-section-welcome.css"

const HomeSectionWelcome = () => {
    return (
        <div className="home-section-wrapper ">

                    <h1 className="section-welcome-heading-1">Vérifier de Résumé</h1>
                    <h1 className="section-welcome-heading-2">Made Easy</h1>

                    <div className="section-welcome-description"><strong>Resume Review AI Tool</strong></div>
                    <div className="section-welcome-text margin-scale-22">
                        We simplify the resume checking process, enabling candidates to enhance their applications with AI-driven insights.
                    </div>

                    <a href="#" className="btn btn-start">Get Started</a>
        </div>
    )
}

export default HomeSectionWelcome