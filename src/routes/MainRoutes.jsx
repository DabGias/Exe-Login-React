import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Login from "../components/Login"

function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    )
}

export default MainRoutes