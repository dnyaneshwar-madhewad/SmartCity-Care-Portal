import React, { Component } from "react";
import HospitalServiceApi from "../service/HospitalServiceApi.js";

class BloodList extends Component {
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

    this.reloadHospitalList = this.reloadHospitalList.bind(this);
  }

  componentDidMount() {
    this.reloadHospitalList();
  }

  reloadHospitalList() {
    let hosp = JSON.parse(sessionStorage.getItem("hospital"));
    console.log(hosp.id);
    HospitalServiceApi.getHospitalById(hosp.id).then((resp) => {
      let hospital = resp.data;
      this.setState({
        hospitalname: hospital.hospitalname,
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
      console.log(resp.data);
      console.log(this.state.message);
    });
  }

  backtodash() {
    window.location = "/hospitaldashboard";
  }

  render() {
    return (
      <>
        <div className="container my-4">
          <button
            className="btn btn-secondary my-2 offset-10"
            onClick={this.backtodash}
            style={{ minWidth: "11vw" }}
          >
            Back To Dashboard
          </button>
          <h3>Blood List</h3>
          <form className="mb-5">
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
          </form>
        </div>
      </>
    );
  }
}

export default BloodList;
