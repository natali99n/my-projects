import React, { useState } from "react";
import ImageMapper from "react-img-mapper";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import map from "./map.json"

//ES6 way
const Human = (props) => {
  const [msg, setMsg] = useState(null);
  const [hoveredArea, setHoveredArea] = useState(null);
  const [moveMsg, setMoveMsg] = useState(null);

  const [name, setName] = useState('');
  const [points, setPoints] = useState([]);
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());


  const saveBody = async (e) => {
      e.preventDefault();
      try{
        await axios.post('http://localhost:8000/body-map-new',{
            name: name,
            points: points,
            notes: notes
        });
        navigate("/body-map");
      } catch (error){
        console.log(error);
      }
  };

  let MAP = {
    name: "my-map",
    areas: map
  };


  var URL = "https://cdn.pixabay.com/photo/2021/11/27/01/03/anatomical-6826992_960_720.png";

  const load = () => {
    setMsg("Interact with image !");
  };

  const clicked = (area, i, e) => {

    setPoints(points => [...points, `${area.name}, `]);


    setMsg(
      `You clicked on ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    );
  };

  const clickedOutside = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMsg(`You clicked on the image at coords ${JSON.stringify(coords)} !`);
  };

  const moveOnImage = (evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMoveMsg(`You moved on the image at coords ${JSON.stringify(coords)} !`);
  };

  const enterArea = (area) => {
    //hoveredArea: area, ???
    setHoveredArea(area);
    setMsg(
      `You entered ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    );
  };

  const leaveArea = (area) => {
    setHoveredArea(null);
    setMsg(
      `You leaved ${area.shape} ${area.name} at coords ${JSON.stringify(
        area.coords
      )} !`
    );
  };

  const moveOnArea = (area, evt) => {
    const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
    setMoveMsg(
      'You moved on ' +
        area.shape +
        ' ' +
        area.name +
        ' at coords {"x":'+
        coords.x +
        ',"y":' +
        coords.y + '} !'
    );
  };

  const getTipPosition = (area, i, e) => {
    return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
  };


  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="grid">
      <div className="presenter">

      <form className="box" onSubmit={ saveBody }>
          <div className="field">
          <label className="label">Date
          <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
          </label>
          <label className="label">Name of Pacient</label>
          <input
              className="input"
              type="text"
              placeholder="Name"
              value={ name }
              onChange={ (e) => setName(e.target.value) }
          />
      </div>

        <div style={{ position: "relative" }}>
          <ImageMapper
            src={URL}
            map={MAP}
            width={500}
            onLoad={() => load()}
            onMouseMove={(area, _, evt) => moveOnArea(area, evt)}
            onClick={(area) => clicked(area)}
            onMouseEnter={(area) => enterArea(area)}
            onMouseLeave={(area) => leaveArea(area)}
            onImageClick={(evt) => clickedOutside(evt)}
            onImageMouseMove={(evt) => moveOnImage(evt)}
            lineWidth={4}
            strokeColor={"white"}
          />

          {hoveredArea && (
            <span
            className="tooltip"
            style={{ ...getTipPosition(hoveredArea) }}>
              {hoveredArea && hoveredArea.name}
            </span>
          )}
        </div>

        <div className="box">
        <label className="label">Body Map Points</label>
        <p>{points}</p>
        </div>

          <div className="field">
                <label className="label">Additional Notes</label>
                <textarea
                    className="textarea"
                    type="text"
                    value={ notes }
                    onChange={ (e) => setNotes(e.target.value) }
                />
            </div>

            <div className="buttons">
                <button className="button is-primary">Save</button>
                <button className="button is-danger is-outlined" onClick={ goBack }>Cancel</button>
            </div>
            </form>
      </div>
    </div>
  );
};

export default Human;
