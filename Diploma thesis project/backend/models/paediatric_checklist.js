import mongoose from "mongoose";

var PaedTrSchema  = new mongoose.Schema({
    date: { type: Date, default: Date.now},
    canister : { type: Boolean } ,
    pressure : { type: Boolean },
    catheters : { type: Boolean },
    ambuBag: { type: Boolean },
    water : { type: Boolean },
    humidifier : { type: Boolean },
    tape  : { type: Boolean },
    site : { type: Boolean },
    swedishNose: { type: Boolean },
    oximeter : { type: Boolean },
    nebuliser  : { type: Boolean },
    oximeter2  : { type: Boolean },
    emergency   : { type: Boolean },
    dayNight   : { type: Boolean, required: true }
});

const PaedTracheo = mongoose.model('PaedTracheo', PaedTrSchema);
export default PaedTracheo;
