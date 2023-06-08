const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Store name is required."],
        minlength: [3, "Store name must be at least 3 characters long."]
    },      
    zipcode: {
        type: Number,
        required: [true, "Store zipcode is required."],
        min: [6, "Store zipcode must be at least 6 characters long."]
    },
    status: {
        type: Boolean,
        required: [true, "Store status is required."]
    }
}, { timestamps: true });

const Store = mongoose.model("Store", StoreSchema);

module.exports = Store;