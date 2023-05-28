import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddElevation = () => {
    const [time, setTime] = useState('');
    const [angle, setAngle] = useState('');
    const [duration, setDuration] = useState('');
    const [reason, setReason] = useState('');
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());

    const saveElevation = async (e) => {
        e.preventDefault();
        try{
          await axios.post('http://localhost:8000/elevation-chart-new',{
              time: time,
              angle: angle,
              duration: duration,
              reason: reason
          });
          navigate("/elevation-chart");
        } catch (error){
          console.log(error);
        }
    };


    const goBack = () => {
      navigate(-1);
    };

    return (
        <div className="columns mt-5 is-centered">
        <div className="column is-three-quarters">
            <form className="box" onSubmit={ saveElevation }>
                <div className="field">
                <label className="label">Date
                <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                </label>
                    <label className="label">Time</label>
                    <input
                        className="input"
                        type="text"
                        value={ time }
                        onChange={ (e) => setTime(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Head elevation angle</label>
                    <p class="subtitle is-6"><em>Enter the head elevation angle in degrees. For example, 20.</em></p>
                    <input
                        className="input"
                        type="text"
                        value={ angle }
                        onChange={ (e) => setAngle(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">How long was this position manitained for?</label>
                    <p class="subtitle is-6"><em>Enter the number of minutes. For example, 40.</em></p>
                    <input
                        className="input"
                        type="text"
                        value={ duration }
                        onChange={ (e) => setDuration(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">If unable to elevate above 30°, why?</label>
                    <p class="subtitle is-6"><em>For example, JM told me that it hurt to be in this position and requested to stop.</em></p>
                    <textarea class="textarea"
                        type="text"
                        value={ reason }
                        onChange={ (e) => setReason(e.target.value) }
                    />
                </div>

                <div className="buttons">
                    <button className="button is-primary">Save</button>
                    <button className="button is-danger is-outlined" onClick={ goBack }>Cancel</button>
                </div>
            </form>
        </div>
      </div>
    )
}

export default AddElevation
