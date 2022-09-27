import s from "./Phonebook.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../Redux/selectors";
import { filterChangeAction } from "../Redux/actions";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onFilterChange = (event) =>
    dispatch(filterChangeAction(event.target.value));

  return (
    <div className={s.filter}>
      <h2>Contacts</h2>
      <label className={s.filter__label}>Find contacts by name: </label>
      <input
        className={s.filter__input}
        type="text"
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default Filter;
