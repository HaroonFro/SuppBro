const mongoose = require('mongoose')
const proteinSchema = require('./protein')
const creatineSchema = require('./creatine')
const multiSchema = require('./multi')
const stimSchema = require('./stim')

const Protein = mongoose.model('Protein', proteinSchema)
const Creatine = mongoose.model('Creatine', creatineSchema)
const Multi = mongoose.model('Multi', multiSchema)
const Stim = mongoose.model('Stim', stimSchema)

module.exports = {
    Protein,
    Creatine,
    Multi,
    Stim
}
