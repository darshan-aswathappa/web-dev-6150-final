import React from 'react';
import "./home-section-welcome.css"

const HomeSectionWelcome = () => {
    return (
        <div className="home-section-wrapper ">

                    <h1 className="section-welcome-heading-1">Smart Course Recommendations</h1>
                    <h1 className="section-welcome-heading-2">Made Easy</h1>

                    <div className="section-welcome-description"><strong>Tailored just for you</strong></div>
                    <div className="section-welcome-text margin-scale-22">
                        We simplify the course selection process, enabling you to find the perfect courses just for you with AI-driven insights.
                    </div>

                    <a href="/login" className="btn btn-start">Get Started</a>
        </div>
    )
}

export default HomeSectionWelcome