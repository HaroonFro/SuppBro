const { Schema } = require('mongoose')
const creatineSchema = new Schema (
   {
      brand: {type: String, required: true},
      product: { type: String, required: true },
      dose: { type: Number, required: true },
      image: { type: String, required: true }
   },

   { timestamps: true})

module.exports = creatineSchema