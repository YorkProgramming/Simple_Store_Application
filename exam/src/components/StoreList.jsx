import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const StoreDashboard = () => {
    const [stores, setStores] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/stores')
        .then(res => {
            console.log(res.data);
            setStores(res.data);
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="store-edit dr">
            <h1 className='mx-auto'>Store Dashboard</h1>
            
            <table className='col-md-8 mx-auto mt-4'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Zipcode</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {stores.map(store => {
                        return (
                            <tr key={store._id}>
                                <td>
                                    <Link to={`/api/stores/${store._id}`}>{store.name}</Link>
                                </td>
                                <td>{store.zipcode}</td>
                                <td>{store.status}</td>
                                <td>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => {
                                            axios.delete(`http://localhost:8000/api/stores/delete/${store._id}`)
                                            .then(() => {
                                                const filteredStores = stores.filter(s => s._id !== store._id)
                                                setStores(filteredStores)
                                            })
                                            .catch(err => console.log(err))
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            
            <button
                className='btn btn-info offset-5 mt-3'
                onClick={() => navigate("/api/stores/new")}
            >
                Create Store
            </button>
        </div>
    )
}

export default StoreDashboard;