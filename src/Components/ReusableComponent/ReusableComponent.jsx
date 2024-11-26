import style from './ReusableComponent.module.css';


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
