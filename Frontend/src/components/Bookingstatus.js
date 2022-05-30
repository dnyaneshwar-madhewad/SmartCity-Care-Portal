import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import RequestServiceApi from "../service/RequestServiceApi.js";

export default class Bookingstatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requests: [],
      message: null,
    };

    this.reloadHospitalList = this.reloadHospitalList.bind(this);
  }

  componentDidMount() {
    this.reloadHospitalList();
  }

  reloadHospitalList() {
    let u = JSON.parse(sessionStorage.getItem("user"));
    console.log(u);
    RequestServiceApi.getAllRequestByUser(u.id).then((resp) => {
      this.setState({
        requests: resp.data,
        message: "Request list rendered successfully",
      });
      console.log(resp.data);
      console.log(this.state.message);
    });
  }

  backtodash() {
    window.location = "/userdashboard";
  }

  render() {
    return (
      <>
        <div className="container my-4">
          <Button
            className="btn btn-secondary offset-10"
            onClick={this.backtodash}
            style={{ minWidth: "12vw" }}
          >
            Back to Dashboard
          </Button>
          <div>
            <h3>Request List</h3>
            <table className="table table-bordered">
              <thead className="bg-primary text-light">
                <tr>
                  <th>bedtype</th>
                  <th>symptoms</th>
                  <th>timetoarrive</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.requests.map((request) => (
                  <tr>
                    <td>{request.bedtype}</td>
                    <td>{request.symptoms}</td>
                    <td>{request.timetoarrive}</td>
                    <td>{request.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
