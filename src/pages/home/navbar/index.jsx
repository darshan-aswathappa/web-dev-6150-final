
import React from 'react'
import "./navbar.css"
import {GraduationCap} from "lucide-react";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <a href="/" className="text-3xl flex mb-0 text-black no-underline">
                    <GraduationCap className="mr-2 w-8 h-8 opacity-80"/>CourseCraft
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" style={{visibility:"visible"}} id="navbarNavDropdown">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-outline-success link" href='/login'>Login</a>
                        </li>

                        <li className="nav-item">
                            <a className="btn btn-outline-warning link" href='/signup'>Register</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar