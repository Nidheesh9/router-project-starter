
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import {toast} from "react-hot-toast";

function Navbar(props){
    let isloggedIn=props.isloggedIn;
    let setIsloggedIn=props.setIsloggedIn;

    return (
        <div className="flex justify-between text-richblack-100 items-center w-11/12 max-w-[1160px] py-4 mx-auto ">

            <Link to="/">
                <img src={logo} alt="error" width={160} height={32} loading="lazy"/>
            </Link>


            <nav >
                <ul className="flex gap-6 text-white">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>


            <div className="flex mx-5 gap-3 items-center">
                {   !isloggedIn &&
                    <Link to="/login">
                        <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Log In</button>
                    </Link>
                }
                {   !isloggedIn &&
                    <Link to="/signup">
                        <button  className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Sign Up</button>
                    </Link>
                }
                {   isloggedIn &&
                    <Link to="/">
                        <button  className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={()=>{
                            setIsloggedIn(false);
                            toast.success("Logged Out Successfully");
                        }}>Log Out</button>
                    </Link>
                }
                {   isloggedIn &&
                    <Link to="/dashboard">
                        <button  className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Dashboard</button>
                    </Link>
                }
            </div>

        </div>
    )
};

export default Navbar;