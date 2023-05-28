import express from "express";
import CheckList from "../models/paediatric_checklist.js";
var router = express.Router();


export let checklistGet = async (req, res) => {
	var checklists = await CheckList.find()
  //const elevations = db.collection('elevations').find()
  //console.log(elevations)
	res.json(checklists)
};

export let checklistPost = async (req, res) => {

  var newChecklist = new CheckList({
    date: req.body.date,
    canister:  req.body.canister,
    pressure: req.body.pressure,
    catheters: req.body.catheters,
    ambuBag: req.body.ambuBag,
    water: req.body.water,
    humidifier:  req.body.humidifier,
    tape: req.body.tape,
    site: req.body.site,
    swedishNose: req.body.swedishNose,
    oximeter: req.body.oximeter,
    nebuliser: req.body.nebuliser,
    oximeter2:  req.body.oximeter2,
    emergency: req.body.emergency,
    dayNight: req.body.dayNight
  })
  try {
        const dataToSave = await newChecklist.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
};

export let checklistGetOne = async (req, res) => {
	try {
		const checklist = await CheckList.findOne({ _id: req.params.id })
		res.json(checklist)
	} catch {
		res.status(404)
		res.json({ error: "CheckList doesn't exist!" })
	}
}

export default router;
