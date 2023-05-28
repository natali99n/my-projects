/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const OneCare = () => {
  const [date, setDate] = useState('');
  const [timeShift, setTime] = useState('');
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


    useEffect(() => {
        getCareById();
    }, []);

    const getCareById = async () => {
        const response = await axios.get(`http://localhost:8000/child-care/${id}`);
        setDate(response.data.date);
        setTime(response.data.timeShift);
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
      <div class="notification">
        <button class="delete is-medium" onClick={ goBack } ></button>
            <div class="content is-normal">
              <h1>Child Daily Care Report</h1>
              <p></p>
              <h6 align="right">Date: {date} </h6>
              <h6 align="right">Time Shift: {timeShift}</h6>
              <tr></tr>
              <h2>Communication:</h2>
              <p class="subtitle is-6"><em>Speach, conversation, use of sign language, Makaton, Picture boards, hearing, laughing, non-verbal cues, assistive technology, BIGmac, PEC-picture Exchange, Communication System.</em></p>
                <p>{ communication }</p>
              <h2>Cognition: </h2>
              <p className="subtitle is-6"><em>Confusion, understanding, sleepy, decision-making/making choices.</em></p>
                <p>{ cognition }</p>
              <h2>Behaviour: </h2>
              <p className="subtitle is-6"><em>Physically/verbally aggressive, behaviour viewed as inappropriate, age inappropriate behaviour.</em></p>
                <p>{ behaviour }</p>
              <h2>Family and friends feedback:</h2>
              <p className="subtitle is-6">Please include "quotes" and responses.</p>
                <p>{ feedback }</p>
              <h2>Mediacation: </h2>
              <p className="subtitle is-6"><em>PRN or any additional prescribed medications - why was this given, double check mediacation records are complete, stock control.</em></p>
                <p>{ mediacation }</p>
              <h2>Other significant care needs: </h2>
              <p className="subtitle is-6"><em>Seizures, consciousness, Automatic Dysreflexia, Diabetes control, temperature.</em></p>
                <p>{ other }</p>
              <h2>Have tou escalated any abnormalities r.g. changes from care plan or child incidents e.g. Falls, pressure injuries: </h2>
              <p className="subtitle is-6"><em>If so, to whom, what, when what was the outcome? All falls and changes to skin should be reported by phone to the office asap.</em></p>
                <p>{ escalated }</p>
              <h2>Additional Notes: </h2>
              <p className="subtitle is-6"><em>If so, to whom, what, when what was the outcome? All falls and changes to skin should be reported by phone to the office asap.</em></p>
                <p>{ notes }</p>
            </div>
        </div>

    )
}

export default OneCare;
