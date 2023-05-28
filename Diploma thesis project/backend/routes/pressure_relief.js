import express from "express";
import Pressure from "../models/pressure_relief.js";
var router = express.Router();


export let pressureGet = async (req, res) => {
	var pressures = await Pressure.find()
  //const elevations = db.collection('elevations').find()
  //console.log(elevations)
	res.json(pressures)
};

export let pressurePost = async (req, res) => {

  var newPressure = new Pressure({
    date: req.body.date,
    time:  req.body.time,
    position: req.body.position,
    skin: req.body.skin,
    actions: req.body.actions
  })
  try {
        const dataToSave = await newPressure.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
};

export let pressureGetOne = async (req, res) => {
	try {
		const pressure = await Pressure.findOne({ _id: req.params.id })
		res.json(pressure)
	} catch {
		res.status(404)
		res.json({ error: "Pressure schema doesn't exist!" })
	}
}

export const updatePressure = async (req, res) => {
    try {
        await Pressure.updateOne({_id : req.params.id}, req.body);
        res.json({
            "message": "Pressure relief Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}


export const deletePressure = async (req, res) => {
    try {
        await Pressure.deleteOne({_id : req.params.id});
        res.json({
            "message": "Pressure relief Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export default router;
