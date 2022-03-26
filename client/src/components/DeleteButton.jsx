import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const {dltId, deleteCallBack} = props;


    const handlerDelete = (e) =>{
            axios.delete(`http://localhost:8000/api/pirates/${dltId}`)
            .then(res =>{
                deleteCallBack();
            })
            .catch(err => console.log(err))
    }

  return (
    <button onClick={handlerDelete} className="btn btn-danger text-white py-1 mt-3 fw-bold">WALK THE PLANK</button>
  )
}

export default DeleteButton