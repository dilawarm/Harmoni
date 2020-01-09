// @flow

//import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import * as React from 'react';
import { HashRouter, Route} from 'react-router-dom';
import {Login} from "./Containers/Login";
import {Alert} from "./widgets";
import {RegistrationForm} from "./Containers/Event/Components/registrationFormEvent";
import {Ticket} from "./Containers/Event/Components/ticketDropdown";
import {Artist} from "./Containers/Event/Components/artist";


const root = document.getElementById('root');
if (root)
  ReactDOM.render(
    <HashRouter>
      <div>
          <Alert></Alert>
          <Route path = "/" component={Artist}/>
      </div>
    </HashRouter>,
    root
  );

//Remember to add <Login></Login>