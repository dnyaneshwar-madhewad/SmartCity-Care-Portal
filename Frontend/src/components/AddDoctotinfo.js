import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import HospitalServiceApi from "../service/HospitalServiceApi.js";

var i;
class AddDoctorinfo extends Component {
  constructor(props) {
    super(props);
    this.i = 0;
    this.state = {
      name: "",
      email: "",
      qualification: "",
      specialization: "",
      message: null,
    };

    this.saveDoctorinfo = this.saveDoctorinfo.bind(this);
    this.loadhospital = this.loadhospital.bind(this);
  }

  componentDidMount() {
    this.loadhospital();
  }

  loadhospital() {
    let hosp = JSON.parse(sessionStorage.getItem("hospital"));
    console.log(hosp.id);
    i = hosp.id;
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  saveDoctorinfo = (e) => {
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.qualification === "" ||
      this.state.specialization === ""
    ) {
      Swal.fire({
        title: "All Fields are Mandatory",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    e.preventDefault();
    let doctor = {
      name: this.state.name,
      email: this.state.email,
      qualification: this.state.qualification,
      specialization: this.state.specialization,
    };

    HospitalServiceApi.addDoctorinfo(i, doctor).then((res) => {
      this.setState({ message: "Doctor details added successfully." });
      console.log(this.state.message);
      Swal.fire({
        title: this.state.message,
        icon: "success",
        confirmButtonText: "Ok",
      });
      window.location = "/hospitaldashboard";
    });
  };

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
    document.getElementById("emailVr").innerHTML = "";
  }

  backtodash() {
    window.location = "/hospitaldashboard";
  }

  render() {
    return (
      <>
        <div className="container my-1">
          <Button
            className="btn btn-secondary my-2 offset-10"
            onClick={this.backtodash}
            style={{ minWidth: "11vw" }}
          >
            Back To Dashboard
          </Button>
          <h3>Add DoctorInfo</h3>
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
                  placeholder="Name"
                  name="name"
                  value={this.state.oxygenavailable}
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
                  placeholder="Email"
                  name="email"
                  value={this.state.oxygenavailable}
                  onChange={this.onChange}
                  onFocus={this.removeWarnings}
                  onBlur={this.validateEmail}
                  required
                />
                <span style={{ color: "red" }} id="emailVr"></span>
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="qualification" className="col-2 col-form-label">
                Qualification
              </label>
              <div className="col-5">
                <input
                  type="text"
                  id="qualification"
                  className="form-control"
                  placeholder="Qualification"
                  name="qualification"
                  value={this.state.qualification}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="specialization" className="col-2 col-form-label">
                Specilization
              </label>
              <div className="col-5">
                <input
                  type="text"
                  id="specialization"
                  className="form-control"
                  placeholder="specialization"
                  name="specialization"
                  value={this.state.specialization}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row justify-content-center">
              <div className="offset-9">
                <Button
                  className="btn btn-primary text-uppercase mt-3"
                  onClick={this.saveDoctorinfo}
                >
                  ADD
                </Button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default AddDoctorinfo;
