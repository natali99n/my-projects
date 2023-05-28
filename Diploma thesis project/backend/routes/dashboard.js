import express from "express";
import Dashboard from "../models/dashboard.js";
var router = express.Router();


export let dataGet = async (req, res) => {
	var data = await Dashboard.find()
  //const elevations = db.collection('elevations').find()
  //console.log(elevations)
	res.json(data)
};

export let dataPost = async (req, res) => {

  var newDashboard = new Dashboard({
    date: req.body.date,
    name:  req.body.name,
    temperature: req.body.temperature,
    heardRate: req.body.heardRate,
    pressureH: req.body.pressureH,
    pressureB: req.body.pressureB,
    raspiratoryRate: req.body.raspiratoryRate,
    oxygen: req.body.oxygen
  })
  try {
        const dataToSave = await newDashboard.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
};

export let dataGetOne = async (req, res) => {
	try {
		const data = await Elevation.findOne({ _id: req.params.id })
		res.json(data)
	} catch {
		res.status(404)
		res.json({ error: "Elevation doesn't exist!" })
	}
}



export default router;
