import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import HospitalServiceApi from "../service/HospitalServiceApi.js";

var i;
class AddBlood extends Component {
  constructor(props) {
    super(props);
    this.i = 0;
    this.state = {
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

    this.saveBlood = this.saveBlood.bind(this);
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

  saveBlood = (e) => {
    if (
      this.state.a_pos === "" ||
      this.state.a_neg === "" ||
      this.state.b_pos === "" ||
      this.state.b_neg === "" ||
      this.state.ab_pos === "" ||
      this.state.ab_neg === "" ||
      this.state.o_pos === "" ||
      this.state.o_neg === ""
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
      a_pos: this.state.a_pos,
      a_neg: this.state.a_neg,
      b_pos: this.state.b_pos,
      b_neg: this.state.b_neg,
      ab_pos: this.state.ab_pos,
      ab_neg: this.state.ab_neg,
      o_pos: this.state.o_pos,
      o_neg: this.state.o_neg,
    };

    HospitalServiceApi.addBlood(i, hospital).then((res) => {
      this.setState({ message: "Blood details updated successfully." });
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
        <div className="container my-1">
          <Button
            className="btn btn-secondary my-2 offset-10"
            onClick={this.backtodash}
            style={{ minWidth: "12vw" }}
          >
            Back To Dashboard
          </Button>
          <h3>Add Blood</h3>
          <form className="pb-5 overflow-hidden">
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="a_pos" className="col-2 col-form-label">
                A_pos
              </label>
              <div className="col-5">
                <input
                  type="number"
                  id="a_pos"
                  className="form-control"
                  placeholder="A_pos"
                  name="a_pos"
                  value={this.state.a_pos}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="a_neg" className="col-2 col-form-label">
                A_Neg
              </label>
              <div className="col-5">
                <input
                  type="number"
                  id="a_neg"
                  className="form-control"
                  placeholder="A_Neg"
                  name="a_neg"
                  value={this.state.a_neg}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="b_pos" className="col-2 col-form-label">
                B_pos
              </label>
              <div className="col-5">
                <input
                  type="number"
                  id="b_pos"
                  className="form-control"
                  placeholder="B_pos"
                  name="b_pos"
                  value={this.state.b_pos}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="b_neg" className="col-2 col-form-label">
                B_Neg
              </label>
              <div className="col-5">
                <input
                  type="number"
                  id="b_neg"
                  className="form-control"
                  placeholder="B_Neg"
                  name="b_neg"
                  value={this.state.b_neg}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="ab_pos" className="col-2 col-form-label">
                AB_pos
              </label>
              <div className="col-5">
                <input
                  type="number"
                  id="ab_pos"
                  className="form-control"
                  placeholder="AB_pos"
                  name="ab_pos"
                  value={this.state.ab_pos}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="ab_neg" className="col-2 col-form-label">
                AB_Neg
              </label>
              <div className="col-5">
                <input
                  type="number"
                  id="ab_neg"
                  className="form-control"
                  placeholder="AB_Neg"
                  name="ab_neg"
                  value={this.state.ab_neg}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="o_pos" className="col-2 col-form-label">
                O_pos
              </label>
              <div className="col-5">
                <input
                  type="number"
                  id="o_pos"
                  className="form-control"
                  placeholder="O_pos"
                  name="o_pos"
                  value={this.state.o_pos}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="o_neg" className="col-2 col-form-label">
                O_Neg
              </label>
              <div className="col-5">
                <input
                  type="number"
                  id="o_neg"
                  className="form-control"
                  placeholder="O_Neg"
                  name="o_neg"
                  value={this.state.o_neg}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row justify-content-center">
              <div className="offset-9">
                <Button
                  className="btn btn-primary text-uppercase mt-3"
                  onClick={this.saveBlood}
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

export default AddBlood;
