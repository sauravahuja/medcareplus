import { NavLink, useParams } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../NavigationBar/Navbar";
import SectionHeader from "../SectionHeader";

import './Forum.css'

const ForumSolo = () => {

    const title = useParams();
    console.log(title);
    return (
        <>
            <Navbar />
            <section id="forumsolo">
                <div className="content-box-md">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <h1>Demol the new gen painkiller ?</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo excepturi soluta sunt, esse nulla rerum quae fuga temporibus, dicta molestias voluptates et. Ab voluptatem cumque voluptate dolor illo iure id laborum sunt ipsa, rerum cupiditate, dicta repellat iusto repudiandae?</p>
                                <img src="https://images.theconversation.com/files/256057/original/file-20190129-108364-17hlc1x.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop" alt=" Demol Image" height="350px"/>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo excepturi soluta sunt, esse nulla rerum quae fuga temporibus, dicta molestias voluptates et. Ab voluptatem cumque voluptate dolor illo iure id laborum sunt ipsa, rerum cupiditate, dicta repellat iusto repudiandae?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo excepturi soluta sunt, esse nulla rerum quae fuga temporibus, dicta molestias voluptates et. Ab voluptatem cumque voluptate dolor illo iure id laborum sunt ipsa, rerum cupiditate, dicta repellat iusto repudiandae?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo excepturi soluta sunt, esse nulla rerum quae fuga temporibus, dicta molestias voluptates et. Ab voluptatem cumque voluptate dolor illo iure id laborum sunt ipsa, rerum cupiditate, dicta repellat iusto repudiandae?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ForumSolo;