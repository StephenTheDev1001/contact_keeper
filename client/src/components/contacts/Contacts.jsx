import ContactContext from "../../context/contact/contactContext"
import { useContext } from "react"
import ContactItem from "./ContactItem"
import { v4 as uuidv4 } from 'uuid'

const Contacts = () => {
    const contactContext = useContext(ContactContext)

    const { contacts, filtered } = contactContext

    return (
        <>
            {filtered !== null
                ? filtered.map(contact => {
                    return <ContactItem key={contact.id} contact={contact} />
                })
                :
                contacts.map(contact => {
                    return <ContactItem key={contact.id} contact={contact} />
                })
            }
        </>
    )
}
export default Contacts