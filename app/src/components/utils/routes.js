
import { Routes,Route } from "react-router-dom"
import SignUp from "../Authentication/sign-up"
import LoginForm from '../Authentication/Login';

const RoutesComp=()=>{
    return (
        <div>
            <Routes>
                <Route path="/signUp" element={<SignUp/>} />
                <Route path="/login" element={<LoginForm/>}/>
            </Routes>


        </div>
    )
    
}
export default RoutesComp;
