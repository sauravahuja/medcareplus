import React from "react";
import facebook from '../../Assets/Images/icons/facebook.png';
import instagram from '../../Assets/Images/icons/instagram.png';
import github from '../../Assets/Images/icons/github.png';
import { NavLink } from "react-router-dom";
import Navbar from "../NavigationBar/Navbar";

const DoctorDashboard = () => {
    return (
        <>
            <Navbar />
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
                                <NavLink className="nav-link" to="/doctorsearch">Doctor Search</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="https://medcare-bloodbankstats.netlify.app/" target="_blank">Blood Bank</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/ambulancelist">Ambulance</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin/doctorapproval">Approval page</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/pharmacy">Pharmacy</NavLink>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <a className="nav-link dropdown-toggle p-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Appointment
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/appointment/patient">Patient Appointment</a></li>
                                    <li><a className="dropdown-item" href="/appointment/doctor"> Doctor Appointment</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default DoctorDashboard;