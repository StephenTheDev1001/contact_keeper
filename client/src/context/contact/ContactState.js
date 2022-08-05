import { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'J Jonson',
                email: 'j@gmail.com',
                phone: '111-111-1111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'B Bonson',
                email: 'B@gmail.com',
                phone: '222-111-1111',
                type: 'personal'
            },
            {
                id: 3,
                name: 'C Conson',
                email: 'C@gmail.com',
                phone: '333-111-1111',
                type: 'professional'
            },
        ],
        current: null
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // Add Contact
    const addContact = contact => {
        contact.id = uuidv4()
        dispatch({
            type: ADD_CONTACT,
            payload: contact,
        })
    }
    // delete contact
    const deleteContact = id => {
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        })
    }
    // Set Current Contact
    const setCurrent = contact => {
        dispatch({
            type: SET_CURRENT,
            payload: contact
        })
    }
    // Clear current contact
    const clearCurrent = () => {
        dispatch({
            type: CLEAR_CURRENT
        })
    }

    // update contact
    const updateContact = contact => {
        dispatch({
            type: UPDATE_CONTACT,
            payload: contact
        })
    }
    // filter contacts

    // clear filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact
            }}
        >

            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState