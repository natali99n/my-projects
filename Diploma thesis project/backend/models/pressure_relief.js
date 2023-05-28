import mongoose from "mongoose";

var PressureSchema  = new mongoose.Schema({
    date: { type: Date, default: Date.now},
    time: { type: String, required: true },
    position: { type: String, required: true, values: ['Back', 'Left','Right'], message: '{VALUE} is not supported'},
    skin: { type: String, required: true },
    actions: { type: String },
    timestamps: {type: Date, default: Date.now, required: true}
});

const Pressure = mongoose.model('Pressure', PressureSchema);
export default Pressure;
