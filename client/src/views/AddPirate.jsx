import React, { useState } from 'react';
import axios from 'axios';
import Form from '../components/Form'
import { useHistory } from 'react-router-dom';

const AddPirate = () => {
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const createPirate = pirate =>{
        axios.post(`http://localhost:8000/api/pirates`, pirate)
            .then(res => {
                history.push('/pirates')
                console.log(res)
            })
            .catch(err => {
                console.log(err.response);
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                  errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
              })
    }
  return (
    <Form onSubmitProp={createPirate}
                initialName=""
                initialImage=""
                initialChests=""
                initialPosition=""
                initialPhrase=""
                initialPegleg=""
                initialHookhand=""
                initialEyepatch=""
                errors={errors}
            />
  )
}

export default AddPirate