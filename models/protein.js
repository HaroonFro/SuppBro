const { Schema } = require('mongoose')
const proteinSchema = new Schema (
   {
      brand: {type: String, required: true},
      product: { type: String, required: true },
      protein: { type: Number, required: true },
      image: { type: String, required: true }
   },

   { timestamps: true})

module.exports = proteinSchema