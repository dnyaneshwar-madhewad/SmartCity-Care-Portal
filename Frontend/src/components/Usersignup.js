import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import UserServiceApi from "../service/UserServiceApi";

class Usersignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      contact: "",
      address: "",
      gender: "",
      age: "",
      message: null,
    };
    this.signUp = this.signUp.bind(this);
  }

  validatePassword() {
    let password = document.getElementById("pwd").value;
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
        "email format should be 'abc@gmail.com'";
    }
  }
  removeWarnings() {
    document.getElementById("passwordVr").innerHTML = "";
    document.getElementById("emailVr").innerHTML = "";
    document.getElementById("contactVr").innerHTML = "";
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

  signUp = (p) => {
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.contact === "" ||
      this.state.address === "" ||
      this.state.gender === "" ||
      this.state.age === ""
    ) {
      Swal.fire({
        title: "All Fields are Mandatory",

        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    p.preventDefault();
    let user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      contact: this.state.contact,
      address: this.state.address,
      gender: this.state.gender,
      age: this.state.age,
    };
    UserServiceApi.addUser(user)
      .then((res) => {
        console.log(res.data);
        this.setState({ message: "User added successfully." });
        console.log(this.state.message);
        Swal.fire({
          title: this.state.message,
          icon: "success",
          confirmButtonText: "Ok",
        });
        window.location = "/";
      })
      .catch((error) => {
        console.error("in err ", error.response.data);
        Swal.fire({
          title: this.state.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  onChange = (p) => this.setState({ [p.target.name]: p.target.value });

  render() {
    return (
      <>
        <div className="container-fluid signup row justify-content-center">
          <div
            className="col-sm-8 overflow-hidden border border-primary rounded"
            style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
          >
            <div className="row py-3">
              <div className="col-sm-8">
                <h2 className="text-dark offset-7">User Registration</h2>
              </div>
              <div className="col-sm-3">
                <Button
                  className="btn btn-dark text-uppercase offset-8"
                  href="/"
                >
                  Back
                </Button>
              </div>
            </div>
            <form className="mb-5">
              <div className="form-group row my-3 justify-content-center">
                <label htmlFor="name" className="col-2 col-form-label">
                  Name
                </label>
                <div className="col-5">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    required
                  />
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
                    placeholder="e.g. abc@xyz.com"
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
                <label htmlFor="pwd" className="col-2 col-form-label">
                  Password
                </label>
                <div className="col-5">
                  <input
                    type="password"
                    id="pwd"
                    className="form-control"
                    placeholder="Enter Password"
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
                <label className="col-2 col-form-label">Gender</label>
                <div className="col-5 d-flex justify-content-between">
                  <div>
                    <input
                      type="radio"
                      id="gender"
                      name="gender"
                      value="MALE"
                      onChange={this.onChange}
                    />
                    Male
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="gender"
                      name="gender"
                      value="FEMALE"
                      onChange={this.onChange}
                    />
                    Female
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="gender"
                      name="gender"
                      value="OTHER"
                      onChange={this.onChange}
                    />
                    Other
                  </div>
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
                    placeholder="Enter your contact details"
                    name="contact"
                    value={this.state.contact}
                    onChange={this.onChange}
                    pattern="[0-9]{10}"
                    onBlur={this.validateMobileNumber}
                    onFocus={this.removeWarnings}
                    required
                  />
                  <span id="contactVr" style={{ color: "red" }}></span>
                </div>
              </div>

              <div className="form-group row mt-3 justify-content-center">
                <label htmlFor="age" className="col-2 col-form-label">
                  Age
                </label>
                <div className="col-5">
                  <input
                    type="number"
                    id="age"
                    className="form-control"
                    placeholder="Enter Age"
                    name="age"
                    value={this.state.age}
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group row mt-3 justify-content-center">
                <label htmlFor="address" className="col-2 col-form-label">
                  Address
                </label>
                <div className="col-5">
                  <input
                    type="text"
                    id="address"
                    className="form-control"
                    placeholder="Enter Address "
                    name="address"
                    value={this.state.address}
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group row justify-content-center">
                <div className="offset-9">
                  <Button
                    className="btn btn-lg btn-primary text-uppercase mt-3"
                    onClick={this.signUp}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Usersignup;
