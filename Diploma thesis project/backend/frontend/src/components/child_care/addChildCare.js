import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const AddChildCare = () => {
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
    const [startDate, setStartDate] = useState(new Date());


    const saveChildCare = async (e) => {
        e.preventDefault();
        try{
          await axios.post('http://localhost:8000/child-care-new',{
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
            <form className="box" onSubmit={ saveChildCare }>
                <div className="control">
                    <label className="label">Date
                    <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                    </label>
                    <label className="label">Time Shift</label>
                    <div className="select is-fullwidth ">
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
                <br></br>
                    <label className="label">Communication</label>
                    <p class="subtitle is-6"><em>Speach, conversation, use of sign language, Makaton, Picture boards, hearing, laughing, non-verbal cues, assistive technology, BIGmac, PEC-picture Exchange, Communication System.</em></p>
                    <textarea class="textarea"
                        type="text"
                        placeholder="Communication"
                        value={ communication }
                        onChange={ (e) => setCommunication(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Cognition</label>
                    <p class="subtitle is-6"><em>Confusion, understanding, sleepy, decision-making/making choices.</em></p>
                    <textarea class="textarea"
                        type="text"
                        placeholder="Cognition"
                        value={ cognition }
                        onChange={ (e) => setCognition(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Behaviour</label>
                    <p class="subtitle is-6"><em>Physically/verbally aggressive, behaviour viewed as inappropriate, age inappropriate behaviour.</em></p>
                    <textarea class="textarea"
                        type="text"
                        placeholder="Behaviour"
                        value={ behaviour }
                        onChange={ (e) => setBehaviour(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Family and friends feedback</label>
                    <p class="subtitle is-6"><em>Please include "quotes" and responses.</em></p>
                    <textarea class="textarea"
                        type="text"
                        placeholder="Feedback"
                        value={ feedback }
                        onChange={ (e) => setFeedback(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Mediacation</label>
                    <p class="subtitle is-6"><em>PRN or any additional prescribed medications - why was this given, double check mediacation records are complete, stock control.</em></p>
                    <textarea class="textarea"
                        type="text"
                        placeholder="Mediacation"
                        value={ mediacation }
                        onChange={ (e) => setMediacation(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Other significant care needs</label>
                    <p class="subtitle is-6"><em>Seizures, consciousness, Automatic Dysreflexia, Diabetes control, temperature.</em></p>
                    <textarea class="textarea"
                        type="text"
                        placeholder="Other"
                        value={ other }
                        onChange={ (e) => setOther(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Have tou escalated any abnormalities r.g. changes from care plan or child incidents e.g. Falls, pressure injuries</label>
                    <p class="subtitle is-6"><em>If so, to whom, what, when what was the outcome? All falls and changes to skin should be reported by phone to the office asap.</em></p>
                    <textarea class="textarea"
                        type="text"
                        placeholder="Escalated"
                        value={ escalated }
                        onChange={ (e) => setEscalated(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Additional Notes</label>
                    <p class="subtitle is-6"><em>If so, to whom, what, when what was the outcome? All falls and changes to skin should be reported by phone to the office asap.</em></p>
                    <textarea class="textarea"
                        type="text"
                        placeholder="Notes"
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
    )
}

export default AddChildCare
