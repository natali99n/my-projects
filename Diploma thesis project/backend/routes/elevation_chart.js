import express from "express";
import Elevation from "../models/elevation_chart.js";
var router = express.Router();


export let elevationGet = async (req, res) => {
	var elevations = await Elevation.find()
  //const elevations = db.collection('elevations').find()
  //console.log(elevations)
	res.json(elevations)
};

export let elevationPost = async (req, res) => {

  var newElevation = new Elevation({
    date: req.body.date,
    time:  req.body.time,
    angle: req.body.angle,
    duration: req.body.duration,
    reason: req.body.reason
  })
  try {
        const dataToSave = await newElevation.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
};

export let elevationGetOne = async (req, res) => {
	try {
		const elevation = await Elevation.findOne({ _id: req.params.id })
		res.json(elevation)
	} catch {
		res.status(404)
		res.json({ error: "Elevation doesn't exist!" })
	}
}

export const updateElevation = async (req, res) => {
    try {
        await Elevation.updateOne({_id : req.params.id}, req.body);
        res.json({
            "message": "Elevation Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}


export const deleteElevation = async (req, res) => {
    try {
        await Elevation.deleteOne({_id : req.params.id});
        res.json({
            "message": "Elevation Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}
export default router;
