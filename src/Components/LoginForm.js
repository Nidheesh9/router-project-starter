import { useState } from "react"
// import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast"

const LoginForm=({setIsloggedIn})=>{
    const [formData,setFormData]=useState({
        email:"",
        password:""
    });

    const navigator=useNavigate();

    // const [showPassword,setShowPassword]=useState(false);

    function changehandler(event){
        setFormData((prev)=>{
            return(
                {...prev,
                    [event.target.name]:event.target.value
                }
            )
        });
    };

    function submithandler(event){
        event.preventDefault();
        setIsloggedIn(true);
        toast.success("Logged In Successfully");
        navigator("/dashboard");
    }

    return (
        <form onSubmit={submithandler} className="flex flex-col w-full gap-y-4 mt-6"
        >

            <label className="w-full">
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
                <input name="email" type="text"
                 required
                 value={formData.email} onChange={changehandler} 
                 placeholder="Enter E-mail Id"
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                 />
            </label>

            <label>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password <sup className='text-pink-200'>*</sup></p>
                <input name="password" type="password"
                required placeholder="Enter Password"
                 onChange={changehandler}
                 value={formData.password}
                 className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
            </label>

            {/* <span onClick={()=>{
                setShowPassword(!showPassword);
            }}>
                {
                    !showPassword?(<AiOutlineEye/>):(<AiOutlineEyeInvisible/>)
                }
            </span> */}

            <Link to="#">
                <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    Forgot Password
                </p>
            </Link>

            <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                Sign In
            </button>



        </form>
    )
}

export default LoginForm;