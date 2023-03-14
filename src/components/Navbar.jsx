import React, {useState} from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaGit} from "react-icons/fa"
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../assets/FarazLogo.png";
import {Link} from "react-scroll"


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>

                <img src={Logo} alt="Logo" style={{width: '200px'}}/>

            </div>

            {/* MENU */}
                <ul className="hidden md:flex">
                    <li>
                        <Link to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="work" smooth={true} duration={500}>
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>

            {/* HAMBUGER */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* MOBILE MENU */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className = "hidden lg:flex fixed top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a  className="flex justify-between items-center w-full text-gray-300"
                        href="https://www.linkedin.com/in/faraz-fayyaz/" target="_blank">LinkedIn</a>
                        <FaLinkedin size={30}/>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#181817]">
                        <a  className="flex justify-between items-center w-full text-gray-300"
                        href="https://github.com/farazfayyaz" target="_blank">GitHub</a>
                        <FaGithub size={30}/>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#58b2c6]">
                        <a  className="flex justify-between items-center w-full text-gray-300"
                        href="mailto:farazfayyazwork@gmail.com">Email</a>
                        <HiOutlineMail size={30}/>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#303030]">
                        <a  className="flex justify-between items-center w-full text-gray-300"
                        href="/resume">Resume</a>
                        <BsFillPersonLinesFill size={30}/>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar