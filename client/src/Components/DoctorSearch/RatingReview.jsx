import axios, { Axios } from "axios";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import SectionHeader from "../SectionHeader";
import Ratings from "./Ratings";

const RatingReview = ({ match }) => {
 
    // var Lid = "Hiii";
    var LoggedInUser = "";
    
    // FETCHING REVIEWS
    const [fetchReview, setFetchReview] = useState([]);
    
    const doctorId = useParams();
    
    // FETCHING DOCTOR DATA WITH THE HELP OF ID
    const [doctor, setDoctor] = useState([]);

    // CURRENT PATIENT/USER WHICH IS LOGGED IN
    const patientLoggedIn = async () => {
        try {
            const res = await fetch('/getCurrentUser', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            // console.log("Logged In User:",data.name);
            // console.log("LOgin data aaja bhai",data);

            LoggedInUser = data.name;
            localStorage.setItem("patientName", data.name);

            // if(data.name === setFetchReview.pname) {
            //     console.log("This is equal");
            // } else {
            //     console.log("it is not equal");
            // }

        } catch (error) {
            console.log(error);
        }
    }

    var PatientName = localStorage.getItem("patientName");

    var Lid = doctor._id;
    var Lname = doctor.name;
    
    // ADDING REVIEWS
    const [reviews, setReviews] = useState({
        pname: "",
        doctorsId: "",
        name: "",
        rating: "",
        comment: "",
    });



    const getDoctorDetailsById = async () => {
        try {
                // console.log(doctorId);
                const res = await fetch(`http://localhost:5000/doctorSearch/${doctorId.doctorId}`, {
                method: "GET",
                headers: { 
                    "Content-Type": "application/json" 
                },
            });
            
            const getDoctorDetails = await res.json();
            // console.log(getDoctorDetails);
            setDoctor(getDoctorDetails);
            // setReviews(getDoctorDetails.review)

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (error) {
            console.log(error);
        }
    }

    // 
    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setReviews({ ...reviews, [name]: value });
    };

    // REVIEW DOCTOR
    const addReviewHandler = async (e) => {
        e.preventDefault();

        const {pname, doctorsId, name, rating, comment } =  reviews;

        const res = await fetch("/doctorSearch/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                pname,
                doctorsId,
                name,
                rating,
                comment
            }),
        })

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            window.alert("Please Filled the field Properly");
            console.log("Please Review Properly");
        } else {
            window.alert("You have Reviewed Successfully");
            console.log("You have Reviewed Successfully");
        }

    }

    // FETCHING REVIEW
    const getDoctorReview = async () => {
        try {
            const res = await fetch("http://localhost:5000/getDoctorReview", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const getReviews = await res.json();
        console.log(getReviews);
        setFetchReview(getReviews);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

    
    
    useEffect(() => {
        getDoctorDetailsById();   
        getDoctorReview(); 
        patientLoggedIn();
    }, []);
    
        

    return (
        <>
            <section id="RatingReview">
                <div className="container">
                    <div className="content-box-md">
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <SectionHeader title="Rate Doctor" />
                                <div className="rating-review-wrapper m-4">
                                    <form method="GET">
                                        <div class="mb-3">
                                            <label for="InputName" class="form-label">Doctor Name</label>
                                            <input disabled type="text" class="form-control" name="" id="InputName" value={doctor.name}/>
                                        </div>
                                        <div class="mb-3">
                                            <label for="InputID" class="form-label">Doctor Id</label>
                                            <input disabled type="text" class="form-control" name="" id="InputID" value={doctor._id} />
                                        </div>
                                        <div class="mb-3">
                                            <label for="InputDesignation" class="form-label">Doctor Designation</label>
                                            <input disabled type="text" class="form-control" name="" id="InputDesignation" value={doctor.designation} />
                                        </div>
                                        <div class="mb-3">
                                            <label for="InputLocation" class="form-label">Location</label>
                                            <input disabled type="text" class="form-control" name="" id="InputLocation" value={doctor.location} />
                                        </div>
                                    </form>
                                    <form action="">
                                        <div className="mb-3">
                                            <select name="doctorsId" id="doctorsId" value={reviews.doctorsId} onChange={handleInputs} >
                                                <option value="--select--">--select--</option>
                                                <option value={Lid}>{Lid}</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <select name="name" id="name" value={reviews.name} onChange={handleInputs}>
                                                <option value="--select--">--select--</option>
                                                <option value={Lname}>{Lname}</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <select name="pname" id="pname" value={reviews.pname} onChange={handleInputs}>
                                                <option value="--select--">--select--</option>
                                                <option value={PatientName}>{PatientName}</option>
                                            </select>
                                        </div>
                                       
                                        <div class="mb-3">
                                            <label for="InputRating" class="form-label">Rating</label>
                                            <input type="number" class="form-control" id="rating" placeholder="eg: 3 " name="rating" value={reviews.rating} onChange={handleInputs}/>
                                        </div>
                                        <div class="mb-3">
                                            <label for="InputLocation" class="form-label">Review</label>
                                            <textarea type="text" class="form-control" name="comment" id="comment" value={reviews.comment} onChange= {handleInputs} />
                                        </div>
                                        <button type="submit" class="btn btn-primary" id="rate" name="rate" onClick={addReviewHandler}>Add Review</button>
                                    </form>
                                </div>
                                <div id="review">
                                    <SectionHeader title="Reviews" />
                                    <div className="review-wrapper">
                                        <div className="reviews">
                                            <hr />
                                            {
                                                fetchReview.map((item, index) => {
                                                    if(item.doctorsId == Lid) {
                                                        return(
                                                            <>
                                                                
                                                                <div className="review">
                                                                <h4>{item.pname}</h4>
                                                                <p>{item.name}</p>
                                                                <Ratings value={item.rating} />
                                                                <p> Review: {item.comment} </p>
                                                                </div>
                                                            </>
                                                        )
                                                    } 
                                                })
                                            }
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RatingReview;