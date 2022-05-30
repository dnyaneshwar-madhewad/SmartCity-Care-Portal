import React, { Component } from "react";
import HospitalServiceApi from "../service/HospitalServiceApi.js";

class DoctorInfoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doctors: [],
      message: null,
    };

    this.reloadDoctorList = this.reloadDoctorList.bind(this);
  }

  componentDidMount() {
    this.reloadDoctorList();
  }

  reloadDoctorList() {
    let hosp = JSON.parse(sessionStorage.getItem("hospital"));
    HospitalServiceApi.getDoctorsByHospId(hosp.id).then((resp) => {
      this.setState({
        doctors: resp.data,
        message: "Doctors list rendered successfully",
      });
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
          <h3>Doctor Information List</h3>
          <form className="mb-5">
            <table className="table table-bordered">
              <thead className="bg-primary text-light">
                <tr>
                  <th className="visually-hidden">Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Qualification</th>
                  <th>Specilization</th>
                </tr>
              </thead>
              <tbody>
                {this.state.doctors.map((doctor) => (
                  <tr key={doctor.doctorid}>
                    <td className="visually-hidden">{doctor.doctorid}</td>
                    <td>{doctor.name}</td>
                    <td>{doctor.email}</td>
                    <td>{doctor.qualification}</td>
                    <td>{doctor.specialization}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </>
    );
  }
}

export default DoctorInfoList;
