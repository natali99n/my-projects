/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import ImageMapper from "react-img-mapper";


const OneBodyMap = () => {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [points, setPoints] = useState([]);
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();


    useEffect(() => {
        getMapById();
    }, []);

    const getMapById = async () => {
        const response = await axios.get(`http://localhost:8000/body-map/${id}`);
        setDate(response.data.date);
        setName(response.data.name);
        setPoints(response.data.points);
        setNotes(response.data.notes);
    };

    const goBack = () => {
      navigate(-1);
    };

    var URL = "https://cdn.pixabay.com/photo/2021/11/27/01/03/anatomical-6826992_960_720.png";
    var mapShow = [
      { name: "Face", shape: "circle", coords: [126,63,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Neck", shape: "circle", coords: [126,99,7 ], fillColor: "red", preFillColor: "red"  },
      { name: "Right shoulder", shape: "circle", coords: [79,115,7 ], fillColor: "red", preFillColor: "red"},
      { name: "Left shoulder", shape: "circle", coords: [170,114,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Right arm", shape: "circle", coords: [71,157,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Left arm", shape: "circle", coords: [176,156,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Right forearm", shape: "circle", coords: [61,191,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Left forearm", shape: "circle", coords: [190,192,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Right hand", shape: "circle", coords: [38,257,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Left hand", shape: "circle", coords: [212,257,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Right thorax", shape: "circle", coords: [104,129,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Left thorax", shape: "circle", coords: [144,129,7 ], fillColor: "red", preFillColor: "red"},
      { name: "Right top core", shape: "circle", coords: [105,170,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Left top core", shape: "circle", coords: [143,170,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Right bottom core", shape: "circle", coords: [106,200,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Left bottom core", shape: "circle", coords: [144,200,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Right thigh", shape: "circle", coords: [96,276,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Left thigh", shape: "circle", coords: [155,276,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Right leg", shape: "circle", coords: [98,378,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Left leg", shape: "circle", coords: [151,378,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Right foot", shape: "circle", coords: [96,450,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Left foot", shape: "circle", coords: [152,450,7 ], fillColor: "red", preFillColor: "red" },

      { name: "Head", shape: "circle", coords: [374,57,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Neck", shape: "circle", coords: [374,89,7 ], fillColor: "red", preFillColor: "red"  },
      { name: "Left arm", shape: "circle", coords: [321,158,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Right arm", shape: "circle", coords: [428,158,7 ], fillColor: "red", preFillColor: "red"},
      { name: "Left forearm", shape: "circle", coords: [305,205,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Right forearm", shape: "circle", coords: [442,205,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Left hand", shape: "circle", coords: [290,250,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Right hand", shape: "circle", coords: [458,250,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Left shoulder blade", shape: "circle", coords: [348,124,7 ], fillColor: "red", preFillColor: "red"},
      { name: "Right shoulder blade", shape: "circle", coords: [400,124,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Left back", shape: "circle", coords: [352,163,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Right back", shape: "circle", coords: [396,163,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Left low back", shape: "circle", coords: [356,198,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Right low back", shape: "circle", coords: [390,198,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Left buttock", shape: "circle", coords: [355,243,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Right buttock", shape: "circle", coords: [392,243,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Left thigh", shape: "circle", coords: [349,298,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Right thigh", shape: "circle", coords: [398,298,7 ], fillColor: "red", preFillColor: "red"},
      { name: "Left calf", shape: "circle", coords: [347,370,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Right calf", shape: "circle", coords: [401,370,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Left heel", shape: "circle", coords: [347,439,7 ], fillColor: "red", preFillColor: "red" },
      { name: "Right heel", shape: "circle", coords: [400,439,7 ], fillColor: "red", preFillColor: "red" },
    ]

    let finalMap = []
    const search = (point) => {
        //points.map((point)=>
        const found = mapShow.find(area => area.name == String(point.slice(0,-2)));
        //console.log(found)
        finalMap.push(found)
        console.log(finalMap)

    }

    let MAP = {
      name: "mapShow",
      areas: finalMap
    };

    return (
      <div className="notification">
        <button className="delete is-medium" onClick={ goBack } ></button>
            <div className="content is-normal">
              <h1>Body Map</h1>
              <p></p>
              <h6 align="right">Date: {date} </h6>
              <h6 align="right">Name of pacient: {name}</h6>
              <tr></tr>
              <h2>Points:</h2>
                {points.map((point) =>
                  search(point)
                )
                }

                <p>{ points }</p>
              <h2>Notes: </h2>
                <p>{ notes }</p>
                <div className="box" style={{ position: "relative" }}>
                  <ImageMapper
                    src={URL}
                    map={MAP}
                    width={500}
                    lineWidth={4}
                    rerenderProps = {finalMap}
                    strokeColor={"white"}
                  />
                </div>
            </div>
        </div>

    )
}

export default OneBodyMap;
