import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const getDateISO = (d) => new Date(d).toISOString().split("T")[0];
const MapList = () => {
    const [maps, setMaps] = useState([]);
    useEffect(() => {
        getMaps();
    }, []);

    const getMaps = async () => {
        const response = await axios.get('http://localhost:8000/body-map');
        setMaps(response.data);
    }

    const deleteMap = async (id) => {
      try {
        await axios.delete(`http://localhost:8000/body-map/${id}`);
        getMaps();
      } catch(error) {
        console.log(error);
      }
    }

    return (
      <div>
      <p className="title">Body Map</p>
        <div class="block">
            <Link to="/body-map-new" className="button is-primary mt-2">Add New</Link>
        </div>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name of pacient</th>
                        <th>Points</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    { maps.map((map, index) => (
                        <tr key={ map._id }>
                            <td>{ getDateISO(map.date) }</td>
                            <td>{ map.name }</td>
                            <td>{ map.points }</td>
                            <td>{ map.notes }</td>
                            <td className="buttons">
                                <Link to={`/body-map/${map._id}`} className="button is-fullwidth is-small is-link">Show</Link>
                                <button onClick={ () => deleteMap(map._id) } className="button is-fullwidth is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }

                </tbody>
            </table>
        </div>

    );
}

export default MapList
