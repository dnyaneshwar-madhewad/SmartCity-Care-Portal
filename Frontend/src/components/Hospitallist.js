import React, { Component } from "react";
import AdminServiceApi from "../service/AdminServiceApi.js";

class Hospitallist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hospitals: [],
      message: null,
    };

    this.reloadHospitalList = this.reloadHospitalList.bind(this);
  }

  componentDidMount() {
    this.reloadHospitalList();
  }

  reloadHospitalList() {
    AdminServiceApi.fetchAllHospitals().then((resp) => {
      this.setState({
        hospitals: resp.data,
        message: "Hospitals list rendered successfully",
      });
      console.log(this.state.message);
    });
  }

  backtodash() {
    window.location = "/admindashboard";
  }

  render() {
    return (
      <>
        <div className="container my-4">
          <button
            className="btn btn-secondary offset-11"
            style={{ minWidth: "13vw" }}
            onClick={this.backtodash}
          >
            Back To Dashboard
          </button>
          {this.state.hospitals.length === 0 ? (
            <h3>No hospitals in database</h3>
          ) : (
            <div>
              <h3>Hospital List</h3>
              <table className="table table-bordered">
                <thead className="bg-primary text-light">
                  <tr>
                    <th className="visually-hidden">Id</th>
                    <th>HospitalName</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>AmbulanceContact</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.hospitals.map((hospital) => (
                    <tr key={hospital.hospid}>
                      <td className="visually-hidden">{hospital.hospid}</td>
                      <td>{hospital.hospitalname}</td>
                      <td>{hospital.address}</td>
                      <td>{hospital.email}</td>
                      <td>{hospital.contact}</td>
                      <td>{hospital.ambulancecontact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Hospitallist;
