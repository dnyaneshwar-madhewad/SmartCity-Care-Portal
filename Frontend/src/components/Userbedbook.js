import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import RequestServiceApi from "../service/RequestServiceApi.js";
var i = 0;
var j = 0;
export default class Userbedbook extends Component {
  constructor(props) {
    super(props);
    this.i = 0;

    this.state = {
      bedtype: "",
      symptoms: "",
      timetoarrive: "",
      status: "",
      message: null,
    };
    this.saveRequest = this.saveRequest.bind(this);
    this.loadUser = this.loadUser.bind(this);
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser() {
    let user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user.id);
    i = user.id;
    let id = JSON.parse(sessionStorage.getItem("id"));
    console.log("hospid" + id);
    console.log(typeof id);
    j = id;
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  saveRequest = (e) => {
    if (
      this.state.bedtype === "" ||
      this.state.symptoms === "" ||
      this.state.timetoarrive === ""
    ) {
      Swal.fire({
        title: "All Fields are Mandatory",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    e.preventDefault();
    let request = {
      bedtype: this.state.bedtype,
      symptoms: this.state.symptoms,
      timetoarrive: this.state.timetoarrive,
      status: "pending",
    };
    console.log("userid " + i);
    console.log("hospid=" + j);

    console.log(request);

    RequestServiceApi.addRequest(i, j, request).then((res) => {
      this.setState({ message: "Request send successfully." });
      console.log(this.state.message);
      Swal.fire({
        title: this.state.message,
        icon: "success",
        confirmButtonText: "Ok",
      });
      window.location = "/userdashboard";
    });
  };
  goback() {
    window.location = "/bedavailability";
  }
  render() {
    return (
      <div className="container ">
        <div className="row my-3">
          <div className="col-sm-6"></div>

          <div className="col-sm-6">
            <Button
              onClick={this.goback}
              className="btn btn-link btn-primary text-light offset-10 text-uppercase text-decoration-none "
            >
              Back
            </Button>
          </div>
        </div>
        <div>
          <h3>Bed Booking</h3>
          <h5>Please, fill all required details given below.</h5>
        </div>

        <form className="mb-5">
          <div className="form-group row my-3 justify-content-center">
            <label for="bedtype" className="col-2 col-form-label">
              BedType
            </label>
            <div className="col-5">
              <select
                id="bedtype"
                className="form-select"
                name="bedtype"
                value={this.state.bedtype}
                onChange={this.onChange}
                required
              >
                <option value="">Select the Bedtype</option>
                <option value="ventilator">Ventilator</option>
                <option value="oxygen">Oxygen</option>
                <option value="normal">Normal</option>
              </select>
            </div>
          </div>
          <div className="form-group row my-3 justify-content-center">
            <label htmlFor="symptoms" className="col-2 col-form-label">
              Symtomps
            </label>
            <div className="col-5">
              <input
                type="text"
                id="symptoms"
                className="form-control"
                placeholder="Symptoms"
                name="symptoms"
                value={this.state.symptoms}
                onChange={this.onChange}
                required
              />
            </div>
          </div>
          <div className="form-group row my-3 justify-content-center">
            <label htmlFor="timetoarrive" className="col-2 col-form-label">
              Timetoarrive
            </label>
            <div className="col-5">
              <input
                type="number"
                id="timetoarrive"
                className="form-control"
                placeholder="Timetoarrive"
                name="timetoarrive"
                value={this.state.timetoarrive}
                onChange={this.onChange}
                required
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <div className="offset-9">
              <button
                className="btn btn-primary text-uppercase mt-3"
                onClick={this.saveRequest}
              >
                BOOK
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
