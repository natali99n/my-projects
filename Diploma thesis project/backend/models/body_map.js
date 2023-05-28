import mongoose from "mongoose";

var BodySchema  = new mongoose.Schema({
    date: { type: Date, default: Date.now},
    name: { type: String, required: true },
    points: { type: Array, required: true },
    notes: { type: String }
});

const BodyMap = mongoose.model('BodyMap', BodySchema);
export default BodyMap;
