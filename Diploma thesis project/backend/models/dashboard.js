import mongoose from "mongoose";

var DashboardSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now},
    name: { type: String, required: true },
    temperature: { type: Number, required: true, min: 36, max: 41,  message: 'Temperature is not supported'},
    heardRate: { type: Number, required: true, min: 0, max: 200,  message: 'Heard Rate is not supported'},
    pressureH: { type: Number, required: true, min: 0, max: 200,  message: 'Pressure is not supported'},
    pressureB: { type: Number, required: true, min: 0, max: 200,  message: 'Pressure is not supported'},
    raspiratoryRate: { type: Number, required: true, min: 0, max: 30,  message: 'Raspiratory Rate is not supported'},
    oxygen: { type: Number, required: true, min: 0, max: 100,  message: 'Oxygen is not supported'},
});

const Dashboard = mongoose.model('Dashboard', DashboardSchema);
export default Dashboard;
