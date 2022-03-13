import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../NavigationBar/Navbar";
import SectionHeader from "../SectionHeader";

import './Forum.css'

const ForumList = () => {
    return (
        <>
            <Navbar />
            <section id="forumlist">
                <div className="container">
                    <SectionHeader title="Forum Discussion" />
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="forum-wrapper">

                                <div className="forum-card">
                                    <div className="forum-image-wrapper">
                                        <img src="https://images.theconversation.com/files/256057/original/file-20190129-108364-17hlc1x.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop" alt=" Demol Image" />
                                    </div>
                                    <div className="forum-card-wrapper">
                                        <p className="d-flex flex-row-reverse forum-date">12th Jan 2022</p>
                                        <h3 className="forum-title">Demol the new gen painkiller ?</h3>
                                        <p className="forum-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo excepturi soluta sunt, esse nulla rerum quae fuga temporibus, dicta molestias voluptates et. Ab voluptatem cumque voluptate dolor illo iure id laborum sunt ipsa, rerum cupiditate, dicta repellat iusto repudiandae?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo excepturi soluta sunt, esse nulla rerum quae fuga temporibus, dicta molestias voluptates et. Ab voluptatem cumque voluptate dolor illo iure id laborum sunt ipsa, rerum cupiditate, dicta repellat iusto repudiandae?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo excepturi soluta sunt, esse nulla rerum quae fuga temporibus, dicta molestias voluptates et. Ab voluptatem cumque voluptate dolor illo iure id laborum sunt ipsa, rerum cupiditate, dicta repellat iusto repudiandae?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo excepturi soluta sunt, esse nulla rerum quae fuga temporibus, dicta molestias voluptates et. Ab voluptatem cumque voluptate dolor illo iure id laborum sunt ipsa, rerum cupiditate, dicta repellat iusto repudiandae?
                                        </p>
                                        <NavLink to="/" className="btn btn-outline-primary w-100">Read More</NavLink>
                                    </div>
                                </div>

                                <div className="forum-card">
                                    <div className="forum-image-wrapper">
                                        <img src="https://images.theconversation.com/files/256057/original/file-20190129-108364-17hlc1x.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop" alt=" Demol Image" />
                                    </div>
                                    <div className="forum-card-wrapper">
                                        <p className="d-flex flex-row-reverse forum-date">12th Jan 2022</p>
                                        <h3 className="forum-title">Demol the new gen painkiller ?</h3>
                                        <p className="forum-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo excepturi soluta sunt, esse nulla rerum quae fuga temporibus, dicta molestias voluptates et. Ab voluptatem cumque voluptate dolor illo iure id laborum sunt ipsa, rerum cupiditate, dicta repellat iusto repudiandae?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo excepturi soluta sunt, esse nulla rerum quae fuga temporibus, dicta molestias voluptates et. Ab voluptatem cumque voluptate dolor illo iure id laborum sunt ipsa, rerum cupiditate, dicta repellat iusto repudiandae?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo excepturi soluta sunt, esse nulla rerum quae fuga temporibus, dicta molestias voluptates et. Ab voluptatem cumque voluptate dolor illo iure id laborum sunt ipsa, rerum cupiditate, dicta repellat iusto repudiandae?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo excepturi soluta sunt, esse nulla rerum quae fuga temporibus, dicta molestias voluptates et. Ab voluptatem cumque voluptate dolor illo iure id laborum sunt ipsa, rerum cupiditate, dicta repellat iusto repudiandae?
                                        </p>
                                        <NavLink to="/" className="btn btn-outline-primary w-100">Read More</NavLink>
                                    </div>
                                </div>

                                <div className="forum-card">
                                    <div className="forum-image-wrapper">
                                        <img src="https://images.theconversation.com/files/256057/original/file-20190129-108364-17hlc1x.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop" alt=" Demol Image" />
                                    </div>
                                    <div className="forum-card-wrapper">
                                        <p className="d-flex flex-row-reverse forum-date">12th Jan 2022</p>
                                        <h3 className="forum-title">Demol the new gen painkiller ?</h3>
                                        <p className="forum-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo excepturi soluta sunt, esse nulla rerum quae fuga temporibus, dicta molestias voluptates et. Ab voluptatem cumque voluptate dolor illo iure id laborum sunt ipsa, rerum cupiditate, dicta repellat iusto repudiandae?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo excepturi soluta sunt, esse nulla rerum quae fuga temporibus, dicta molestias voluptates et. Ab voluptatem cumque voluptate dolor illo iure id laborum sunt ipsa, rerum cupiditate, dicta repellat iusto repudiandae?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo excepturi soluta sunt, esse nulla rerum quae fuga temporibus, dicta molestias voluptates et. Ab voluptatem cumque voluptate dolor illo iure id laborum sunt ipsa, rerum cupiditate, dicta repellat iusto repudiandae?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo excepturi soluta sunt, esse nulla rerum quae fuga temporibus, dicta molestias voluptates et. Ab voluptatem cumque voluptate dolor illo iure id laborum sunt ipsa, rerum cupiditate, dicta repellat iusto repudiandae?
                                        </p>
                                        <NavLink to="/" className="btn btn-outline-primary w-100">Read More</NavLink>
                                    </div>
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

export default ForumList;