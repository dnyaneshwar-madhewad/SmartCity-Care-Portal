import React, { Component } from "react";
import Swal from "sweetalert2";
import { Button } from "react-bootstrap";
import LoginApi from "../service/LoginApi.js";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: null,
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login = (e) => {
    if (this.state.password === "" || this.state.email === "") {
      Swal.fire({
        title: "Please fill the Credentials",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user.email);
    LoginApi.loginUser(user)
      .then((response) => {
        console.log(response.data.role);
        this.setState({ message: "Login successful." });
        console.log(this.state.message);
        if (response.data.role === "admin") {
          sessionStorage.setItem("admin", JSON.stringify(response.data));
          console.log(response.data);
          //this.props.history.push("/adminDashboard");
          window.location = "/admindashboard";
        } else if (response.data.role === "hospital") {
          sessionStorage.setItem("hospital", JSON.stringify(response.data));
          console.log(response.data);
          //this.props.history.push("/hospitalDashboard");
          window.location = "/hospitaldashboard";
        } else {
          sessionStorage.setItem("user", JSON.stringify(response.data));
          //this.props.history.push("/userDashboard");
          window.location = "/userdashboard";
        }
      })
      .catch((error) => {
        console.error("in err ", error.response.data);

        Swal.fire({
          title: this.state.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  validateEmail() {
    let email = document.getElementById("email").value;
    let emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(email) === true || email === "") {
      return true;
    } else {
      document.getElementById("emailVR").innerHTML =
        "Email format should be abc@xyz.com";
      return false;
    }
  }

  removeAlert() {
    document.getElementById("emailVR").innerHTML = "";
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <>
        <div className="container-fluid login">
          <div className="pt-5">
            <form
              className="container pt-2 border border-primary shadow-lg p-3 mb-5 bg-white rounded"
              style={{ width: "30vw" }}
            >
              <h2 className="text-muted text-center mb-4">Login</h2>
              <div className="form-group">
                <input
                  id="email"
                  type="email"
                  className="form-control text-center mt-3"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  onBlur={this.validateEmail}
                  onFocus={this.removeAlert}
                  required
                />
                <span style={{ color: "red" }} id="emailVR"></span>
              </div>
              <div className="form-group my-3">
                <input
                  type="password"
                  className="form-control text-center"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="row my-3">
                <div className="col-sm-7">
                  <Button
                    className="btn btn-primary btn-lg text-light mb-3 offset-8"
                    onClick={this.login}
                  >
                    LOGIN
                  </Button>
                </div>
              </div>
            </form>
            <span id="span"></span>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
