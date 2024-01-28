import css from "./SearchBox.module.css";
import { FcSearch } from "react-icons/fc";

export const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.container}>
      <p className={css.description}>Find contacts by name <FcSearch className={css.icon}/>
 </p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
        
      />
    </div>
  );
};
