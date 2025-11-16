import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PatientDashboard from "../pages/PatientDashboard";
import DonorDashboard from "../pages/DonorDashboard";
import AdminDashboard from "../pages/AdminDashboard";
const AppRouter=()=>{

  return ( <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path='/register' element={<Register/>}/>
            <Route path='/patientDashboard' element={<PatientDashboard/>}/>
            <Route path='/donorDashboard' element={<DonorDashboard/>}/>
            <Route path='/adminDashboard' element={<AdminDashboard/>}/>
        </Routes>
    </Router>)
}
export default AppRouter;