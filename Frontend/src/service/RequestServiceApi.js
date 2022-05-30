import axios from "axios";

const REQUEST_API_BASE_URL = "http://localhost:8080/request";

class RequestServiceApi {
  addRequest(userid, hospid, request) {
    console.log(userid + "" + hospid);
    return axios.post(
      REQUEST_API_BASE_URL + "/addrequest/" + userid + "/" + hospid,
      request
    );
  }

  acceptrejectPendingRequest(status, reqid) {
    return axios.put(
      REQUEST_API_BASE_URL + "/acceptrequest/" + status + "/" + reqid
    );
  }

  rejectPendingRequest(status, reqid) {
    return axios.put(
      REQUEST_API_BASE_URL + "/acceptrequest/" + status + "/" + reqid
    );
  }
  getAllPendingRequestforHospital(hospid) {
    return axios.get(REQUEST_API_BASE_URL + "/pendingrequest/" + hospid);
  }

  getAllRequestByUser(userid) {
    return axios.get(REQUEST_API_BASE_URL + "/requestbyuser/" + userid);
  }

  getAllRequestforHospital(hospid) {
    return axios.get(REQUEST_API_BASE_URL + "/requestforhosp/" + hospid);
  }
}

export default new RequestServiceApi();
