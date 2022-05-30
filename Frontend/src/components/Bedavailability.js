import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import HospitalServiceApi from "../service/HospitalServiceApi.js";
var id = 0;
export default class Bedavailability extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hospid: "",
      hospitalname: "",
      ventilator: "",
      oxygen: "",
      normal: "",
      message: null,
    };

    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
    this.gotobedbook = this.gotobedbook.bind(this);
  }

  search = (e) => {
    if (this.state.hospitalname === "") {
      Swal.fire({
        title: "Warning",
        text: "Please Enter the Hospital Name",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    e.preventDefault();

    HospitalServiceApi.getByHospname(this.state.hospitalname).then(
      (response) => {
        console.log(this.state.hospitalname);
        let hospital = response.data;
        this.setState({
          hospid: hospital.hospid,
          ventilator: hospital.ventilator,
          oxygen: hospital.oxygen,
          normal: hospital.normal,
          message: "Hospitals list rendered successfully",
        });
        id = hospital.hospid;
        sessionStorage.setItem("id", hospital.hospid);
        console.log(this.state.hospid);
      }
    );
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  validateinput() {
    let hospname = document.getElementById("hospitalname").value;
    if (hospname === "") {
      document.getElementById("searchVl").innerHTML =
        "Please Enter Hospital Name";
      return true;
    }
  }
  removeWarnings() {
    document.getElementById("searchVl").innerHTML = "";
  }

  backtodash() {
    window.location = "/userdashboard";
  }
  gotobedbook() {
    if (this.state.ventilator === "") {
      Swal.fire({
        title: "Warning",
        text: "Please Enter the Hospital Name",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    window.location = "/userbedbook";
  }

  render() {
    return (
      <>
        <div className="container my-4">
          <Button
            className="btn btn-secondary my-2 offset-10"
            onClick={this.backtodash}
            style={{ minWidth: "12vw" }}
          >
            Back To Dasboard
          </Button>

          <form>
            <div className="form-group row mt-3 justify-content-center">
              <label
                htmlFor="hospitalname"
                className="col-2 col-form-label"
                style={{ fontWeight: "bold" }}
              >
                Hospital Name
              </label>
              <div className="col-5">
                <input
                  type="text"
                  id="hospitalname"
                  className="form-control"
                  placeholder="Hospital name"
                  name="hospitalname"
                  value={this.state.hospitalname}
                  onChange={this.onChange}
                  onBlur={this.validateinput}
                  onFocus={this.removeWarnings}
                  required
                />
                <span style={{ color: "red" }} id="searchVl"></span>
              </div>
            </div>
            <Button
              className="btn btn-primary mt-3 offset-6"
              onClick={this.search}
            >
              Search
            </Button>
          </form>

          <h3>Available Bed Quantity</h3>

          <table className="table table-bordered">
            <thead className="bg-primary text-light">
              <tr>
                <th>Hospital Name</th>
                <th>Ventilator</th>
                <th>Oxygen</th>
                <th>Normal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.hospitalname}</td>
                <td>{this.state.ventilator}</td>
                <td>{this.state.oxygen}</td>
                <td>{this.state.normal}</td>
                <td>
                  <Button
                    className="btn btn-primary text-light"
                    onClick={this.gotobedbook}
                  >
                    Book
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
