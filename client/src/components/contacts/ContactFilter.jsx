import ContactContext from '../../context/contact/contactContext'
import { useContext, useRef, useEffect } from 'react'

const ContactFilter = () => {
  const contactContext = useContext(ContactContext)
  const text = useRef('');

  // Destructuring
  const { clearFilter, filterContacts, filtered } = contactContext

  useEffect(() => {
    if (filtered === null) {
      text.current.value = ''
    }
  }, [filtered])

  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value)
    } else {
      clearFilter();
    }
  }

  return (
    <form>
      <input ref={text} type="text" placeholder='Filter Contacts...' onChange={onChange} />
    </form>
  )
}
export default ContactFilter