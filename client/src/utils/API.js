import axios from "axios";

export default {

  // Gets all Accounts
  getAccounts: function() {
    return axios.get("/Dashboard");
  },
  // Gets the Account with the given id
  getAccount: function(id) {
    return axios.get("/index/customer/" + id);
  },
  // Archive the Account with the given id
  archiveAccount: function(id) {
    return axios.delete("/api/accounts/" + id);
  },
  // Saves a Account to the database
  registerAccount: function(Data) {
    return axios.post("account/register", Data);
  },

  // Logs in a rep
  loginAccount: function(Data) {
    return axios.post("account/login", Data);
  }
};
