const { Schema } = require('mongoose')
const multiSchema = new Schema (
   {
      brand: {type: String, required: true},
      product: { type: String, required: true },
      serving: { type: Number, required: true },
      image: { type: String, required: true }
   },

   { timestamps: true})

module.exports = multiSchema