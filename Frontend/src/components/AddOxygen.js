import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import HospitalServiceApi from "../service/HospitalServiceApi.js";

var i;
class AddOxygen extends Component {
  constructor(props) {
    super(props);
    this.i = 0;
    this.state = {
      oxygenavailable: "",
      message: null,
    };

    this.saveOxygen = this.saveOxygen.bind(this);
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

  saveOxygen = (e) => {
    if (this.state.oxygenavailable === "") {
      Swal.fire({
        title: "All Fields are Mandatory",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    e.preventDefault();
    let hospital = {
      oxygenavailable: this.state.oxygenavailable,
    };
    console.log(i);

    console.log(hospital);

    HospitalServiceApi.addOxygen(i, hospital).then((res) => {
      this.setState({ message: "Oxygen details updated successfully." });
      console.log(this.state.message);
      Swal.fire({
        title: this.state.message,
        icon: "success",
        confirmButtonText: "Ok",
      });
      window.location = "/hospitaldashboard";
    });
  };

  backtodash() {
    window.location = "/hospitaldashboard";
  }
  render() {
    return (
      <>
        <div className="container my-4">
          <Button
            className="btn btn-secondary my-2 offset-10"
            onClick={this.backtodash}
            style={{ minWidth: "10vw" }}
          >
            Back To Dashboard
          </Button>
          <h3>Add Oxygen</h3>
          <form className="mb-5">
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="oxygenavailable" className="col-2 col-form-label">
                OxygenAvailable
              </label>
              <div className="col-5">
                <input
                  type="number"
                  id="oxygenavailable"
                  className="form-control"
                  placeholder="OxygenAvailable"
                  name="oxygenavailable"
                  value={this.state.oxygenavailable}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row justify-content-center">
              <div className="offset-9">
                <Button
                  className="btn btn-primary text-uppercase mt-3"
                  onClick={this.saveOxygen}
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

export default AddOxygen;
