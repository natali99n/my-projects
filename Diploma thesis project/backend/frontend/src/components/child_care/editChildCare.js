/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const EditChildCare = () => {
    const [time, setTime] = useState('');
    const [communication, setCommunication] = useState('');
    const [cognition, setCognition] = useState('');
    const [behaviour, setBehaviour] = useState('');
    const [feedback, setFeedback] = useState('');
    const [mediacation, setMediacation] = useState('');
    const [other, setOther] = useState('');
    const [escalated, setEscalated] = useState('');
    const [notes, setNotes] = useState('');
    const [timestamps, setTimestamps] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        getCareById();
    }, []);

    const updateChildCare = async (e) => {
        e.preventDefault();
        try{
          await axios.patch(`http://localhost:8000/child-care/edit/${id}`,{
              date: startDate,
              time: time,
              communication: communication,
              cognition: cognition,
              behaviour: behaviour,
              feedback: feedback,
              mediacation: mediacation,
              other: other,
              escalated: escalated,
              notes: notes
          });
          navigate("/child-care");
        } catch(error){
          console.log(error);
        }
    };

    const getCareById = async () => {
        const response = await axios.get(`http://localhost:8000/child-care/edit/${id}`);
        setStartDate(response.data.date);
        setTime(response.data.time);
        setCommunication(response.data.communication);
        setCognition(response.data.cognition);
        setBehaviour(response.data.behaviour);
        setFeedback(response.data.feedback);
        setMediacation(response.data.mediacation);
        setOther(response.data.other);
        setEscalated(response.data.escalated);
        setNotes(response.data.notes);
    };

    const goBack = () => {
      navigate(-1);
    };

    return (
      <div className="columns mt-5 is-centered">
        <div className="column is-three-quarters">
            <form onSubmit={ updateChildCare }>
                <div className="control">
                <label className="label">Date
                <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                </label>
                    <label className="label">Time Shift</label>
                    <div className="select is-fullwidth">
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      >
                        <option>8:00 - 20:00</option>
                        <option>20:00 - 8:00</option>
                      </select>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Communication</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Communication"
                        value={ communication }
                        onChange={ (e) => setCommunication(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Cognition</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Cognition"
                        value={ cognition }
                        onChange={ (e) => setCognition(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Behaviour</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Behaviour"
                        value={ behaviour }
                        onChange={ (e) => setBehaviour(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Feedback</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Feedback"
                        value={ feedback }
                        onChange={ (e) => setFeedback(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Mediacation</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Mediacation"
                        value={ mediacation }
                        onChange={ (e) => setMediacation(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Other</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Other"
                        value={ other }
                        onChange={ (e) => setOther(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Escalated</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Escalated"
                        value={ escalated }
                        onChange={ (e) => setEscalated(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Notes</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Notes"
                        value={ notes }
                        onChange={ (e) => setNotes(e.target.value) }
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

export default EditChildCare;
