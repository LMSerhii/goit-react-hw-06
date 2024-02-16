import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ contactList, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {contactList.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact id={id} name={name} number={number} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};
