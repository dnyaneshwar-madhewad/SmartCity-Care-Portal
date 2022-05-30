import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import HospitalServiceApi from "../service/HospitalServiceApi.js";

export default class Bloodavailability extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hospitalname: "",
      a_pos: "",
      a_neg: "",
      b_pos: "",
      b_neg: "",
      ab_pos: "",
      ab_neg: "",
      o_pos: "",
      o_neg: "",
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
          a_pos: hospital.a_pos,
          a_neg: hospital.a_neg,
          b_pos: hospital.b_pos,
          b_neg: hospital.b_neg,
          ab_pos: hospital.ab_pos,
          ab_neg: hospital.ab_neg,
          o_pos: hospital.o_pos,
          o_neg: hospital.o_neg,
          message: "Hospitals list rendered successfully",
        });
        console.log(response.data);
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
          <Button
            className="btn btn-secondary my-2 offset-10"
            onClick={this.backtodash}
            style={{ minWidth: "13vw" }}
          >
            Back To Dashboard
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

          <div>
            <h3>Available Blood List</h3>
            <table className="table table-bordered">
              <thead className="bg-primary text-light">
                <tr>
                  <th>Hospital Name</th>
                  <th>A_pos</th>
                  <th>A_Neg</th>
                  <th>B_pos</th>
                  <th>B_Neg</th>
                  <th>AB_pos</th>
                  <th>AB_Neg</th>
                  <th>O_pos</th>
                  <th>O_Neg</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.hospitalname}</td>
                  <td>{this.state.a_pos}</td>
                  <td>{this.state.a_neg}</td>
                  <td>{this.state.b_pos}</td>
                  <td>{this.state.b_neg}</td>
                  <td>{this.state.ab_pos}</td>
                  <td>{this.state.ab_neg}</td>
                  <td>{this.state.o_pos}</td>
                  <td>{this.state.o_neg}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
