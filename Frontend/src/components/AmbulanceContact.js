import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import HospitalServiceApi from "../service/HospitalServiceApi.js";

export default class AmbulanceContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hospitalname: "",
      address: "",
      ambulancecontact: "",
      message: null,
    };

    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
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
          address: hospital.address,
          ambulancecontact: hospital.ambulancecontact,
          message: "Hospitals list rendered successfully",
        });
      }
    );
  };

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

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  backtodash() {
    window.location = "/userdashboard";
  }
  render() {
    return (
      <>
        <div className="container my-4">
          <button
            className="btn btn-secondary my-2 offset-10"
            onClick={this.backtodash}
            style={{ minWidth: "13vw" }}
          >
            Back To Dashboard
          </button>
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
          <h3>Ambulance Contact Details</h3>
          <form className="mb-5">
            <table className="table table-bordered">
              <thead className="bg-primary text-light">
                <tr>
                  <th>Hospital Name</th>
                  <th>Address</th>
                  <th>AmbulanceContact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.hospitalname}</td>
                  <td>{this.state.address}</td>
                  <td>{this.state.ambulancecontact}</td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </>
    );
  }
}
