import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

export const UpdateContactInfo = (props) => {
    const [contact, setContact] = useState({name: '',email: '',gender: '',phone: ''});

    useEffect(() => {
        axios
            .get('http://localhost:4000/api/contacts/'+props.match.params.id)
            .then(res => {
                setContact(res.data.data);
            })
            .catch(err => {
                console.log("Error from UpdateContactInfo");
            })
    }, [props.match.params.id]);

    const updateContact = (e) => {
        e.preventDefault();
        axios
            .put('http://localhost:4000/api/contacts/'+props.match.params.id, contact)
            .then(res => {
                props.history.push('/');
            })
            .catch(err => {
                console.log(`${err} Error in creatContact!`);
            })

    };

    const onChange = (e) => {
        setContact({...contact, [e.target.name]: e.target.value});
    };

    return (
        <div className="UpdateBookInfo">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br />
                        <Link to="/" className="btn btn-outline-warning float-left">
                            Show Contact List
                        </Link>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Edit Contact</h1>
                        <p className="lead text-center">
                            Update Contact's Info
                        </p>
                    </div>
                </div>

                <div className="col-md-8 m-auto">
                    <form noValidate>
                        <div className='form-group'>
                            <label htmlFor="title">Name</label>
                            <input
                                type='text'
                                placeholder='name'
                                name='name'
                                className='form-control'
                                value={contact.name}
                                onChange={onChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label htmlFor="isbn">Email</label>
                            <input
                                type='text'
                                placeholder='Email'
                                name='email'
                                className='form-control'
                                value={contact.email}
                                onChange={onChange}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="author">Gender</label>
                            <input
                                type='text'
                                placeholder='Gender'
                                name='gender'
                                className='form-control'
                                value={contact.gender}
                                onChange={onChange}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="description">Phone</label>
                            <input
                                type='text'
                                placeholder='Phone'
                                name='phone'
                                className='form-control'
                                value={contact.phone}
                                onChange={onChange}
                            />
                        </div>
                        <button type="button" onClick={updateContact} className="btn btn-outline-info btn-lg btn-block">Update Contact</button>
                    </form>
                </div>

            </div>
        </div>
    );
};
