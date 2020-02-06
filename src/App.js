import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {CreateContact} from './components/createContact';
import {ShowContactList} from './components/showContactList';
import {UpdateContactInfo} from './components/updateContactInfo';
// import showContactDetails from './components/showContactDetails';

function App() {
  return (
    <Router>
      <div>
          <Route exact path='/' component={ShowContactList} />
          <Route path='/create-contact' component={CreateContact} />
          <Route path='/edit-contact/:id' component={UpdateContactInfo} />
          {/*<Route path='/show-contact/:id' component={showContactDetails} />*/}
      </div>
    </Router>
  );
}

export default App;
