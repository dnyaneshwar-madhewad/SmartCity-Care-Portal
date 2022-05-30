import React, { Component } from "react";
import { Button } from "react-bootstrap";
import RequestServiceApi from "../service/RequestServiceApi.js";

export default class ViewRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requests: [],
      message: null,
    };

    this.reloadRequestList = this.reloadRequestList.bind(this);
  }

  componentDidMount() {
    this.reloadRequestList();
  }

  reloadRequestList() {
    let hosp = JSON.parse(sessionStorage.getItem("hospital"));
    console.log(hosp);
    RequestServiceApi.getAllRequestforHospital(hosp.id).then((resp) => {
      this.setState({
        requests: resp.data,
        message: "Request list rendered successfully",
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
                  <th>Bedtype</th>
                  <th>Symptoms</th>
                  <th>Timetoarrive</th>
                  <th>Status</th>
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
