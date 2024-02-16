import { IconContext } from 'react-icons';
import { FaUserAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

import css from './Contact.module.css';

export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.contact}>
      <div>
        <p className={css.name}>
          <FaUserAlt className={css.icon} /> {name}
        </p>
        <p className={css.number}>
          <FaPhoneAlt className={css.icon} /> {number}
        </p>
      </div>
      <button className={css.button} type="button" onClick={() => onDelete(id)}>
        <IconContext.Provider value={{ size: '2em' }}>
          <IoClose />
        </IconContext.Provider>
      </button>
    </div>
  );
};
