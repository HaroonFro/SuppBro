const { Protein } = require('../models');




async function getAllProtein(req,res){
    try{
        const protein = await Protein.find();
        res.json(protein);
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function getProteinById (req,res){
    try{
        const {id} = req.params;
        const protein = await Protein.findById(id);
        if(protein){
            return res.json(protein);
        }
        res.status(404).json({message:'Protein not found!'})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function createProtein (req, res) {
    try {
        const protein = await  Protein.create(req.body)
        await protein.save()
        return res.staus(201).json({
            protein,
        })
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

async function updateProtein (req, res) {
    try {
        const { id } = req.params
        let protein = await Protein.findByIdAndUpdate(id)
        if (protein) {
            return req.status(200).json(protein)
        }
        throw new Error('Protein products not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteProtein (req, res) {
    try {
        const id = req.params
        let protein = await Protein.findByIdAndDelete(id)
        if (protein) {
            return res.status(200).json(protein)
        }
        throw new Error('Protein products')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports={
    getAllProtein,
    getProteinById,
    createProtein,
    updateProtein,
    deleteProtein
}