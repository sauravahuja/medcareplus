import React from "react";
import facebook from '../../Assets/Images/icons/facebook.png';
import instagram from '../../Assets/Images/icons/instagram.png';
import github from '../../Assets/Images/icons/github.png';
import Footer from '../Footer';
import { NavLink } from "react-router-dom";
import './dashboard.css';


const DoctorDashboard = () => {
    return (
        <>
            <section id="top-nav">
                <div className="d-flex" style={{ "justifyContent": "space-between" }}>
                    <div className="d-flex flex-row-reverse">
                        <img src={facebook} alt="Facebook Logo" height="27px" style={{ padding: "0 4px" }} />
                        <img src={instagram} alt="Instagram Logo" height="27px" style={{ padding: "0 4px" }} />
                        <img src={github} alt="Github Logo" height="27px" style={{ padding: "0 4px" }} />
                    </div>
                    <h6 style={{ "paddingRight": "50px", "paddingTop": "5px" }}>Greetings, {localStorage.getItem("cuser")}</h6>
                </div>
            </section>

            <nav id="navbar-c" className="navbar navbar-expand-lg navbar-light bg-light c-navbar py-4">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/" style={{ color: "#2184BB", fontSize: "24px" }}><strong>MedCare Plus</strong></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="https://medcare-bloodbankstats.netlify.app/" target="_blank">Blood Bank</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/ambulancelist">Ambulance</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/appointment/doctor">Appointments List</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/doctorapproval">Medcare Plus Forum</NavLink>
                            </li>
                        </ul>
                        <form class="d-flex flex-row-reverse">
                            <button class="btn btn-danger" type="submit">Logout</button>
                        </form>
                    </div>
                </div>
            </nav>

            <section id="dashboard-container">
                <div className="container">
                    <div className="content-box-md">
                        <h4>Greetings, Dr. Saurav Ahuja</h4>
                        <hr />
                        <div className="mt-5"></div>
                        <div className="d-flex justify-content-between">
                            <div className="work-container w-70">
                                <h3 className="mb-4">My Appointments</h3>
                                <div className="appointment-card-wrapper">
                                    {/* card 1 */}
                                    <div className="appointment-card-single">
                                        <div className="d-flex justify-content-between">
                                            <div className="appointment-card-left w-70">
                                                <p><b>Patient Name:</b> Nikunj Ahuja</p>
                                                <p><b>Priority:</b> Follow Up</p>
                                                <p><b>Mode:</b> Video Call</p>
                                            </div>
                                            <div className="appointment-card-right">
                                                <p><b>11:00 | Thu Feb 12 2022</b></p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="d-flex flex-row-reverse">
                                            <a href="/" className="btn btn-success mx-1">Video Call</a>
                                            <a href="/" className="btn btn-primary mx-1">Give Prescription</a>
                                        </div>
                                    </div>

                                    {/* card 2 */}
                                    <div className="appointment-card-single">
                                        <div className="d-flex justify-content-between">
                                            <div className="appointment-card-left w-70">
                                                <p><b>Patient Name:</b> Nikunj Ahuja</p>
                                                <p><b>Priority:</b> Follow Up</p>
                                                <p><b>Mode:</b> Video Call</p>
                                            </div>
                                            <div className="appointment-card-right">
                                                <p><b>11:00 | Thu Feb 12 2022</b></p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="d-flex flex-row-reverse">
                                            <a href="/" className="btn btn-success mx-1">Video Call</a>
                                            <a href="/" className="btn btn-primary mx-1">Give Prescription</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="review-container w-27">
                                <h3 className="mb-4">Reviews & Reviews</h3>
                                
                                <div className="dashboard-review-wrapper">
                                    <p className="m-0">From: Nikunj Ahuja</p>
                                    <p className="pt-1 m-0">
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                    </p>
                                    <p className="pt-1">Review: Amazing Doctor ! Beautiful Service</p>
                                </div>

                                <div className="dashboard-review-wrapper">
                                    <p className="m-0">From: Nikunj Ahuja</p>
                                    <p className="pt-1 m-0">
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                    </p>
                                    <p className="pt-1">Review: Amazing Doctor ! Beautiful Service</p>
                                </div>

                                <div className="dashboard-review-wrapper">
                                    <p className="m-0">From: Nikunj Ahuja</p>
                                    <p className="pt-1 m-0">
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                    </p>
                                    <p className="pt-1">Review: Amazing Doctor ! Beautiful Service</p>
                                </div>

                                <div className="dashboard-review-wrapper">
                                    <p className="m-0">From: Nikunj Ahuja</p>
                                    <p className="pt-1 m-0">
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                        <i className="fas fa-star rating-star"></i>
                                    </p>
                                    <p className="pt-1">Review: Amazing Doctor ! Beautiful Service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default DoctorDashboard;