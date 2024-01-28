import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = ({ value, onDelete }) => {
  return (
    <ul className={css.wrapper}>
      {value.map((item) => (
        <Contact key={item.id} value={item} onDelete={onDelete} />
      ))}
    </ul>
  );
};
