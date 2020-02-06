import React, {useEffect, useState} from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {ContactCard} from './contactCard';

export const ShowContactList = (props) => {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:4000/api/contacts')
            .then(res => {
                setContacts(res.data.data)
            })
            .catch(err => {
                console.log('Error from contact list')
            })
    }, []);
    let contactsList;
    if(!contacts) {
        contactsList = "there is no contact record!";
    } else {
        contactsList = contacts.map((contact, k) =>
            <ContactCard contact={contact} key={k} />
        );
    }
    return (
        <div className="ShowBookList">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <br />
                        <h2 className="display-4 text-center">Contacts List</h2>
                    </div>

                    <div className="col-md-11">
                        <Link to="/create-contact" className="btn btn-outline-warning float-right">
                            + Add New Contact
                        </Link>
                        <br />
                        <br />
                        <hr />
                    </div>

                </div>

                <div className="list">
                    {contactsList}
                </div>
            </div>
        </div>
    );
};
