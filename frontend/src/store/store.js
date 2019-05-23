import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, applyMiddleware, combineReducers } from 'redux'
import landingReducer from '../modules/landing/state/LandingReducers'
import incidentReducer from '../modules/incident-filing/state/IncidentFiling.reducers';
import ongoingIncidentReducer from '../modules/ongoing-incidents/state/OngoingIncidents.reducers';

import sharedReducer from '../modules/shared/state/Shared.reducers';


const reducer = combineReducers({
    landingReducer,
    incidentReducer,
    sharedReducer,
    ongoingIncidentReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
    applyMiddleware(
        thunkMiddleware
    ))
);

export default store;
