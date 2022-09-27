import s from "./Phonebook.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getVisibleContacts } from "../Redux/selectors";
import { deleteContactAction } from "../Redux/actions";

export default function Contacts() {
  const contacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();

  const onDeleteContactCard = (id) => {
    dispatch(deleteContactAction(id));
  };

  return (
    
    <ul className={s.phonebookList}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.contact__item} key={id}>
          <p className={s.contact__description}>
            <span className={s.contact__name}>{name}:</span>
            <span>{number}</span>
          </p>
          <button
            className={s.contact__delete}
            onClick={() => onDeleteContactCard(id)}
          >
            <span>Delete</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
