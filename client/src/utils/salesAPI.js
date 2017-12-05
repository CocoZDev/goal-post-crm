import axios from "axios";
export default {

    // Gets all custs
    getSales: function (Data) {
        console.log("axios sales..salesAPI.js")
        return axios.post("/sales", Data)
    },
    // // Gets the custs with the given id
    // getSaleById: function (id) {
    //     return axios.get("/sale/" + id);
    // },
    // // Deletes the cust with the given id
    // deleteSale: function (id) {
    //     return axios.delete("/sales/" + id);
    // },
    // // Saves a cust to the database
    saveSale: function (Data) {
        return axios.post("/sales/new", Data);
    }
};      