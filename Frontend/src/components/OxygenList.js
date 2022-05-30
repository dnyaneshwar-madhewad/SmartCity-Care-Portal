import React, { Component } from "react";
import HospitalServiceApi from "../service/HospitalServiceApi.js";

class OxygenList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hospitalname: "",
      oxygenavailable: "",
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
        oxygenavailable: hospital.oxygenavailable,
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
            style={{ minWidth: "13vw" }}
          >
            Back To Dashboard
          </button>
          <h3>Oxygen List</h3>
          <form className="mb-5">
            <table className="table table-bordered">
              <thead className="bg-primary text-light">
                <tr>
                  <th>Hospital Name</th>
                  <th>Oxygen Available</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.hospitalname}</td>
                  <td>{this.state.oxygenavailable}</td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </>
    );
  }
}

export default OxygenList;
