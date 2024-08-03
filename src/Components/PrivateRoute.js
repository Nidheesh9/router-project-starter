import { Navigate } from "react-router-dom";


function PrivateRoute({isloggedIn,children}){
    if(isloggedIn){
        return children;
    }
    else{
        return <Navigate to="/login"/>
    }
}

export default PrivateRoute;