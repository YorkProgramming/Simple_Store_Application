const Store = require("../models/store.model");

module.exports = {

    index: (req, res) => {
        res.json({
            message: "Hello World"
        });
    },

    createStore: (req, res) => {
        const { name, zipcode, status } = req.body;
        Store.create({
            name,
            zipcode,
            status
        })
            .then(store => res.json(store))
            .catch(err => res.json({ message: "Something went wrong when Creating", error: err }));
    },

    getAllStores: (req, res) => {
        Store.find({})
            .then(store => res.json(store))
            .catch(err => res.json({ message: "Something went wrong when getting All", error: err }));
    },

    getOneStore: (req, res) => {
        Store.findOne({ _id: req.params.id })
            .then(store => res.json(store))
            .catch(err => res.json({ message: "Something went wrong when getting One", error: err }));
    },

    updateStore: (req, res) => {
        Store.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedStore => res.json({ product: updatedStore }))
        .catch(err => res.json({ message: "Something went wrong when Updating", error: err }));
    },

    deleteStore: (req, res) => {
        Store.findByIdAndDelete(req.params.id)
        .then(deletedStore => res.json({ product: deletedStore }))
        .catch(err => res.json({ message: "Something went wrong when Deleting", error: err }));
    }
}