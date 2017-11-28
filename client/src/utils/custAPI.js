import axios from "axios";
export default {
   
      // Gets all custs
      getCusts: function() {
        return axios.get("/customers");
      },
      // Gets the custs with the given id
      getCustById: function(id) {
        return axios.get("/customers/" + id);
      },
      // Deletes the cust with the given id
      deleteCust: function(id) {
        return axios.delete("/customers/" + id);
      },
      // Saves a cust to the database
      saveCust: function(custData) {
        return axios.post("/customers", custData);
      }
    };      
    