import MainLayout from 'layout/main'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import 'style/pricing/pricing.css';

export default function Pricing() {
  const navigate = useNavigate();

  const handleRegisterNavigation = () => {
    navigate("/register")
  }

  const handlePaymentNavigation = () => {
    navigate("/payment-gateway")
  }

  return (
    <MainLayout>
      <div className="container py-3">
        <header>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal text-body-emphasis">Pricing</h1>
            <p className="fs-5 text-body-secondary">At ResumeReviewer, we offer flexible pricing plans to suit your
              needs, whether you are a student, job seeker, or seasoned professional.</p>
            <p className="fs-5 text-body-secondary">Get access to our AI-powered resume analysis, detailed feedback,
              and premium features designed to help you land your dream job.</p>
            <p className="fs-5 text-body-secondary">Select the plan that best fits your
              career goals and start improving your resume today!</p>
          </div>
        </header>
        <main>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div className="col">
              <div className=" mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Free</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$0<small className="text-body-secondary fw-light">/mo</small></h1>
                  <ul className="list-unstyled mt-3 mb-4 text-start">
                    <li>➖ 2/mo limited resume reviews</li>
                    <li>➖ 6/mo limited course suggestions</li>
                    <li>➖ Basic resume score</li>
                    <li>➖ Access to community forums</li>
                  </ul>
                  <button onClick={() => handleRegisterNavigation()} type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className=" mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Premium</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$15<small className="text-body-secondary fw-light">/mo</small></h1>
                  <ul className="list-unstyled mt-3 mb-4 text-start mx-auto">
                    <li>➕ 10/mo resume reviews</li>
                    <li>➕ 12/mo course suggestions</li>
                    <li>➕ Company-specific resume adjustments</li>
                    <li>➕ Phone and email support</li>
                  </ul>
                  <button onClick={() => handlePaymentNavigation()} type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className=" mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-bg-primary border-primary">
                  <h4 className="my-0 fw-normal">Ultimate</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$50<small className="text-body-secondary fw-light">/mo</small></h1>
                  <ul className="list-unstyled mt-3 mb-4 text-start">
                    <li>⭐ Unlimited resume reviews</li>
                    <li>⭐ Unlimited course suggestions</li>
                    <li>⭐ 1/mo professional consultation</li>
                    <li>⭐ Custom reports and analysis</li>
                    <li>⭐ Priority customer support</li>
                  </ul>
                  <button onClick={() => handlePaymentNavigation()} type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  )
}
