import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const StoreDetail = () => {
const { id } = useParams();
const [store, setStore] = useState({});
const navigate = useNavigate();

useEffect(() => {
    axios
    .get(`http://localhost:8000/api/stores/${id}`)
    .then((res) => {
        setStore(res.data);
    })
    .catch((err) => console.log(err));
}, [id]);

const deleteStore = (storeId) => {
    axios
    .delete(`http://localhost:8000/api/stores/delete/${storeId}`)
    .then((res) => {
        navigate('/api/stores');
    })
    .catch((err) => console.log(err));
};

return (
    <div className="store-edit dr">
    <div>
        <h1>{store.name}</h1>
        <p>Zip Code: {store.zipcode}</p>
        <p>Status: {store.status}</p>
        <button
        className="btn btn-danger"
        onClick={() => {
            deleteStore(store._id);
        }}
        >
        Delete
        </button>
        <button
        className="btn btn-primary mr-2"
        onClick={() => navigate(`/api/stores/edit/${store._id}`)}
        >
        Edit
        </button>
        <Link to="/api/stores" className="btn btn-secondary">
        Back
        </Link>
    </div>
    </div>
);
};

export default StoreDetail;