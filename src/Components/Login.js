import Template from "./Template";
import loginImg from "../assets/login.png"



function Login(props){
    return (
        <div>
            <Template
                title="Welcome Back"
                desc1="Build skills for today, tomorrow, and beyond."
                desc2="Education to future-proof your career."
                formtype="login"
                setIsloggedIn={props.setIsloggedIn}
                image={loginImg}
            />
        </div>
    )
};

export default Login;