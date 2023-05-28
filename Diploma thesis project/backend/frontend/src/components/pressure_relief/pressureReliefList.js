import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const getDateISO = (d) => new Date(d).toISOString().split("T")[0];
const PressureList = () => {
    const [pressures, setPressures] = useState([]);
    useEffect(() => {
        getPressures();
    }, []);

    const getPressures = async () => {
        const response = await axios.get('http://localhost:8000/pressure-relief');
        setPressures(response.data);
    }

    const deletePressure = async (id) => {
      try {
        await axios.delete(`http://localhost:8000/pressure-relief/${id}`);
        getPressures();
      } catch(error) {
        console.log(error);
      }
    }

    return (
      <div>
      <p className="title">Pressure Relief Positioning Chart</p>
        <div class="block">
            <Link to="/pressure-relief-new" className="button is-primary mt-2">Add New</Link>
        </div>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Position</th>
                        <th>Skin</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { pressures.map((pressure, index) => (
                        <tr key={ pressure._id }>
                            <td>{ index + 1 }</td>
                            <td>{ getDateISO(pressure.date) }</td>
                            <td>{ pressure.time }</td>
                            <td>{ pressure.position }</td>
                            <td>{ pressure.skin }</td>
                            <td>{ pressure.actions }</td>
                            <td className="buttons">
                                <Link to={`/pressure-relief/edit/${pressure._id}`} className="button is-fullwidth is-small is-info">Edit</Link>
                                <button onClick={ () => deletePressure(pressure._id) } className="button is-fullwidth is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }

                </tbody>
            </table>
        </div>

    );
}

export default PressureList
