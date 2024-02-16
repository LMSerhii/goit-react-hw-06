import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { getContacts } from '../../redux/itemsSlice';
import css from './ContactList.module.css';

export const ContactList = ({ onDelete }) => {
  const contacts = useSelector(getContacts);

  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact id={id} name={name} number={number} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};
