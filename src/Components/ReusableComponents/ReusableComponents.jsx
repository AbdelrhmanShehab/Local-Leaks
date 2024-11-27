import React from "react";
import style from "./ReusableComponents.module.css"



// small button component/
export const SmallButton = () => {
  return (
    <>
      <button className={style.smallButton}>Join now</button>
    </>
  );
};


// Checkbox
export const Checkbox = ({ id, label, checked, onChange }) => {
    return (
        <li className={style.checkBox}>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={id}>{label}</label>
        </li>
    );
};
