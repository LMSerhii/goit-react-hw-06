import { useId } from 'react';
import css from './SearchBox.module.css';

export const SearchBox = ({ value, onChange }) => {
  const searchBoxId = useId();

  return (
    <div className={css.searchBox}>
      <label className={css.label} htmlFor={searchBoxId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        value={value}
        id={searchBoxId}
        onChange={evt => onChange(evt.target.value)}
      />
    </div>
  );
};
