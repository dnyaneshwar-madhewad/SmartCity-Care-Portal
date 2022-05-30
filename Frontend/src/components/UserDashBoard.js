import React, { Component } from "react";
import { Button } from "react-bootstrap";
import UserServiceApi from "../service/UserServiceApi.js";

class UserDashBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      Name: "",
    };

    this.loadUser = this.loadUser.bind(this);
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    this.setState({
      userId: user.id,
      Name: user.name,
    });
  };

  logout() {
    UserServiceApi.logoutUser();
    window.location = "/";
  }
  bedbook() {
    window.location = "/bedavailability";
  }
  bloodavailability() {
    window.location = "/bloodavailability";
  }
  oxygenavailability() {
    window.location = "/oxygenavailability";
  }
  bookingstatus() {
    window.location = "/bookingstatus";
  }
  ambulancecontact() {
    window.location = "/ambulancecontact";
  }
  doctorinfo() {
    window.location = "/doctorinfo";
  }
  render() {
    let { userId, Name } = this.state;
    return (
      <div className="container-fluid userdash pb-5">
        <div className="row py-3">
          <div className="col-sm-6">
            <h2 className="text-capitalize text-light">Hello, {Name}</h2>
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
        <div className="row justify-content-center">
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
            >
              <div className="card-body">
                <h5 className="card-title">Book Bed</h5>
                <p className="card-text">
                  View Blood Availability in the Hospital
                </p>
                <Button onClick={this.bedbook} className="btn btn-success">
                  Book Now
                </Button>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
            >
              <div className="card-body">
                <h5 className="card-title">View Blood Availability</h5>
                <p className="card-text">
                  View Blood Availability in the Hospital
                </p>
                <Button
                  onClick={this.bloodavailability}
                  className="btn btn-primary"
                >
                  VIEW
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-3 justify-content-center">
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
            >
              <div className="card-body">
                <h5 className="card-title">View Booking status</h5>
                <p className="card-text">View Booking History</p>
                <Button
                  onClick={this.bookingstatus}
                  className="btn btn-primary"
                >
                  VIEW
                </Button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
            >
              <div className="card-body">
                <h5 className="card-title">View Oxygen Availability</h5>
                <p className="card-text">
                  View Oxygen Availability in the Hospital
                </p>
                <Button
                  onClick={this.oxygenavailability}
                  className="btn btn-primary"
                >
                  VIEW
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3 justify-content-center">
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
            >
              <div className="card-body">
                <h5 className="card-title">View Ambulance Contact details</h5>
                <p className="card-text">
                  View Ambulance Contact Details of the Hospital
                </p>
                <Button
                  onClick={this.ambulancecontact}
                  className="btn btn-primary"
                >
                  VIEW
                </Button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
            >
              <div className="card-body">
                <h5 className="card-title">View DoctorInfo Details</h5>
                <p className="card-text">
                  View Doctors Info Available at the Hospital
                </p>
                <Button onClick={this.doctorinfo} className="btn btn-primary">
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

export default UserDashBoard;
