import s from "./Phonebook.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../Redux/selectors";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { addContactAction } from "../Redux/actions";

export default function Phonebook() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const repeatName = contacts.find((contact) => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (!repeatName) {
      Notify.success(`${name} is added in contacts`);
      dispatch(addContactAction(name, number));
      setNumber("");
      setName("");
      return;
    }
    Notify.warning(`${name} is already in contacts`);
  };

  return (
    <>
      <h2 className={s.phonebookTitle}>Phonebook</h2>
      <form className={s.phonebookList} onSubmit={formSubmit}>
        <label>Name</label>
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>Number</label>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}
