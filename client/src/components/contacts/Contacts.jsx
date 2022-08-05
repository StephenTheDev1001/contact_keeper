import { useContext } from "react"
import ContactContext from "../../context/contact/contactContext"
import ContactItem from "./ContactItem"

const Contacts = () => {
    const contactContext = useContext(ContactContext)

    const { contacts } = contactContext

    return (
        <>
            {contacts.map(contact => <ContactItem contact={contact} />)}
        </>
    )
}
export default Contacts