import mongoose from "mongoose";

var ChildCareSchema  = new mongoose.Schema({
    date: { type: Date, default: Date.now, required: true},
    timeShift: { type: String, required: true},
    communication: { type: String },
    cognition: { type: String },
    behaviour: { type: String },
    feedback: { type: String },
    mediacation: { type: String },
    other : { type: String },
    escalated: { type: String },
    notes: { type: String },
    timestamps: {type: Date, default: Date.now, required: true}
});

const ChildCare = mongoose.model('ChildCare', ChildCareSchema);
export default ChildCare;
