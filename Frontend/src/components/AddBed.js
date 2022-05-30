import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import HospitalServiceApi from "../service/HospitalServiceApi.js";

var i;
class AddBed extends Component {
  constructor(props) {
    super(props);
    this.i = 0;
    this.state = {
      ventilator: "",
      oxygen: "",
      normal: "",
      message: null,
    };

    this.saveBed = this.saveBed.bind(this);
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

  saveBed = (e) => {
    if (
      this.state.ventilator === "" ||
      this.state.oxygen === "" ||
      this.state.normal === ""
    ) {
      Swal.fire({
        title: "All Fields are Mandatory",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }

    e.preventDefault();
    let hospital = {
      ventilator: this.state.ventilator,
      oxygen: this.state.oxygen,
      normal: this.state.normal,
    };
    console.log(i);

    console.log(hospital);
    console.log(typeof hospital.ventilator);
    console.log(typeof hospital.oxygen);
    console.log(typeof hospital.normal);

    HospitalServiceApi.addBed(i, hospital).then((res) => {
      this.setState({ message: "Bed details updated successfully." });
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
            style={{ minWidth: "12vw" }}
          >
            Back To Dashboard
          </Button>
          <h3>Add Bed</h3>
          <form className="mb-5">
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="ventilator" className="col-2 col-form-label">
                Ventilator
              </label>
              <div className="col-5">
                <input
                  type="number"
                  id="ventilator"
                  className="form-control"
                  placeholder="Ventilator"
                  name="ventilator"
                  value={this.state.ventilator}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="oxygen" className="col-2 col-form-label">
                Oxygen
              </label>
              <div className="col-5">
                <input
                  type="number"
                  id="oxygen"
                  className="form-control"
                  placeholder="Oxygen"
                  name="oxygen"
                  value={this.state.oxygen}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="normal" className="col-2 col-form-label">
                Normal
              </label>
              <div className="col-5">
                <input
                  type="number"
                  id="normal"
                  className="form-control"
                  placeholder="Normal"
                  name="normal"
                  value={this.state.normal}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row justify-content-center">
              <div className="offset-9">
                <Button
                  className="btn btn-primary text-uppercase mt-3"
                  onClick={this.saveBed}
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

export default AddBed;
