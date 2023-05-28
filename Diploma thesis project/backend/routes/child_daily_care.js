import express from "express";
import ChildCare from "../models/child_care.js";
var router = express.Router();


export let childCareGet = async (req, res) => {
	var cares = await ChildCare.find()
  //const elevations = db.collection('elevations').find()
  //console.log(elevations)
	res.json(cares)
};

export let childCarePost = async (req, res) => {

  var newchildCare = new ChildCare({
    date: req.body.date,
    timeShift:  req.body.time,
    communication: req.body.communication,
    cognition: req.body.cognition,
    behaviour: req.body.behaviour,
    feedback:  req.body.feedback,
    mediacation: req.body.mediacation,
    other: req.body.other,
    escalated: req.body.escalated,
    notes: req.body.notes
  })
  try {
        const dataToSave = await newchildCare.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
};

export let childCareGetOne = async (req, res) => {
	try {
		const care = await ChildCare.findOne({ _id: req.params.id })
		res.json(care)
	} catch {
		res.status(404)
		res.json({ error: "Elevation doesn't exist!" })
	}
}

export const updateChildCare = async (req, res) => {
    try {
        await ChildCare.updateOne({_id : req.params.id}, req.body);
        res.json({
            "message": "Elevation Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}


export const deleteChildCare = async (req, res) => {
    try {
        await ChildCare.deleteOne({_id : req.params.id});
        res.json({
            "message": "Elevation Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}
export default router;
