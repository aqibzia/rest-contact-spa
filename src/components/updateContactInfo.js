import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

export const UpdateContactInfo = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:4000/api/contacts/'+props.match.params.id)
            .then(res => {
                setName(res.data.data.name);
                setEmail(res.data.data.email);
                setGender(res.data.data.gender);
                setPhone(res.data.data.phone);
            })
            .catch(err => {
                console.log("Error from UpdateContactInfo");
            })
    }, [props.match.params.id]);

    const updateContact = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            gender: gender,
            phone: phone
        };

        axios
            .put('http://localhost:4000/api/contacts/'+props.match.params.id, data)
            .then(res => {
                props.history.push('/');
            })
            .catch(err => {
                console.log(`${err} Error in creatContact!`);
            })

    };

    const deleteContact = (e) => {
      e.preventDefault();
      const data = {
          name: name,
          email: email,
          gender: gender,
          phone: phone
      };

      axios
          .delete('http://localhost:4000/api/contacts/'+props.match.params.id)
          .then(res => {
              props.history.push('/');
          })
          .catch(err => {
              console.log(`${err} Error in deleting contact!`);
          })
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
                                value={name}
                                onChange={e => setName(e.target.value)}
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
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="author">Gender</label>
                            <input
                                type='text'
                                placeholder='Gender'
                                name='gender'
                                className='form-control'
                                value={gender}
                                onChange={e => setGender(e.target.value)}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="description">Phone</label>
                            <input
                                type='text'
                                placeholder='Phone'
                                name='phone'
                                className='form-control'
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </div>
                        <button type="button" onClick={updateContact} className="btn btn-outline-info btn-lg btn-block">Update Contact</button>
                        <button type="button" onClick={deleteContact} className="btn btn-outline-info btn-lg btn-block">Delete Contact</button>
                    </form>
                </div>

            </div>
        </div>
    );
};
