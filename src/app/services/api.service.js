import axios from "axios";

// For exporting methods at the same time
class ApiService {
  constructor() {
    this.API_URL = "http://localhost:3000";
  }
  /* REGISTER POST */
  RegisterPost(fName, lName, email, pass) {
    return axios.post(`${this.API_URL}/auth/register`, {
      firstName: fName,
      lastName: lName,
      email: email,
      password: pass
    });
  }

  /* LOGIN POST */
  LoginPost(loginEmail, loginPass) {
    return axios.post(`${this.API_URL}/auth/login`, {
      email: loginEmail,
      password: loginPass
    });
  }
}

const apiService = new ApiService();
export default apiService;
