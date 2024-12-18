import React from "react";

export default function Footer() {
    return (
        <footer className=" row footer-wrapper">
            <div className="footer-text">
                <strong>©Smart Course Recommendations 2024 | All Rights Reserved | Contact Us: </strong>
                <a href="tel:+13009445628">SmartCourseRecommendation@northeastern.edu</a>
            </div>
            <div className="footer-legal">
                <a href="#" className="footer-link">Privacy Policy</a>
                <a href="#" className="footer-link">Terms of Use</a>
            </div>
        </footer>
    );
}
