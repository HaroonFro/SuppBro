const { Schema } = require('mongoose')
const stimSchema = new Schema (
   {
      brand: {type: String, required: true},
      product: { type: String, required: true },
      caffeine: { type: Number, required: true },
      image: { type: String, required: true }
   },

   { timestamps: true})

module.exports = stimSchema