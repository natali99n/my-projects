import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddChecklist = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [canister, setCanister] = useState(false);
    const [pressure, setPressure] = useState(false);
    const [catheters, setCatheters] = useState(false);
    const [ambuBag, setAmbuBag] = useState(false);
    const [water, setWater] = useState(false);
    const [humidifier, setHumidifier] = useState(false);
    const [tape, setTape] = useState(false);
    const [site, setSite] = useState(false);
    const [swedishNose, setSwedishNose] = useState(false);
    const [oximeter, setOximeter] = useState(false);
    const [nebuliser, setNebuliser] = useState(false);
    const [oximeter2, setOximeter2] = useState(false);
    const [emergency, setEmergency] = useState(false);
    const [dayNight, setDayNight] = useState(null);
    const navigate = useNavigate();


    const saveChecklist = async (e) => {
        e.preventDefault();
        try{
          await axios.post('http://localhost:8000/paediatric-checklist-new',{
              canister: canister,
              pressure: pressure,
              catheters: catheters,
              ambuBag: ambuBag,
              water: water,
              humidifier: humidifier,
              tape: tape,
              site: site,
              swedishNose: swedishNose,
              oximeter: oximeter,
              nebuliser: nebuliser,
              oximeter2: oximeter2,
              emergency: emergency,
              dayNight: dayNight
          });
          navigate("/paediatric-checklist");
        } catch (error){
          console.log(error);
        }
    };


    const goBack = () => {
      navigate(-1);
    };

    return (
        <div className="columns mt-5 is-centered">
        <div className="column is-full">
            <form className="box" onSubmit={ saveChecklist }>
                <div className="field">
                <label className="label">Date
                <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
                </label>
                </div>

                <div className="field">
                <label className="label">Shift</label>
                  <label className="radio">
                    <input type="radio"
                    name="dayNight"
                    value="true"
                    onChange={ (e) => setDayNight(e.target.value) }
                    />
                     Day
                  </label>
                  <label class="radio">
                    <input type="radio"
                    name="dayNight"
                    value="false"
                    onChange={ (e) => setDayNight(e.target.value) }
                    />
                     Night
                  </label>
                </div>

                <div className="field">
                    <label className="checkbox" >
                      <input type="checkbox"
                          checked={ canister }
                          onChange={ () => setCanister(!canister) }
                      />
                      ⠀Suction canister no more than full and cleaned daily
                    </label>
                </div>

                <div className="field">
                    <label className="checkbox">
                    <input type="checkbox"
                        checked={ pressure }
                        onChange={ () => setPressure(!pressure) }
                    />
                    ⠀Check suction pressure working at 125mmHg
                    </label>
                </div>

                <div className="field">
                    <label className="checkbox">
                    <input type="checkbox"
                        checked={ catheters }
                        onChange={ () => setCatheters(!catheters) }
                    />
                    ⠀Correct size suction catheters available and stocked
                    </label>
                </div>

                <div className="field">
                    <label className="checkbox">
                    <input type="checkbox"
                        checked={ ambuBag }
                        onChange={ () => setAmbuBag(!ambuBag) }
                    />
                    ⠀Ambu-bag available and working (if applicable)
                    </label>
                </div>

                <div className="field">
                    <label className="checkbox">
                    <input type="checkbox"
                        checked={ water }
                        onChange={ () => setWater(!water) }
                    />
                    ⠀Sterile water for humidifier available and humidifier working
                    </label>
                </div>

                <div className="field">
                    <label className="checkbox">
                    <input type="checkbox"
                        checked={ humidifier }
                        onChange={ () => setHumidifier(!humidifier) }
                    />
                    ⠀Humidifier circuit changes weekly - record date
                    </label>
                </div>

                <div className="field">
                    <label className="checkbox">
                    <input type="checkbox"
                        checked={ tape }
                        onChange={ () => setTape(!tape) }
                    />
                    ⠀Tracheostomy tape secured and changed
                    </label>
                </div>

                <div className="field">
                    <label className="checkbox">
                    <input type="checkbox"
                        checked={ site }
                        onChange={ () => setSite(!site) }
                    />
                    ⠀Tracheostomy site cleaned, and dressing changed
                    </label>
                </div>

                <div className="field">
                    <label className="checkbox">
                    <input type="checkbox"
                        checked={ swedishNose }
                        onChange={ () => setSwedishNose(!swedishNose) }
                    />
                    ⠀Swedish nose changed daily (if applicable)
                    </label>
                </div>

                <div className="field">
                    <label className="checkbox">
                    <input type="checkbox"
                        checked={ oximeter }
                        onChange={ () => setOximeter(!oximeter) }
                    />
                    ⠀Oximeter working & sats probe position changed 4 hourly (if applicable)
                    </label>
                </div>

                <div className="field">
                    <label className="checkbox">
                    <input type="checkbox"
                        checked={ nebuliser }
                        onChange={ () => setNebuliser(!nebuliser) }
                    />
                    </label>
                    ⠀Nebuliser Pot cleaned & set change due - Record date (DD/MM/YYYY) (changed weekly)
                </div>

                <div className="field">
                    <label className="checkbox">
                    <input type="checkbox"
                        checked={ oximeter2 }
                        onChange={ () => setOximeter2(!oximeter2) }
                    />
                    ⠀Oximeter checked and more than 1/4 in tank
                    </label>
                </div>

                <div className="field">
                    <label className="checkbox">
                    <input type="checkbox"
                        checked={ emergency }
                        onChange={ () => setEmergency(!emergency) }
                    />
                    ⠀Emergency tracheostomy kit available (1x tracheostomy same size, 1x smaller size, lubricant, suction catheters, gloves, dressing, trachy tapes/ties)
                    </label>

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

export default AddChecklist
