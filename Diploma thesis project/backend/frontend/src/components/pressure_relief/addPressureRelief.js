import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddPressure = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [position, setPosition] = useState('');
    const [skin, setSkin] = useState('');
    const [actions, setActions] = useState('');
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());

    const savePressure = async (e) => {
        e.preventDefault();
        try{
          await axios.post('http://localhost:8000/pressure-relief-new',{
              time: time,
              position: position,
              skin: skin,
              actions: actions
          });
          navigate("/pressure-relief");
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
            <form className="box" onSubmit={ savePressure }>
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
                    <label className="label">Position</label>
                    <p class="subtitle is-6"><em>LHS</em></p>
                    <input
                        className="input"
                        type="text"
                        placeholder="Position"
                        value={ position }
                        onChange={ (e) => setPosition(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Skin Review</label>
                    <p class="subtitle is-6"><em>For example, Small non-blanching red patch on sacrum.</em></p>
                    <input
                        className="input"
                        type="text"
                        placeholder="Skin"
                        value={ skin }
                        onChange={ (e) => setSkin(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Actions</label>
                    <p class="subtitle is-6"><em>For example, Documented on body map, informed DNs & CBS.</em></p>
                    <textarea class="textarea"
                        placeholder="Actions"
                        type="text"
                        value={ actions }
                        onChange={ (e) => setActions(e.target.value) }
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

export default AddPressure
