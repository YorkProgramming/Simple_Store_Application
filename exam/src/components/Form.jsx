import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const StoreForm = () => {
    const [store, setStore] = useState({
        name: '',
        zipcode: '',
        status: false
    })
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        setStore({
            ...store,
            [e.target.name]: e.target.value
        })
    }

    const formValidator = () => {
        let isValid = true
        if (store.name.length < 3) {
            isValid = false
        }
        if (store.zipcode.length < 6) {
            isValid = false
        }
        return isValid
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formValidator()) {
            axios.post('http://localhost:8000/api/stores/new', store)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        } else {
            setErrors({
                name: 'Store name must be at least 3 characters',
                zipcode: 'Store zipcode must be at least 6 characters'
            })
        }
        navigate('/api/stores')
    }

    return (
        <div className="store-edit dr">
            <h1>Add Store</h1>
            {errors.name ? <p className="text-danger">{errors.name}</p> : ''}
            {errors.zipcode ? <p className="text-danger">{errors.zipcode}</p> : ''}
            <form action="" className="col-md-6 mx-auto" onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="input-data">
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            onChange={onChangeHandler}
                            required
                        />
                        <div className="underline">
                            <div className="underline__before"></div>
                        </div>
                        <label htmlFor="name">Store Name</label>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-data">
                        <input
                            type="number"
                            className="form-control"
                            name="zipcode"
                            id="zipcode"
                            onChange={onChangeHandler}
                            required
                        />
                        <div className="underline">
                            <div className="underline__before"></div>
                        </div>
                        <label htmlFor="zipcode">Zipcode</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status:</label>
                    <input
                        type="checkbox"
                        className=""
                        name="status"
                        id="status"
                        checked={store.status}
                        onChange={() => setStore({ ...store, status: !store.status })}
                    />
                </div>
                <button className="btn btn-info mt-3">Create Store</button>
            </form>
            <Link to="/api/stores" className="btn btn-secondary">
                Back
            </Link>
        </div>
    )
}

export default StoreForm