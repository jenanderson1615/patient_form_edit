import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PatientModel from "./store/PatientModel";
import { getSnapshot } from 'mobx-state-tree';

let patient = PatientModel.create();
patient.loadPatient();

ReactDOM.render(<App patient={patient}/>, document.getElementById('root'));
registerServiceWorker();
