import React, { Component } from "react";
import AdminServiceApi from "../service/AdminServiceApi.js";

class Userlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      message: null,
    };

    this.reloadUserList = this.reloadUserList.bind(this);
  }

  componentDidMount() {
    this.reloadUserList();
  }

  reloadUserList() {
    AdminServiceApi.fetchAllUsers().then((resp) => {
      this.setState({
        users: resp.data,
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
            Back To UserDashboard
          </button>
          {this.state.users.length === 0 ? (
            <h3>No hospitals in database</h3>
          ) : (
            <div>
              <h3>User List</h3>
              <table className="table table-bordered">
                <thead className="bg-primary text-light">
                  <tr>
                    <th className="visually-hidden">Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>Gender</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map((user) => (
                    <tr key={user.userid}>
                      <td className="visually-hidden">{user.userid}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.contact}</td>
                      <td>{user.address}</td>
                      <td>{user.gender}</td>
                      <td>{user.age}</td>
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

export default Userlist;
