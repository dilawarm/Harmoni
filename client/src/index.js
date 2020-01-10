// @flow

//import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom';
import * as React from 'react';
import { HashRouter, Route} from 'react-router-dom';
import {Login} from "./Containers/Login";
import {Alert} from "./widgets";
import {RegistrationForm} from "./Containers/Event/Components/registrationFormEvent";
import {ArtistDetails} from "./Containers/Event/Components/artist";
import {Ticket} from "./Containers/Event/Components/ticketDropdown";
import {Artist} from "./Containers/Event/Components/artist";


import { RegOrganization } from './Containers/Organization/Components/registerOrgForm';
import {EventList} from "./Containers/Event/Components/showEvents";

const root = document.getElementById('root');
if (root)
  ReactDOM.render(
    <HashRouter>
    <Route path="/event" component={RegistrationForm}/>
      <div>
          <Alert></Alert>
          <Login></Login>
      </div>

    </HashRouter>,
    root
  );

