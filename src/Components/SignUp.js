import Template from "./Template";
import signupImg from "../assets/signup.png"

function SignUp({setIsloggedIn}){
    return (
        <div>
            <Template
                title="Join the millions learning to code with StudyNotion for free"
                desc1="Build skills for today, tomorrow, and beyond."
                desc2="Education to future-proof your career."
                formtype="signup"
                setIsloggedIn={setIsloggedIn}
                image={signupImg}
            />
        </div>
    )
};

export default SignUp;