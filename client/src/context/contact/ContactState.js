import { useReducer } from "react"
import { v4 as uuidv4 } from 'uuid'
import ContactContext from "./contactContext"
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
                name: 'Bobby',
                email: 'bob@gmail.com',
                phone: '111-111-1111',
                type: 'professional'
            },
            {
                id: 2,
                name: 'Sara',
                email: 'sara@gmail.com',
                phone: '222-111-1111',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Jim',
                email: 'jim@gmail.com',
                phone: '333-111-1111',
                type: 'personal'
            },
        ],
        current: null,
        filtered: null
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // add contact
    const addContact = contact => {
        contact.id = uuidv4()
        dispatch({
            type: ADD_CONTACT,
            payload: contact
        })
    }

    // del contact
    const deleteContact = id => {
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        })
    }

    // set current contact
    const setCurrent = contact => {
        dispatch({
            type: SET_CURRENT,
            payload: contact
        })
    }

    //clear current contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT })
    }

    // update contact
    const updateContact = contact => {
        dispatch({
            type: UPDATE_CONTACT,
            payload: contact
        })
    }


    // filter contacts
    const filterContacts = text => {
        dispatch({
            type: FILTER_CONTACTS,
            payload: text
        })
    }

    // clear filter
    const clearFilter = text => {
        dispatch({
            type: CLEAR_FILTER,
        })
    }

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState