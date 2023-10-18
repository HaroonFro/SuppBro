const mongoose = require('mongoose')
const baseballSchema = require('./baseball')
const basketballSchema = require('./basketball')
const footballSchema = require('./football')
const hockeySchema = require('./hockey')

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
