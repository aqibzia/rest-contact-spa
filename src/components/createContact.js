import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

export const CreateContact = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            gender: gender,
            phone: phone
        };

        axios
            .post('http://localhost:4000/api/contacts', data)
            .then(res => {
                setName('');
                setEmail('');
                setGender('');
                setPhone('');
                // props.history.push('/');
            })
            .catch(err => {
                console.log('Error in creatContact!');
            })

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
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <input type="text"
                                       placeholder='Email'
                                       name='email'
                                       className='form-control'
                                       value={email}
                                       onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <input type="text"
                                       placeholder='Gender'
                                       name='gender'
                                       className='form-control'
                                       value={gender}
                                       onChange={e => setGender(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <input type="text"
                                       placeholder='Phone'
                                       name='phone'
                                       className='form-control'
                                       value={phone}
                                       onChange={e => setPhone(e.target.value)}
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
