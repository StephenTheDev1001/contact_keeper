import ContactContext from "../../context/contact/contactContext"
import { useContext } from "react"
import ContactItem from "./ContactItem"

const Contacts = () => {
    const contactContext = useContext(ContactContext)

    const { contacts } = contactContext
    console.log(contacts);
    return (
        <>
            {contacts.map(contact => {
                return <ContactItem contact={contact} />
            })}
        </>
    )
}
export default Contacts