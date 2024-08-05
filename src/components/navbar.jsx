import { useState } from "react";


function Navbar() {

    const [navbar, setNavbar] = useState(false);

    function scroll() {
        if (window.scrollY >= 60) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', scroll);


    return (
        <div className={navbar ? 'navbar active' : 'navbar'}>
            <div className="navbar_2">
                <ul>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Timeline">My road</a></li>
                    <li><a href="#Certifications">Certifications</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;