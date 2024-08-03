import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast"


const SignupForm=({setIsloggedIn})=>{

    const [formData,setFormData]=useState({
        firstname:"",
        lastname:"",
        address:"",
        password:"",
        confirmpassword:""
    });

    const [accountType,setAccountType]=useState("student");

    const navigator=useNavigate();

    function changehandler(event){
        setFormData((prev)=>{
            return(
                {
                    ...prev,
                    [event.target.name]:event.target.value
                }
            )
        })
    }

    function submithandler(event){
        event.preventDefault();
        setIsloggedIn(true);
        if(formData.password !== formData.confirmpassword){
            toast.error("Password does not match");
            return;
        }
        toast.success("Account Created");
        navigator("/dashboard");
    }

    return (
        <div>
            <div className='flex justify-evenly bg-richblack-800 p-1 gap-x-1 my-3 rounded-full max-w-max'>

                <button onClick={()=>{
                    setAccountType("student");
                }} className={`${accountType==="student"
                ?
                "bg-richblack-900 text-richblack-5":
                "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>
                    Student
                </button>
                <button onClick={()=>{
                    setAccountType("instructor");
                }} className={`${accountType==="instructor"?
                "bg-richblack-900 text-richblack-5":
                    "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>
                    Instructor
                </button>

            </div>

            <form onSubmit={submithandler}>
                <div className='flex gap-x-4'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
                        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' name="firstname" type="text" onChange={changehandler}
                            placeholder="Enter First Name" required value={formData.firstname}
                        />
                    </label>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></p>
                        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' name="lastname" type="text" onChange={changehandler}
                            placeholder="Enter Last Name" required value={formData.lastname}
                        />
                    </label>
                </div>
                <div className="mt-[10px]">
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>E-Mail <sup className='text-pink-200'>*</sup></p>
                        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' name="email" type="email" onChange={changehandler}
                            placeholder="Enter E-Mail" required value={formData.email}
                        />
                    </label>
                </div>

                <div className='w-full flex gap-x-4 mt-[10px]'>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password <sup className='text-pink-200'>*</sup></p>
                        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' name="password" type="password" onChange={changehandler}
                            value={formData.password} required placeholder="Enter Password"
                        />
                    </label>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-pink-200'>*</sup></p>
                        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' name="confirmpassword" type="password" onChange={changehandler}
                            value={formData.confirmpassword} required placeholder="Confirm Password"
                        />
                    </label>
                </div>
                <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-4'>
                    Create Account
                </button>
            </form>

        </div>
    )
}

export default SignupForm;