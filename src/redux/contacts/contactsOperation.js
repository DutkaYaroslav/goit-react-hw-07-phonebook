import contactsAction from './contactsAction';
import axios from 'axios';

const addTask = (name, number) => disPatch => {
  disPatch(contactsAction.addTaskRequest());

  axios
    .post('http://localhost:2000/contacts', { name, number, competed: false })
    .then(response => {
      disPatch(contactsAction.addTaskSuccess(response.data));
    })
    .catch(error => disPatch(contactsAction.addTaskError()));
};

const fetchContacts = () => dispatch => {
  dispatch(contactsAction.getFetchRequest());

  axios
    .get('http://localhost:2000/contacts')
    .then(({ data }) => dispatch(contactsAction.getFetchSuccess(data)))
    .catch(error => dispatch(contactsAction.getFetchError(error)));
};

const removeContact = id => dispatch => {
  dispatch(contactsAction.removeContactRequest());

  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => dispatch(contactsAction.removeContactSuccess(id)))
    .catch(error => dispatch(contactsAction.removeContactError(error)));
};

export default {
  addTask,
  fetchContacts,
  removeContact,
};
