import React, { useRef, useEffect } from "react";
import styles from "./FilterDropdown.module.scss";
import { filterIcon } from "../../../utils/getimage";

const options = ["Hammasi", "Tekshirilgan", "Tekshirilmagan", "Topshirilmagan"];

export default function FilterDropdown({ selected, setSelected }) {
  const [open, setOpen] = React.useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={ref}>
      <div className={styles.selected} onClick={() => setOpen(!open)}>
       <img className={styles.icon} src={filterIcon} alt="" /> {selected || "Hammasi"}
      </div>
      {open && (
        <ul className={styles.menu}>
          {options.map((opt, idx) => (
            <li
              key={idx}
              className={opt === selected ? styles.active : ""}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
