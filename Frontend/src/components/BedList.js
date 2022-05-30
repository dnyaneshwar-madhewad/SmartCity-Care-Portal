import React, { Component } from "react";
import HospitalServiceApi from "../service/HospitalServiceApi.js";

class BedList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hospitalname: "",
      ventilator: "",
      oxygen: "",
      normal: "",
      message: null,
    };

    this.reloadHospitalList = this.reloadHospitalList.bind(this);
  }

  componentDidMount() {
    this.reloadHospitalList();
  }

  reloadHospitalList() {
    let hosp = JSON.parse(sessionStorage.getItem("hospital"));
    console.log(hosp);
    HospitalServiceApi.getHospitalById(hosp.id).then((resp) => {
      let hospital = resp.data;
      this.setState({
        hospitalname: hospital.hospitalname,
        ventilator: hospital.ventilator,
        oxygen: hospital.oxygen,
        normal: hospital.normal,
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
          <h3>Bed List</h3>
          <form className="mb-5">
            <table className="table table-bordered">
              <thead className="bg-primary text-light">
                <tr>
                  <th>Hospital Name</th>
                  <th>Ventilator</th>
                  <th>Oyygen</th>
                  <th>Normal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.hospitalname}</td>
                  <td>{this.state.ventilator}</td>
                  <td>{this.state.oxygen}</td>
                  <td>{this.state.normal}</td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </>
    );
  }
}

export default BedList;
