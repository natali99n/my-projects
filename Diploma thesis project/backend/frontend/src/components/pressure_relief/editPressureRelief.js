/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditPressure = () => {
    const [time, setTime] = useState('');
    const [position, setPosition] = useState('');
    const [skin, setSkin] = useState('');
    const [actions, setActions] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        getPressureById();
    }, []);

    const updatePressure = async (e) => {
        e.preventDefault();
        try{
          await axios.patch(`http://localhost:8000/pressure-relief/edit/${id}`,{
              time: time,
              position: position,
              skin: skin,
              actions: actions
          });
          navigate(`/pressure-relief`);
        } catch(error){
          console.log(error);
        }
    };

    const getPressureById = async () => {
        const response = await axios.get(`http://localhost:8000/pressure-relief/edit/${id}`);
        setTime(response.data.time);
        setPosition(response.data.position);
        setSkin(response.data.skin);
        setActions(response.data.actions);
    };

    const goBack = () => {
      navigate(-1);
    };

    return (
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={ updatePressure }>
                <div className="field">
                <label className="label">Date
                <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                </label>
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
                    <input
                        className="input"
                        type="text"
                        placeholder="Position"
                        value={ position }
                        onChange={ (e) => setPosition(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Skin</label>
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
                    <input
                        className="input"
                        type="text"
                        placeholder="Actions"
                        value={ actions }
                        onChange={ (e) => setActions(e.target.value) }
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

export default EditPressure;
