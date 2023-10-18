const { stim } = require('../models');




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

async function createStim (req, res) {
    try {
        const stim = await  stim.create(req.body)
        await stim.save()
        return res.staus(201).json({
            stim,
        })
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

async function updateStim(req, res) {
    try {
        const { id } = req.params
        let stim = await stim.findByIdAndUpdate(id)
        if (stim) {
            return req.status(200).json(stim)
        }
        throw new Error('Stim products not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteStim (req, res) {
    try {
        const id = req.params
        let stim = await stim.findByIdAndDelete(id)
        if (stim) {
            return res.status(200).json(stim)
        }
        throw new Error('Stim products')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports={
    getAllStim,
    getStimById,
    createStim,
    updateStim,
    deleteStim
}