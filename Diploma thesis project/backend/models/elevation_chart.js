import mongoose from "mongoose";

var ElevationSchema  = new mongoose.Schema({
    date: { type: Date, default: Date.now},
    time: { type: String, required: true },
    angle: { type: Number, required: true, min: 0, max: 180,  message: 'Angle is not supported'},
    duration: { type: Number, required: true },
    reason: { type: String },
    timestamps: {type: Date, default: Date.now, required: true}
});

const Elevation = mongoose.model('Elevation', ElevationSchema);
export default Elevation;
