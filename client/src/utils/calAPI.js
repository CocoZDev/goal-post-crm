import axios from "axios";
export default {
   
      // Gets all custs
      getEvents: function() {
        return axios.post("/calendar");
      },
      // Gets the custs with the given id
      getEventById: function(id) {
        return axios.get("/calendar/" + id);
      },
      // Deletes the cust with the given id
      deleteEvent: function(id) {
        return axios.delete("/calendar/" + id);
      },
      // Saves a cust to the database
      saveEvent: function(calData) {
        return axios.post("/calendar", calData);
      }
    };  