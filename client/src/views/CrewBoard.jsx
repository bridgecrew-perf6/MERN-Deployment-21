import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

const CrewBoard = () => {
    const [pirates, setPirates] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates`)
            .then(res => setPirates(res.data))
            .catch(err => console.log(err))
    }, [])

    const removeFromDom = (dltId) => {
        setPirates(pirates.filter(pirate => (pirate, pirate._id !== dltId)))
    }

    return <>
    {pirates ? (<>
        <div className="container col-9 d-flex bg-dark justify-content-between rounded-top pt-3 mt-5">
            <h1 className="text-danger ms-5 font-monospace">PIRATE CREW</h1>
            <Link to={`/pirate/new`} className="btn btn-dark text-danger fw-bold fs-5 font-monospace me-5 pe-4">Add Pirate</Link>
        </div>

        <div className="container col-9 border border-dark border-2 font-monospace rounded-bottom p-5 bg-light">
            <div className="d-flex">
                <h2 className="text-dark text-decoration-underline font-monospace me-2 ms-2">QUEEN ANNE'S</h2>
                <h2> | </h2>
                <Link to={`/pirate/new`} className="fs-5 ms-2 text-dark"><h2>REVENGE!</h2></Link>
            </div>
            <div className="d-flex mb-3">
            </div>
            <table className="table table-striped border border-secondary border-2 mx-auto">
                <thead>
                    <tr className="fw-bold bg-dark text-light">
                        <td>Portrait</td>
                        <td>Pirate Name</td>
                        <td>Crew Position</td>
                        <td>Number of Chests</td>
                        <td colSpan={2}>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        pirates.map((pirate, i) => (
                            <tr key={i}>
                                <img src={pirate.image} style={{ width: 85, height: 105}}/>
                                <td className="fw-bold pt-4">{pirate.name}</td>
                                <td className="pt-4">{pirate.position}</td>
                                <td className="pt-4">{pirate.chests}</td>
                                <td className="pt-4"><Link to={`/pirates/${pirate._id}`} className="btn btn-dark text-success px-4 py-1 fw-bold">VIEW PIRATE</Link> </td>
                                <td> <DeleteButton dltId={pirate._id}
                                    deleteCallBack={() => removeFromDom(pirate._id)}>DELETE</DeleteButton></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </>
    ) :<>
    
    <h2 className="mt-5">THE PIRATES ARE BOARDING THE SHIP ...</h2>
    <h2 className="mt-5">BE PATIENT MATE</h2>
    </>
    }
</>
}

export default CrewBoard