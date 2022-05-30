import axios from "axios";

const HOSPITAL_API_BASE_URL = "http://localhost:8080/hospital";

class HospitalServiceApi {
  addBed(id, hospital) {
    console.log(id + " " + hospital);
    console.log(typeof hospital.ventilator);
    console.log(typeof hospital.oxygen);
    console.log(typeof hospital.normal);
    return axios.put(HOSPITAL_API_BASE_URL + "/addbed/" + id, hospital);
  }

  addBlood(id, hospital) {
    console.log(id + " " + hospital);
    return axios.put(HOSPITAL_API_BASE_URL + "/addblood/" + id, hospital);
  }

  addOxygen(id, hospital) {
    console.log(id + " " + hospital);
    return axios.put(HOSPITAL_API_BASE_URL + "/addoxygen/" + id, hospital);
  }

  addDoctorinfo(id, doctor) {
    console.log(id + " " + doctor);
    return axios.post(HOSPITAL_API_BASE_URL + "/adddoctorinfo/" + id, doctor);
  }

  getHospitalById(id) {
    return axios.get(HOSPITAL_API_BASE_URL + "/hospitalid/" + id);
  }

  getDoctorsByHospId(id) {
    return axios.get(HOSPITAL_API_BASE_URL + "/doctorinfo/" + id);
  }

  getByHospname(hosname) {
    return axios.get(HOSPITAL_API_BASE_URL + "/viewblood/" + hosname);
  }

  logoutHospital() {
    sessionStorage.removeItem("hospital");
  }
}

export default new HospitalServiceApi();
