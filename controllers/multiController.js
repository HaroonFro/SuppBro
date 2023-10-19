const { Multi } = require('../models');




async function getAllMulti(req,res){
    try{
        const multi = await Multi.find();
        res.json(multi);
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function getMultiById (req,res){
    try{
        const {id} = req.params;
        const multi = await Multi.findById(id);
        if(multi){
            return res.json(multi);
        }
        res.status(404).json({message:'Multi not found!'})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

async function createMulti (req, res) {
    try {
        const multi = await  Multi.create(req.body)
        await multi.save()
        return res.staus(201).json({
            multi,
        })
    } catch (e) {
        return res.status(500).json({ error: e.message})
    }
}

async function updateMulti (req, res) {
    try {
        const { id } = req.params
        let multi = await Multi.findByIdAndUpdate(id)
        if (multi) {
            return req.status(200).json(multi)
        }
        throw new Error('Multi products not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

async function deleteMulti (req, res) {
    try {
        const id = req.params
        let multi = await Multi.findByIdAndDelete(id)
        if (multi) {
            return res.status(200).json(multi)
        }
        throw new Error('Multi products')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports={
    getAllMulti,
    getMultiById,
    createMulti,
    updateMulti,
    deleteMulti
}