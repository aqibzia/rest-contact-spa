import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

export const CreateContact = (props) => {
    const [contact, setContact] = useState({name: '',email: '',gender: '',phone: ''});

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:4000/api/contacts', contact)
            .then(res => {
                setContact({name: '',email: '',gender: '',phone: ''});
                props.history.push('/');
            })
            .catch(err => {
                console.log('Error in creatContact!');
            })

    };

    const onChange = (e) => {
        setContact({...contact, [e.target.name]: e.target.value});
    };

    return (
        <div className='create-contact'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <br/>
                        <Link to='/' className='btn btn-outline-warning float-left'>
                            Show contact list
                        </Link>
                    </div>
                    <div className='col-md-8 m-auto'>
                        <h1 className='display-4 text-center'>Add Contact</h1>
                        <p className='lead text-center'>Create new contact</p>
                        <form onSubmit={onSubmit}>
                            <div className='form-group'>
                                <input type="text"
                                    placeholder='Name'
                                    name='name'
                                    className='form-control'
                                    value={contact.name}
                                    onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <input type="text"
                                       placeholder='Email'
                                       name='email'
                                       className='form-control'
                                       value={contact.email}
                                       onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <input type="text"
                                       placeholder='Gender'
                                       name='gender'
                                       className='form-control'
                                       value={contact.gender}
                                       onChange={onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <input type="text"
                                       placeholder='Phone'
                                       name='phone'
                                       className='form-control'
                                       value={contact.phone}
                                       onChange={onChange}
                                />
                            </div>
                            <input type="submit" className='btn btn-outline-warning btn-block mt-4'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
