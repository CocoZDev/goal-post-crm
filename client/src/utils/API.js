import axios from "axios";

var API = {

  // This function serves our purpose of running the query to NYTimes API.
  runQuery: function(term, startYear, endYear) {

      var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

      var qs = '?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=' + term;

      if (startYear) {
          qs += '&begin_date=' + startYear + '0101';
      }

      if (endYear) {
          qs += '&end_date=' + endYear + '1231';
      }

      return axios.get(queryURL + qs).then(function(response) {
          // If we get a result, return objects with the desired parts of the responses.
          if (response.data.response.docs.length > 0) {
              var responses = [];

              for (var i = 0; i < 5; i++) {
                  var doc = response.data.response.docs[i];
                  var articleID = doc._id;
                  var article = {
                      title: doc.headline.main,
                      url: doc.web_url,
                      date: doc.pub_date.split('T')[0],
                      articleID: articleID
                  };

                  responses.push(article);
              }
              return responses;

          } else {
              // If we don't get any results, return an empty string
              return false;
          }
      });
  },
  
  // This function hits our own server to retrieve the record of query results
  getSaved: function() {
      return axios.get("/api/saved");
  },

  // This function posts new searches to our database.
  postSaved: function(article) {
      return axios.post('/api/saved', article);
  },

  // This function posts new searches to our database.
  deleteSaved: function(articleID) {
      return axios.delete('/api/saved/' + articleID);
  }
};

export default API;




  