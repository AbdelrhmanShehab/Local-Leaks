import { React } from "react";
import "./SettingsProfileHeader.module.css";
import style from "./SettingsProfileHeader.module.css";
const SettingsProfileHeader = ({ settingsTitle, settingsDesc }) => {
  return (
    <div className={style.headerSection}>
      <header className={style.SettingsHeader}>
        <h1 className={style.title}>{settingsTitle}</h1>
        <p className={style.subtitle}>{settingsDesc}</p>
      </header>
      <hr className={style.separatorSettingsHeader} />
    </div>
  );
};
export default SettingsProfileHeader;
