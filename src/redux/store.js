// import { combineReducers } from 'redux';
import contactsReducer from './contacts/contactsReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
