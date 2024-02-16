import { IconContext } from 'react-icons';
import { FaUserAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import css from './Contact.module.css';
import { deleteContacts } from '../../redux/itemsSlice';
import { useDispatch } from 'react-redux';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

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
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContacts(id))}
      >
        <IoClose size={32} />
      </button>
    </div>
  );
};
