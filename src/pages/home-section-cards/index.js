import React from 'react';
import "./home-section-cards.css"

const HomeSectionCards = () => {
    return (
        <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 g-4 section-indent">
            <div className="col">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Biomedical Resume </h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">CS Resume</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Finance Resume</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in
                            to additional content.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Engineering Resume</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSectionCards