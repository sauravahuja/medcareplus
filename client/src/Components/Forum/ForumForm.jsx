import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../NavigationBar/Navbar";
import SectionHeader from "../SectionHeader";

import './Forum.css'

const ForumForm = () => {
    return (
        <>
            <Navbar />
            <section id="forumform">
                <div className="content-box-sm">
                    <div className="container">
                        <SectionHeader title="Write your Forum" />
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <form>
                                    <div class="mb-3">
                                        <label for="title" class="form-label">Title</label>
                                        <input type="text" class="form-control" id="title" placeholder="Enter Forum Title" />

                                    </div>
                                    <div class="mb-3">
                                        <label for="body1" class="form-label">Introduction</label>
                                        <input type="text" class="form-control" id="body1" placeholder="Enter Forum Introduction" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="imglink" class="form-label">Image Link</label>
                                        <input type="text" class="form-control" id="imglink" placeholder="https://imagelink" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="body" class="form-label">Body</label>
                                        <textarea class="form-control" placeholder="Enter Body Here..." id="body" style={{ height: "150px" }}></textarea>

                                    </div>
                                    <button type="submit" class="btn btn-primary w-100">Add to Forum</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ForumForm;