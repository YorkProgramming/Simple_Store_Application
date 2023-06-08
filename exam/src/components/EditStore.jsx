import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const StoreEdit = () => {
const { id } = useParams();
const navigate = useNavigate();
const [store, setStore] = useState({ name: '', zipcode: '', status: true });

useEffect(() => {
    axios
    .get(`http://localhost:8000/api/stores/${id}`)
    .then((res) => setStore(res.data))
    .catch((err) => console.log(err));
}, [id]);

const changeHandler = (e) => {
    setStore({
    ...store,
    [e.target.name]: e.target.value,
    });
};

const editStore = (e) => {
    e.preventDefault();
    axios
    .put(`http://localhost:8000/api/stores/edit/${id}`, store)
    .then((res) => {
        console.log(res.data);
        navigate('/api/stores');
    })
    .catch((err) => console.log(err));
};

return (
    <div className="store-edit dr">
    <h1>Edit Store</h1>
    <div className="input-data input">
        <form onSubmit={editStore}>
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
            type="text"
            name="name"
            value={store.name}
            onChange={changeHandler}
            />
            <div className="underline"></div>
        </div>

        <div className="form-group">
            <label htmlFor="zipcode">Zipcode:</label>
            <input
            type="number"
            name="zipcode"
            value={store.zipcode}
            onChange={changeHandler}
            />
            <div className="underline"></div>
        </div>

        <div className="form-group">
            <label htmlFor="status">Status:</label>
            <select
            name="status"
            value={store.status}
            onChange={changeHandler}
            >
            <option value={true}>Open</option>
            <option value={false}>Closed</option>
            </select>
            <div className="underline"></div>
        </div>

        <button type="submit" className="btn btn-primary mr-2">
            Update
        </button>

        <Link to={`/api/stores/${store._id}`} className="btn btn-secondary">
            Back
        </Link>
        </form>
    </div>
    </div>
);
};

export default StoreEdit;