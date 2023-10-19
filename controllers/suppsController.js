
const supps =require('../models/index')
const protein = require('../models/protein')
const creatine = require('../models/creatine')
const stim = require('../models/stim')
const multi = require('../models/multi')



async function getAllSupps(req,res){
    try{
        const sports = await supps.find();
        res.json(supps);
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function getSuppsById (req,res){
    try{
        const {id} = req.params;
        const supp = await supps.findById(id);
        if(supp){
            return res.json(supp);
        }
        res.status(404).json({message:'Supp not found!'})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}


async function getAllProtein(req,res){
    try{
        const protein = await protein.find();
        res.json(protein);
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function getProteinById (req,res){
    try{
        const {id} = req.params;
        const protein = await protein.findById(id);
        if(protein){
            return res.json(protein);
        }
        res.status(404).json({message:'Protein not found!'})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function getAllStim(req,res){
    try{
        const stim = await stim.find();
        res.json(stim);
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function getStimById (req,res){
    try{
        const {id} = req.params;
        const stim = await stim.findById(id);
        if(stim){
            return res.json(stim);
        }
        res.status(404).json({message:'Stim not found!'})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function getAllCreatine(req,res){
    try{
        const creatine = await creatine.find();
        res.json(creatine);
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function getCreatineById (req,res){
    try{
        const {id} = req.params;
        const creatine = await creatine.findById(id);
        if(creatine){
            return res.json(creatine);
        }
        res.status(404).json({message:'Creatine not found!'})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}




module.exports = {
    getAllSupps,
    getSuppsById
}