import frameImage from "../assets/frame.png"
import SignupForm from "./SignupForm"
import LoginForm from "./LoginForm"
import {FcGoogle} from 'react-icons/fc'

function Template({desc1,desc2,title,image,setIsloggedIn,formtype}){
    return (
        <div className="flex w-11/12 justify-between max-w-[1160px] py-5 mx-auto gap-x-12 gap-y-0">

            <div className='w-11/12 max-w-[450px]'>

                <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
                <p className="text-[1.125rem] leading-[1.625rem] mt-2">
                    <span className="text-richblack-100">{desc1}</span><br/>
                    <span className="text-blue-100 italic">{desc2}</span>
                </p>

                {formtype==="signup"?
                
                (<SignupForm setIsloggedIn={setIsloggedIn}/>):(<LoginForm setIsloggedIn={setIsloggedIn}/>)

                }

                <div className="flex w-full items-center gap-x-2 my-2">
                    <div className="h-[1px] bg-richblack-700 w-[47%]"></div>
                    <span className="text-richblack-700 font-medium" >OR</span>
                    <div className="h-[1px] bg-richblack-700 w-[47%]" ></div>
                </div>

                <button className="w-full flex justify-center items-center rounded-[8px] 
                    font-medium text-richblack-100 border border-richblack-700 
                    px-[12px] py-[8px] gap-x-2">
                    <FcGoogle/>
                    <p>Sign Up with Google</p> 
                </button>

            </div>

            <div className="relative w-11/12 max-w-[450px]">
                <img src={frameImage} alt="error" loading="lazy" width={558} height={504}/>
                <img src={image} alt="error" loading="lazy" width={558} height={498} className='absolute -top-4 right-4'/>
            </div>


        </div>
    )
}

export default Template;