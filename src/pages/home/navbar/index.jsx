
import React from 'react'
import "./navbar.css"

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top fixed">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Smart Course Recommendation</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">What We Do</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Who We Help</a>
                        </li>
                        {/*<li className="nav-item dropdown">*/}
                        {/*    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"*/}
                        {/*       aria-expanded="false">*/}
                        {/*        Tools*/}
                        {/*    </a>*/}
                        {/*    <ul className="dropdown-menu">*/}
                        {/*        <li><a className="dropdown-item" href="#">Smart Resume Analysis</a></li>*/}
                        {/*        <li><a className="dropdown-item" href="#">Personalized Recommendations</a></li>*/}
                        {/*        <li><a className="dropdown-item" href="#">Format Optimization</a></li>*/}
                        {/*        <li><a className="dropdown-item" href="#">Increase Job Success Rate</a></li>*/}
                        {/*    </ul>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-outline-success" href='/login'>Login</a>
                        </li>

                        <li className="nav-item">
                            <a className="btn btn-outline-warning" href='/signup'>Register</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar