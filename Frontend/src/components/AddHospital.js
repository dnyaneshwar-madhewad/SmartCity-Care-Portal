import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import AdminServiceApi from "../service/AdminServiceApi.js";

class AddHospital extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hospitalname: "",
      email: "",
      password: "",
      contact: "",
      address: "",
      ambulancecontact: "",
      message: null,
    };
    this.addHospital = this.addHospital.bind(this);
  }

  validatehospitalname() {
    let hospname = document.getElementById("hospitalname").value;
    if (hospname === "") {
      document.getElementById("nameVr").innerHTML =
        "Please Enter Hospital Name";
      return true;
    }
  }

  validateAddress() {
    let hospname = document.getElementById("hospitalname").value;
    if (hospname === "") {
      document.getElementById("addressVr").innerHTML =
        "Please Enter the Address";
      return true;
    }
  }

  validatePassword() {
    let password = document.getElementById("password").value;
    var regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{5,}$/;

    if (regexPassword.test(password) === true) {
      document.getElementById("passwordVr").innerHTML = "";
      return true;
    } else {
      document.getElementById("passwordVr").innerHTML =
        "password must be alphanumeric and should contains at least a special character with length 5";
    }
  }

  validateEmail() {
    let email = document.getElementById("email").value;

    var regexEmail = /\S+@\S+\.\S+/;
    if (regexEmail.test(email) === true) {
      document.getElementById("emailVr").innerHTML = "";
      return true;
    } else {
      document.getElementById("emailVr").innerHTML =
        "Format should be 'abc@gmail.com'";
    }
  }
  removeWarnings() {
    document.getElementById("passwordVr").innerHTML = "";
    document.getElementById("emailVr").innerHTML = "";
    document.getElementById("contactVr").innerHTML = "";
    document.getElementById("nameVr").innerHTML = "";
    document.getElementById("addressVr").innerHTML = "";
  }

  validateMobileNumber() {
    let number = document.getElementById("mobileNumber").value;
    if (/^\d{10}$/.test(number)) {
      document.getElementById("mobileNumberVr").innerHTML = "";
    } else {
      document.getElementById("mobileNumberVr").innerHTML =
        "Phone number must be 10 digits.";

      return false;
    }
  }

  addHospital = (h) => {
    if (
      this.state.hospitalname === "" ||
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.contact === "" ||
      this.state.address === "" ||
      this.state.ambulancecontact === ""
    ) {
      Swal.fire({
        title: "All Fields are Mandatory",

        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    h.preventDefault();
    let hospital = {
      hospitalname: this.state.hospitalname,
      email: this.state.email,
      password: this.state.password,
      contact: this.state.contact,
      address: this.state.address,
      ambulancecontact: this.state.ambulancecontact,
    };
    AdminServiceApi.addHospital(hospital)
      .then((res) => {
        console.log(res.data);
        this.setState({ message: "Hospital added successfully." });
        console.log(this.state.message);
        Swal.fire({
          title: this.state.message,
          icon: "success",
          confirmButtonText: "Ok",
        });
        window.location = "/admindashboard";
      })
      .catch((error) => {
        console.error("in err ", error.response.data);
        alert(error.response.data.message);
      });
  };

  onChange = (h) => this.setState({ [h.target.name]: h.target.value });

  backtodash() {
    window.location = "/admindashboard";
  }

  render() {
    return (
      <>
        <div className="container my-4">
          <Button
            className="btn btn-secondary my-2 offset-11"
            onClick={this.backtodash}
            style={{ minWidth: "13vw" }}
          >
            Back To Dashboard
          </Button>
          <h3>Hospital Registration</h3>
          <form className="mb-5">
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="hospitalname" className="col-2 col-form-label">
                HospitalName
              </label>
              <div className="col-5">
                <input
                  type="text"
                  id="hospitalname"
                  className="form-control"
                  placeholder="HospitalName"
                  name="hospitalname"
                  value={this.state.hospitalname}
                  onChange={this.onChange}
                  onBlur={this.validatehospitalname}
                  onFocus={this.removeWarnings}
                  required
                />
                <span style={{ color: "red" }} id="nameVr"></span>
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="email" className="col-2 col-form-label">
                Email
              </label>
              <div className="col-5">
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="e.g. abc@gmail.com"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  required
                  onFocus={this.removeWarnings}
                  onBlur={this.validateEmail}
                />
                <span style={{ color: "red" }} id="emailVr"></span>
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="password" className="col-2 col-form-label">
                Password
              </label>
              <div className="col-5">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  onBlur={this.validatePassword}
                  onFocus={this.removeWarnings}
                  required
                />
                <span style={{ color: "red" }} id="passwordVr"></span>
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="address" className="col-2 col-form-label">
                Address
              </label>
              <div className="col-5">
                <input
                  type="text"
                  id="address"
                  className="form-control"
                  placeholder="Address"
                  name="address"
                  value={this.state.address}
                  onChange={this.onChange}
                  onBlur={this.validateAddress}
                  onFocus={this.removeWarnings}
                  required
                />
                <span style={{ color: "red" }} id="addressVr"></span>
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="contact" className="col-2 col-form-label">
                Contact
              </label>
              <div className="col-5">
                <input
                  type="text"
                  id="contact"
                  className="form-control"
                  placeholder="Contact"
                  name="contact"
                  value={this.state.contact}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label
                htmlFor="ambulancecontact"
                className="col-2 col-form-label"
              >
                AmbulanceContact
              </label>
              <div className="col-5">
                <input
                  type="text"
                  id="ambulancecontact"
                  className="form-control"
                  placeholder="AmbulanceContact"
                  name="ambulancecontact"
                  value={this.state.ambulancecontact}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row justify-content-center">
              <div className="offset-9">
                <Button
                  className="btn btn-primary text-uppercase mt-3"
                  onClick={this.addHospital}
                >
                  Register
                </Button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default AddHospital;
