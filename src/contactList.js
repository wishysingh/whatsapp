import React from 'react';
import Contact from './contact';

const ContactList = ({contacts,ContactClick}) => {

    const contactComponent = contacts.map((i) =>{

        return <Contact key={i.phone} phone={i.phone} ContactClick={ContactClick} name={i.name} last_message={i.last_message} last_message_time={i.last_message_time}/>
    });
    return (
        <div class="row sideBar">
            {contactComponent}
        </div>
    )
}
export default ContactList;