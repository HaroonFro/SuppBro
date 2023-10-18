const mongoose = require('mongoose')
const proteinSchema = require('./protein')
const creatineSchema = require('./creatine')
const multiSchema = require('./multi')
const stimSchema = require('./stim')

const protein = mongoose.model('Protein', proteinSchema)
const creatine = mongoose.model('Creatine', creatineSchema)
const multi = mongoose.model('Multi', multiSchema)
const stim = mongoose.model('Stim', stimSchema)

module.exports = {
    protein,
    creatine,
    multi,
    stim
}
