import axios from "axios";

export default {
  // Gets all Accounts
  getAccounts: function() {
    return axios.get("/api/accounts");
  },
  // Gets the Account with the given id
  getAccount: function(id) {
    return axios.get("/api/accounts/" + id);
  },
  // Deletes the Account with the given id
  deleteAccount: function(id) {
    return axios.delete("/api/accounts/" + id);
  },
  // Saves a Account to the database
  saveAccount: function(AccountData) {
    return axios.post("/api/accounts", AccountData);
  }
    // // Saves a Account to the database from a different PORT
    // saveAccount: function(AccountData) {
    // return axios.post(":3001/api/accounts", AccountData);
    // }

};
