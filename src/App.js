import Contacts from "./Components/AddContacts";
import Phonebook from "./Components/Phonebook";
import Filter from "./Components/Filter";
import s from "./Components/Phonebook.module.css";

const App = () => {
  return (
    <section className={s.container}>
      <Contacts />
      <Filter />
      <Phonebook />
    </section>
  );
};
export default App;
