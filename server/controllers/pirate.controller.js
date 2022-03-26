const { Pirate } = require('../models/pirate.model');

module.exports = {
    index : (req, res) => {
        res.json({ message: "Pirate Crew - BELT EXAM MERN" })
    },
    allPirates : (req, res) => {
        Pirate.find().sort({ name: 1 })
            .then(pirates => res.json(pirates))
            .catch(err => res.status(400).json(err))
    },
    onePirate : (req, res) => {
        Pirate.findOne({ _id: req.params.id })
            .then(pirate => res.json(pirate))
            .catch(err => res.status(400).json(err))
    },
    createPirate : (req, res) => {
        Pirate.create(req.body)
            .then(newPirate => res.json(newPirate))
            .catch(err => res.status(400).json(err))
    },
    updatePirate : (req, res) => {
        Pirate.findOneAndUpdate(
            { _id: req.params.id },
            req.body, { new: true, runValidators: true }
        )
            .then(pirate => res.json(pirate))
            .catch(err => res.status(400).json(err))
    },
    deletePirate : (req, res) => {
        Pirate.deleteOne({ _id: req.params.id })
            .then(confirmation => res.json(confirmation))
            .catch(err => res.json(err))
    }
}