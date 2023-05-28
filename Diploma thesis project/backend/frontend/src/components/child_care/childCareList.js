import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const getDateISO = (d) => new Date(d).toISOString().split("T")[0];
const ChildCareList = () => {
    const [cares, setChildCares] = useState([]);
    useEffect(() => {
        getChildCares();
    }, []);

    const getChildCares = async () => {
        const response = await axios.get('http://localhost:8000/child-care');
        setChildCares(response.data);
    }

    const deleteChildCare = async (id) => {
      try {
        await axios.delete(`http://localhost:8000/child-care/${id}`);
        getChildCares();
      } catch(error) {
        console.log(error);
      }
    }

    return (
      <div>
      <p className="title">Child Daily Care Reports</p>
        <div class="block">
            <Link to="/child-care-new" className="button is-primary mt-2">Add New</Link>
        </div>
        <div className="columns is-centered">
            <table className="table is-striped  is-fullwidth">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time Shift</th>
                        <th>Behaviour</th>
                        <th>Mediacation</th>
                    </tr>
                </thead>
                <tbody>
                    { cares.map((care, index) => (
                        <tr key={ care._id }>
                            <td>{ getDateISO(care.date) }</td>
                            <td>{ care.timeShift }</td>
                            <td>{ care.behaviour }</td>
                            <td>{ care.mediacation }</td>
                            <td className="buttons" >
                            <p>  </p>
                                <Link to={`/child-care/${care._id}`} className="button is-small is-link">Show</Link>
                                <Link to={`/child-care/edit/${care._id}`} className="button  is-small is-info">Edit</Link>
                                <button onClick={ () => deleteChildCare(care._id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }

                </tbody>
            </table>
        </div>
        </div>

    );
}

export default ChildCareList
