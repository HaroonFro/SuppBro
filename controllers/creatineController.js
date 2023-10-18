const { creatine } = require('../models');


async function getAllCreatine(req,res){
    try{
        const baseballs = await creatine.find();
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

async function createCreatine (req, res) {
    try {
        const creatine = await  creatine.create(req.body)
        await creatine.save()
        return res.staus(201).json({
            creatine,
        })
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

async function updateCreatine (req, res) {
    try {
        const { id } = req.params
        let creatine = await creatine.findByIdAndUpdate(id)
        if (creatine) {
            return req.status(200).json(creatine)
        }
        throw new Error('Creatine products not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteCreatine (req, res) {
    try {
        const id = req.params
        let creatine = await creatine.findByIdAndDelete(id)
        if (baseball) {
            return res.status(200).json(creatine)
        }
        throw new Error('Creatine products')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}


module.exports={
    getAllCreatine,
    getCreatineById,
    createCreatine,
    updateCreatine,
    deleteCreatine
}