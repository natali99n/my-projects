import { useState, useEffect, Fragment } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { BsFillSunFill, BsFillMoonFill} from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im"
import { AiOutlineCheck } from "react-icons/ai"



const getDateISO = (d) => new Date(d).toISOString().split("T")[0];
const CheckList = () => {
    const [checklists, setChecklist] = useState([]);
    const [days, daysSet] = useState([]);
    const titles = [
      "Suction canister no more than full and cleaned daily",
      "Check suction pressure working at 125mmHg",
      "Correct size suction catheters available and stocked.",
      "Ambu-bag available and working (if applicable)",
      "Sterile water for humidifier available and humidifier working",
      "Humidifier circuit changes weekly - record date",
      "Tracheostomy tape secured and changed",
      "Tracheostomy site cleaned, and dressing changed",
      "Swedish nose changed daily (if applicable)",
      "Oximeter working & sats probe position changed 4 hourly (if applicable)",
      "Nebuliser Pot cleaned & set change due - Record date (DD/MM/YYYY) (changed weekly)",
      "Oximeter checked and more than 1/4 in tank",
      "Emergency tracheostomy kit available"
  ];

    useEffect(() => {
        getChecklists();
    }, []);

    useEffect(() => {
    let days = [];
    const d = new Date();

    for (let i = 0; i < 7; i++) {
      days.push(new Date(d));
      d.setDate(d.getDate() - 1);
    }

    daysSet(days.reverse());
  }, []);

    const getChecklists = async () => {
        const response = await axios.get('http://localhost:8000/paediatric-checklist');
        setChecklist(response.data);
    }

    const deleteCheck = async (id) => {
      try {
        await axios.delete(`http://localhost:8000/paediatric-checklist/${id}`);
        getChecklists();
      } catch(error) {
        console.log(error);
      }
    }

    return (
      <div>
      <p className="title">Paediatric Tracheostomy Safety Checklist</p>
        <div className="block">
          <Link to="/paediatric-checklist-new" className="button is-primary mt-2">Add New</Link>
          <div className="block"></div>
        </div>
        <div className="columns is-centered">
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                <tr>
                    <td></td>
                    <th className="content is-small">Date</th>
                    <th className="content is-small">{titles[0]}</th>
                    <th className="content is-small">{titles[1]}</th>
                    <th className="content is-small">{titles[2]}</th>
                    <th className="content is-small">{titles[3]}</th>
                    <th className="content is-small">{titles[4]}</th>
                    <th className="content is-small">{titles[5]}</th>
                    <th className="content is-small">{titles[6]}</th>
                    <th className="content is-small">{titles[7]}</th>
                    <th className="content is-small">{titles[8]}</th>
                    <th className="content is-small">{titles[9]}</th>
                    <th className="content is-small">{titles[10]}</th>
                    <th className="content is-small">{titles[11]}</th>
                    <th className="content is-small">{titles[12]}</th>
                </tr>
                </thead>
                <tbody>
                  { checklists.map((checklist, index) => (
                      <tr key={ checklist._id }>
                          <th>{ getDateISO(checklist.date) }</th>
                          <td>
                              {checklist.dayNight
                                ? <BsFillSunFill />
                                : <BsFillMoonFill />
                              }
                          </td>
                          <td>
                              {checklist.canister
                                ? <AiOutlineCheck />
                                : <ImCancelCircle />
                              }
                          </td>
                          <td>
                              {checklist.pressure
                                ? <AiOutlineCheck />
                                : <ImCancelCircle />
                              }
                          </td>
                          <td>
                              {checklist.catheters
                                ? <AiOutlineCheck />
                                : <ImCancelCircle />
                              }
                          </td>
                          <td>
                              {checklist.ambuBag
                                ? <AiOutlineCheck />
                                : <ImCancelCircle />
                              }
                          </td>
                          <td>
                              {checklist.water
                                ? <AiOutlineCheck />
                                : <ImCancelCircle />
                              }
                          </td>
                          <td>
                              {checklist.humidifier
                                ? <AiOutlineCheck />
                                : <ImCancelCircle />
                              }
                          </td>
                          <td>
                              {checklist.tape
                                ? <AiOutlineCheck />
                                : <ImCancelCircle />
                              }
                          </td>
                          <td>
                              {checklist.site
                                ? <AiOutlineCheck />
                                : <ImCancelCircle />
                              }
                          </td>
                          <td>
                              {checklist.swedishNose
                                ? <AiOutlineCheck />
                                : <ImCancelCircle />
                              }
                          </td>
                          <td>
                              {checklist.oximeter
                                ? <AiOutlineCheck />
                                : <ImCancelCircle />
                              }
                          </td>
                          <td>
                              {checklist.nebuliser
                                ? <AiOutlineCheck />
                                : <ImCancelCircle />
                              }
                          </td>

                          <td>
                              {checklist.oximeter2
                                ? <AiOutlineCheck />
                                : <ImCancelCircle />
                              }
                          </td>
                          <td>
                              {checklist.emergency
                                ? <AiOutlineCheck />
                                : <ImCancelCircle />
                              }
                          </td>





                      </tr>
                  )) }


                </tbody>
            </table>
          </div>
        </div>

    );
}

export default CheckList
