/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditElevation = () => {
    const [time, setTime] = useState('');
    const [angle, setAngle] = useState('');
    const [duration, setDuration] = useState('');
    const [reason, setReason] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        getElevationById();
    }, []);

    const updateElevation = async (e) => {
        e.preventDefault();
        try{
          await axios.patch(`http://localhost:8000/elevation-chart/edit/${id}`,{
              time: time,
              angle: angle,
              duration: duration,
              reason: reason
          });
          navigate("/elevation-chart");
        } catch(error){
          console.log(error);
        }
    };

    const getElevationById = async () => {
        const response = await axios.get(`http://localhost:8000/elevation-chart/edit/${id}`);
        setTime(response.data.time);
        setAngle(response.data.angle);
        setDuration(response.data.duration);
        setReason(response.data.reason);
    };

    const goBack = () => {
      navigate(-1);
    };

    return (
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={ updateElevation }>
              <label className="label">Date
              <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
              </label>
                <div className="field">
                    <label className="label">Time</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Time"
                        value={ time }
                        onChange={ (e) => setTime(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Angle</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Angle"
                        value={ angle }
                        onChange={ (e) => setAngle(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Duration</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Duration"
                        value={ duration }
                        onChange={ (e) => setDuration(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Reason</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Reason"
                        value={ reason }
                        onChange={ (e) => setReason(e.target.value) }
                    />
                </div>

                <div className="buttons">
                    <button className="button is-primary">Update</button>
                    <button className="button is-danger is-outlined" onClick={ goBack }>Cancel</button>
                </div>
            </form>
        </div>
      </div>
    )
}

export default EditElevation;
