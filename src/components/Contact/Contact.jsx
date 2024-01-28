import css from "./Contact.module.css";
import { FcPhone, FcReading  } from "react-icons/fc";
export const Contact = ({ value, onDelete }) => {
  return (
    <>
      <li className={css.items}>
        <p className={css.nameItem}><FcReading className={css.icons}/>{value.name}</p>
        
        <p className={css.numberItem}><FcPhone className={css.icons}/>{value.number}</p>
        <button className={css.btn} onClick={() => onDelete(value.id)}>
          Delete
        </button>
      </li>
    </>
  );
};
