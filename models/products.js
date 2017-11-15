// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var productsSchema = new Schema({
  // title is a required string
  PRoduct_name: {
    type: String,
    required: true
  },
  // link is a required string
  Description: {
    type: String,
    required: true
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  Qnauntity: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// Create the Article model with the ArticleSchema
var Product = mongoose.model("Products", productsSchema);

// Export the model
module.exports = Product;
