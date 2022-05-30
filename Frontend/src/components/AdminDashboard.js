import React, { Component } from "react";
import { Button } from "react-bootstrap";
import AdminServiceApi from "../service/AdminServiceApi.js";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminId: "",
      firstName: "",
    };

    this.loadAdmin = this.loadAdmin.bind(this);
  }

  componentDidMount() {
    this.loadAdmin();
  }

  loadAdmin = () => {
    let admin = JSON.parse(sessionStorage.getItem("admin"));
    this.setState({
      adminId: admin.id,
      firstName: admin.name,
    });
  };

  logout() {
    AdminServiceApi.logoutAdmin();
    window.location = "/";
  }

  addhospital() {
    window.location = "/addhospital";
  }
  viewhospital() {
    window.location = "/viewhospital";
  }
  viewusers() {
    window.location = "/viewuser";
  }

  render() {
    let { adminId, firstName } = this.state;
    return (
      <div className="container-fluid admindash">
        <div className="row py-3">
          <div className="col-sm-6">
            <h2 className="text-capitalize text-light">Hello, {firstName}</h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={this.logout}
              className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none "
            >
              Logout
            </Button>
          </div>
        </div>

        <div className="row py-5 justify-content-center">
          <div className="col-sm-3">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
            >
              <div className="card-body">
                <h5 className="card-title">Add Hospital</h5>
                <p className="card-text">
                  Register a new Hospital to database.
                </p>
                <Button onClick={this.addhospital} className="btn btn-primary">
                  ADD
                </Button>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
            >
              <div className="card-body">
                <h5 className="card-title">View Hospital List</h5>
                <p className="card-text">
                  View details of all registered hospitals.
                </p>
                <Button onClick={this.viewhospital} className="btn btn-warning">
                  VIEW
                </Button>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
            >
              <div className="card-body">
                <h5 className="card-title">View User List</h5>
                <p className="card-text">View details of all users.</p>
                <Button onClick={this.viewusers} className="btn btn-danger">
                  VIEW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Admin;
