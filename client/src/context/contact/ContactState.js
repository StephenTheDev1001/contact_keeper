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
                id: 1,
                name: 'Jim',
                email: 'jim@gmail.com',
                phone: '333-111-1111',
                type: 'personal'
            },
        ],
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

    // set current contact

    // update contact

    //clear current contact

    // filter contacts

    // clear filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                addContact
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState