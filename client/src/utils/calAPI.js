import axios from "axios";
export default {
   
      // Gets all custs
      getEvents: function(Data) {
        return axios.post("/schedule/new", Data);
      },
      // Gets the custs with the given id
      getEventById: function(id) {
        return axios.get("/schedule/" + id);
      },
      // Deletes the cust with the given id
      deleteEvent: function(id) {
        return axios.delete("/schedule/" + id);
      },
      // Saves a cust to the database
      saveEvent: function(calData) {
        return axios.post("/schedule", calData);
      },

    };  