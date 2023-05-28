import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddData = () => {
    const [name, setName] = useState('');
    const [temperature, setTemperature] = useState('');
    const [heardRate, setHeardRate] = useState('');
    const [pressureH, setPressureH] = useState('');
    const [pressureB, setPressureB] = useState('');
    const [raspiratoryRate, setRaspiratoryRate] = useState('');
    const [oxygen, setOxygen] = useState('');
    const navigate = useNavigate();

    const saveData = async (e) => {
        e.preventDefault();
        try{
          await axios.post('http://localhost:8000/dashboard-new',{
              name: name,
              temperature: temperature,
              heardRate: heardRate,
              pressureH: pressureH,
              pressureB: pressureB,
              raspiratoryRate: raspiratoryRate,
              oxygen: oxygen,
          });
          navigate("/dashboard");
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
            <form className="box" onSubmit={ saveData }>
                <div className="field">
                    <label className="label">Name</label>
                    <input
                        className="input"
                        type="text"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Temperature</label>
                    <p class="subtitle is-6"><em>Enter the head elevation angle in degrees. For example, 20.</em></p>
                    <input
                        className="input"
                        type="text"
                        value={ temperature }
                        onChange={ (e) => setTemperature(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">heardRate</label>
                    <p class="subtitle is-6"><em>Enter the number of minutes. For example, 40.</em></p>
                    <input
                        className="input"
                        type="text"
                        value={ heardRate }
                        onChange={ (e) => setHeardRate(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">pressureH</label>
                    <p class="subtitle is-6"><em>For example, JM told me that it hurt to be in this position and requested to stop.</em></p>
                    <textarea class="textarea"
                        type="text"
                        value={ pressureH }
                        onChange={ (e) => setPressureH(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">pressureB</label>
                    <p class="subtitle is-6"><em>For example, JM told me that it hurt to be in this position and requested to stop.</em></p>
                    <textarea class="textarea"
                        type="text"
                        value={ pressureB }
                        onChange={ (e) => setPressureB(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">raspiratoryRate</label>
                    <p class="subtitle is-6"><em>For example, JM told me that it hurt to be in this position and requested to stop.</em></p>
                    <textarea class="textarea"
                        type="text"
                        value={ raspiratoryRate }
                        onChange={ (e) => setRaspiratoryRate(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">oxygen</label>
                    <p class="subtitle is-6"><em>For example, JM told me that it hurt to be in this position and requested to stop.</em></p>
                    <textarea class="textarea"
                        type="text"
                        value={ oxygen }
                        onChange={ (e) => setOxygen(e.target.value) }
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

export default AddData
