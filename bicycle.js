const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BicycleSchema = new Schema({
    bike_name: String,
    bike_type: String,
    rent_price: Number,
    rent: Boolean
});

const Bicycle = mongoose.model("bicycle", BicycleSchema);

module.exports = Bicycle;
