import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Login from "./components/Login";
import Contactus from "./components/Contactus";
import HospitalDashboard from "./components/HospitalDashboard";
import Usersignup from "./components/Usersignup";
import AdminDashboard from "./components/AdminDashboard";
import AddHospital from "./components/AddHospital";
import Hospitallist from "./components/Hospitallist";
import Userlist from "./components/Userlist";
import AddBed from "./components/AddBed";
import AddBlood from "./components/AddBlood";
import AddOxygen from "./components/AddOxygen";
import AddDoctorinfo from "./components/AddDoctotinfo";
import UserDashBoard from "./components/UserDashBoard";
import Userbedbook from "./components/Userbedbook";
import Bedavailability from "./components/Bedavailability";
import Bloodavailability from "./components/Bloodavailability";
import Oxygenavailability from "./components/Oxygenavailability";
import Bookingstatus from "./components/Bookingstatus";
import DoctorInfo from "./components/DoctorInfo";
import AmbulanceContact from "./components/AmbulanceContact";

import BedList from "./components/BedList";
import BloodList from "./components/BloodList";
import OxygenList from "./components/OxygenList";
import DoctorInfoList from "./components/DoctorInfoList";
import ApproveRejectRequest from "./components/ApproveRejectRequest";
import ViewRequest from "./components/ViewRequest";
import React from 'react'
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contactus" element={<Contactus />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/usersignup" element={<Usersignup />}></Route>
        <Route
          exact
          path="/admindashboard"
          element={<AdminDashboard />}
        ></Route>
        <Route exact path="/addhospital" element={<AddHospital />}></Route>
        <Route exact path="/viewhospital" element={<Hospitallist />}></Route>
        <Route exact path="/viewuser" element={<Userlist />}></Route>
        <Route
          exact
          path="/hospitaldashboard"
          element={<HospitalDashboard />}
        ></Route>
        <Route exact path="/addbed" element={<AddBed />}></Route>
        <Route exact path="/addblood" element={<AddBlood />}></Route>
        <Route exact path="/addoxygen" element={<AddOxygen />}></Route>
        <Route exact path="/adddoctorinfo" element={<AddDoctorinfo />}></Route>
        <Route exact path="/bedlist" element={<BedList />}></Route>
        <Route exact path="/bloodlist" element={<BloodList />}></Route>
        <Route exact path="/oxygenlist" element={<OxygenList />}></Route>
        <Route
          exact
          path="/doctorinfolist"
          element={<DoctorInfoList />}
        ></Route>
        <Route
          exact
          path="/approverejectrequest"
          element={<ApproveRejectRequest />}
        ></Route>
        <Route exact path="/viewrequest" element={<ViewRequest />}></Route>

        <Route exact path="/userdashboard" element={<UserDashBoard />}></Route>
        <Route exact path="/userbedbook" element={<Userbedbook />}></Route>
        <Route
          exact
          path="/bedavailability"
          element={<Bedavailability />}
        ></Route>
        <Route
          exact
          path="/bloodavailability"
          element={<Bloodavailability />}
        ></Route>
        <Route
          exact
          path="/oxygenavailability"
          element={<Oxygenavailability />}
        ></Route>
        <Route exact path="/bookingstatus" element={<Bookingstatus />}></Route>
        <Route
          exact
          path="/ambulancecontact"
          element={<AmbulanceContact />}
        ></Route>
        <Route exact path="/doctorinfo" element={<DoctorInfo />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
export default App;
