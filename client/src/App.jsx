import Login from "./site/login.jsx";
import {Route, Routes, useLocation, useNavigate, useParams, useRoutes} from "react-router-dom";
import Index from "./layout/index.jsx";
import {useCookies} from "react-cookie";
import {useEffect} from "react";

function App() {

    const [cookie, setCookie, removeCookie] = useCookies('auth-login-token');

    const token = cookie["auth-login-token"];

    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!token){
    //         navigate('/site/login')
    //     }
    // }, [token]);

    return (
        <Routes>
            <Route path="/site/login" element={<Login/>}/>
            <Route path="/*" element={<Index/>}/>
        </Routes>
    );
}

export default App
