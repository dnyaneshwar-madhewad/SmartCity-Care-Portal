import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/user";

class UserServiceApi {
  addUser(user) {
    console.log(user);
    return axios.post(USER_API_BASE_URL + "/adduser", user);
  }

  getByHospname(hosname) {
    return axios.get(USER_API_BASE_URL + "/doctorinfo/" + hosname);
  }

  logoutUser() {
    sessionStorage.removeItem("user");
  }
}

export default new UserServiceApi();
