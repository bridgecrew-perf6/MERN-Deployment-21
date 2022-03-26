import React, { useState } from 'react';
import { Link, } from 'react-router-dom';

const Form = (props) => {
    const { initialName, initialImage, initialChests, initialPosition, initialPhrase, initialEyepatch, initialPegleg, initialHookhand, onSubmitProp, errors } = props;
    const [name, setName] = useState(initialName);
    const [image, setImage] = useState(initialImage);
    const [chests, setChests] = useState(initialChests);
    const [position, setPosition] = useState(initialPosition);
    const [phrase, setPhrase] = useState(initialPhrase);
    const [pegleg, setPegleg] = useState(true);
    const [eyepatch, setEyepatch] = useState(true);
    const [hookhand, setHookhand] = useState(true);

    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ name, position, image, chests, phrase, hookhand, eyepatch, pegleg });
    }

    const handlePlChange = () => {
        setPegleg(!pegleg);
    }
    const handleHhChange = () => {
        setHookhand(!hookhand);
    }
    const handleEpChange = () => {
        setEyepatch(!eyepatch);
    }

    return (
        <>
            <div className="container col-7 d-flex justify-content-between pt-3 mb-2">
                <h1 className="text-dark">New Pirate</h1>
                <button className="btn btn-dark px-4 py-0"><Link to={`/pirates`} className="text-danger fw-bold text-decoration-none py-0">Crew Board</Link></button>
            </div>
            <div className="d-flex justify-content-center">
                <form onSubmit={submitHandler} className="col-7 p-5 bg-light rounded border border-1 border-secondary rounded text-dark">

                    {
                        errors &&
                        errors.map((err, idx) =>
                            <p key={idx} className="alert bg-dark text-danger my-4 py-2">{err}</p>)
                    }
                    <div class="row mb-3">
                        <label class="col-sm-4 col-form-label">Pirate Name</label>
                        <div class="col-sm-8">
                            <input onChange={(e) => setName(e.target.value)}
                                value={name} type="text" name="name" className="form-control mb-2" />                    </div>
                    </div>
                    {
                        (name.length !== 0 && name.length < 4) &&
                        <p className="alert alert-danger">Pirate name must be at least 4 characters long.</p>
                    }
                    <div class="row mb-3">
                        <label class="col-sm-4 col-form-label">Image URL</label>
                        <div class="col-sm-8">
                            <input onChange={(e) => setImage(e.target.value)}
                                value={image} type="text" name="image" className="form-control mb-2" />                    </div>
                    </div>
                    {
                        (image.length !== 0 && image.length < 5) &&
                        <p className="alert alert-danger">Pirate name must be at least 5 characters long.</p>
                    }
                    <div class="row mb-3">
                        <label class="col-sm-4 col-form-label"># of Treasure Chests</label>
                        <div class="col-sm-8">
                            <input onChange={(e) => setChests(e.target.value)}
                                value={chests} type="text" name="chests" className="form-control mb-2" />                    </div>
                    </div>
                    {
                        (chests < 0) &&
                        <p className="alert alert-danger">Number of pirate chests must be a positive number.</p>
                    }
                    <div class="row mb-3">
                        <label class="col-sm-4 col-form-label">Pirate Catch Phrase</label>
                        <div class="col-sm-8">
                            <input onChange={(e) => setPhrase(e.target.value)}
                                value={phrase} type="text" name="phrase" className="form-control mb-2" />                    </div>
                    </div>
                    {
                        (phrase.length !== 0 && phrase.length < 7) &&
                        <p className="alert alert-danger">Pirate name must be at least 7 characters long.</p>
                    }
                    <div class="row mb-3">
                        <label class="col-sm-4 col-form-label">Position</label>
                        <div class="col-sm-8">
                            <select class="form-select" onChange={(e) => setPosition(e.target.value)}
                                value={position} type="text" name="position">
                                <option selected>Select Position</option>
                                <option >Captain</option>
                                <option >First Mate</option>
                                <option >Boatswain</option>
                                <option >Powder Monkey</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-4 col-form-label">Peg Leg ?</label>
                        <div class="col-sm-1">
                            <input type="checkbox" checked={pegleg} onChange={handlePlChange} className="p-3" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-4 col-form-label">Hook Hand ?</label>
                        <div class="col-sm-1">
                            <input type="checkbox" checked={hookhand} onChange={handleHhChange} className="p-3" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-4 col-form-label">Eye Patch ?</label>
                        <div class="col-sm-1">
                            <input type="checkbox" checked={eyepatch} onChange={handleEpChange} className="p-3" />
                        </div>
                    </div>
                    <button className="btn btn-dark text-danger px-5" type="submit" 
                    disabled={name.length !== 0 && name.length < 4 || image.length !== 0 && image.length < 5 || chests < 0 || phrase.length !== 0 && phrase.length < 7 || position !== "Captain" && position !== "Powder Monkey" && position !== "Boatswain" && position !== "First Mate"}>Welcome Pirate</button>
                </form>
            </div>
        </>
    )
}

export default Form

