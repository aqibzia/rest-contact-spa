import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export const ContactCard = (props) => {
    const contact = props.contact;
    return (
        <div className="card-container">
            <div className="desc">
                <h2>{ contact.name }</h2>
                <h3>{contact.email}</h3>
                <p>{contact.gender}</p>
                <p>{contact.phone}</p>
                <Link to={`/edit-contact/${contact._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Contact
                </Link>
                <button type="button" onClick={() => props.deleteContact(contact._id)} className="btn btn-outline-info btn-lg btn-block">Delete Contact</button>
            </div>
        </div>
    );
};
