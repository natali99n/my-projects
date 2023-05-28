import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const getDateISO = (d) => new Date(d).toISOString().split("T")[0];
const ElevatonsList = () => {
    const [elevations, setElevations] = useState([]);
    useEffect(() => {
        getElevations();
    }, []);

    const getElevations = async () => {
        const response = await axios.get('http://localhost:8000/elevation-chart');
        setElevations(response.data);
    }

    const deleteElevation = async (id) => {
      try {
        await axios.delete(`http://localhost:8000/elevation-chart/${id}`);
        getElevations();
      } catch(error) {
        console.log(error);
      }
    }

    return (
      <div>
      <p className="title">Elevation Chart</p>
        <div class="block">
            <Link to="/elevation-chart-new" className="button is-primary mt-2">Add New</Link>
        </div>
        <div className="columns is-centered">
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Angle</th>
                        <th>Duration</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    { elevations.map((elevation, index) => (
                        <tr key={ elevation._id }>
                            <td>{ getDateISO(elevation.date) }</td>
                            <td>{ elevation.time }</td>
                            <td>{ elevation.angle }</td>
                            <td>{ elevation.duration }</td>
                            <td>{ elevation.reason }</td>
                            <td className="buttons">
                                <Link to={`/elevation-chart/edit/${elevation._id}`} className="button is-fullwidth is-small is-info">Edit</Link>
                                <button onClick={ () => deleteElevation(elevation._id) } className="button is-fullwidth is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }

                </tbody>
            </table>
        </div>
        </div>

    );
}

export default ElevatonsList
