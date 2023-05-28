import express from "express";
import Map from "../models/body_map.js";
var router = express.Router();


export let mapGet = async (req, res) => {
	var maps = await Map.find()
  //const elevations = db.collection('elevations').find()
  //console.log(elevations)
	res.json(maps)
};

export let mapPost = async (req, res) => {

  var newMap = new Map({
    date: req.body.date,
    name: req.body.name,
    points: req.body.points,
    notes: req.body.notes
  })
  try {
        const dataToSave = await newMap.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
};

export let mapGetOne = async (req, res) => {
	try {
		const map = await Map.findOne({ _id: req.params.id })
		res.json(map)
	} catch {
		res.status(404)
		res.json({ error: "Body Map doesn't exist!" })
	}
}


export const deleteMap = async (req, res) => {
    try {
        await Map.deleteOne({_id : req.params.id});
        res.json({
            "message": "Body Map Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}
export default router;
