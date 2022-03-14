import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../NavigationBar/Navbar";
import SectionHeader from "../SectionHeader";

import './Forum.css'

const ForumList = () => {

    const [forum, setForum] = useState([]);

    // FETCHING FORUM DATA
    const getForumData = async () => {
        try {
            const res = await fetch("/getForum", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const getForumData = await res.json();
              console.log("Patients Appointmet:", getForumData);
            setForum(getForumData);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getForumData();
    }, []);

    return (
        <>
            <Navbar />
            <section id="forumlist">
                <div className="container">
                    <SectionHeader title="Forum Discussion" />
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="forum-wrapper">
                            {
                                forum.map((item, index) => {
                                    return(
                                        <>
                                            <div className="forum-card">
                                                <div className="forum-image-wrapper">
                                                    <img src={item.imageLink} />
                                                </div>
                                                <div className="forum-card-wrapper">
                                                    <p className="d-flex flex-row-reverse forum-date">{item.date}</p>
                                                    <h3 className="forum-title">{item.title}</h3>
                                                    <p className="forum-body">
                                                       {item.body}
                                                    </p>
                                                    <NavLink to="/" className="btn btn-outline-primary w-100">Read More</NavLink>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ForumList;