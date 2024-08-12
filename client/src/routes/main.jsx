import  IndexDepartment from "./department/index.jsx";
import  IndexUser from "./user/index.jsx";
import {Route, Routes} from "react-router-dom";

function Main(){

    return (
        <>
            <Routes>
                <Route path="department" element={ <IndexDepartment />}/>
                <Route path="user" element={ <IndexUser />}/>
            </Routes>
        </>
    )
}

export default Main;
