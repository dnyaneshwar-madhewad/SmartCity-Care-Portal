import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
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
    RequestServiceApi.getAllPendingRequestforHospital(hosp.id).then((resp) => {
      this.setState({
        requests: resp.data,
        message: "Request list rendered successfully",
      });
      console.log(resp.data);
      console.log(this.state.message);
    });
  }

  acceptRequest(reqid) {
    console.log(reqid);
    console.log(typeof reqid);

    RequestServiceApi.acceptrejectPendingRequest("accepted", reqid).then(
      (res) => {
        this.setState({ message: "Request Accepted successfully." });
        console.log(this.state.message);
        Swal.fire({
          title: this.state.message,
          icon: "success",
          confirmButtonText: "Ok",
        });
        window.location = "/hospitaldashboard";
      }
    );
  }

  rejectRequest(reqid) {
    console.log(reqid);

    RequestServiceApi.acceptrejectPendingRequest("rejected", reqid).then(
      (res) => {
        this.setState({ message: "Request Rejected successfully." });
        console.log(this.state.message);
        Swal.fire({
          title: this.state.message,
          icon: "success",
          confirmButtonText: "Ok",
        });
        window.location = "/hospitaldashboard";
      }
    );
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.requests.map((request) => (
                  <tr key={request.reqid}>
                    <td>{request.bedtype}</td>
                    <td>{request.symptoms}</td>
                    <td>{request.timetoarrive}</td>
                    <td>
                      <Button
                        className="btn btn-success me-2"
                        onClick={() => this.acceptRequest(request.reqid)}
                      >
                        Accept
                      </Button>
                      <Button
                        className="btn btn-danger"
                        onClick={() => this.rejectRequest(request.reqid)}
                      >
                        Reject
                      </Button>
                    </td>
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
