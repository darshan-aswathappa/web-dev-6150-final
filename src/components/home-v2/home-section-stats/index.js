import React from 'react';
import "style/home-v2/home-section-stats.css"

const HomeSectionStats = () => {
    return (
        <div>
            <div className="row justify-content-center wrapper-stats">
                <div className="col">
                    <div className="section-header">Excellent Performances & More Users</div>
                </div>
            </div>

            <div className="row section-indent">
                <div className="col-xl-3 col-lg-6">
                    <div className="card card-stats mb-4 mb-xl-0">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title text-uppercase text-muted mb-0">Visits</h5>
                                    <span className="h2 font-weight-bold mb-0">350,897</span>
                                </div>
                                <div className="col-auto">
                                    <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                        <i className="fas fa-chart-bar"></i>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 mb-0 text-muted text-sm">
                                <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                                <span className="text-nowrap">Since last month</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                    <div className="card card-stats mb-4 mb-xl-0">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title text-uppercase text-muted mb-0">New users</h5>
                                    <span className="h2 font-weight-bold mb-0">2,356</span>
                                </div>
                                <div className="col-auto">
                                    <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                                        <i className="fas fa-chart-pie"></i>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 mb-0 text-muted text-sm">
                                <span className="text-danger mr-2"><i className="fas fa-arrow-down"></i> 3.48%</span>
                                <span className="text-nowrap">Since last week</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                    <div className="card card-stats mb-4 mb-xl-0">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title text-uppercase text-muted mb-0">Members</h5>
                                    <span className="h2 font-weight-bold mb-0">924</span>
                                </div>
                                <div className="col-auto">
                                    <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                                        <i className="fas fa-users"></i>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 mb-0 text-muted text-sm">
                                <span className="text-warning mr-2"><i className="fas fa-arrow-down"></i> 1.10%</span>
                                <span className="text-nowrap">Since yesterday</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                    <div className="card card-stats mb-4 mb-xl-0">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title text-uppercase text-muted mb-0">Performance</h5>
                                    <span className="h2 font-weight-bold mb-0">49,65%</span>
                                </div>
                                <div className="col-auto">
                                    <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                                        <i className="fas fa-percent"></i>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 mb-0 text-muted text-sm">
                                <span className="text-success mr-2"><i className="fas fa-arrow-up"></i> 12%</span>
                                <span className="text-nowrap">Since last month</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSectionStats