import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useHistory } from 'react-router-dom';

const Detail = () => {
    const [pirate, setPirate] = useState(null);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(res => setPirate(res.data))
            .catch(err => console.log(err))
    }, [])


    return <>
        {pirate ? (<>
            <div className="container col-8 d-flex bg-dark justify-content-center rounded-top pt-3 mt-5">
                <h1 className="text-danger ms-5">{pirate.name}</h1>
            </div>

            <div className="container col-8 border border-dark border-2 rounded-bottom p-5 bg-danger">
                <img src={pirate.image} style={{ width: 125, height: 125 }} />
                <h2 className="mt-4">Position: {pirate.position}</h2>
                <p>Treasures: {pirate.chests}</p>
                <p>Phrases: {pirate.phrase}</p>
                <p>Hook Hand ? : {pirate.hookhand ? "Yes" : "No"}</p>
                <p>Eye Patch ? : {pirate.eyepatch ? "Yes" : "No"}</p>
                <p>Peg Leg ? : {pirate.pegleg ? "Yes" : "No"}</p>
            </div>
        </>
        ) :
            <h3>Loading Team Players ...</h3>
        }
    </>

}

export default Detail
