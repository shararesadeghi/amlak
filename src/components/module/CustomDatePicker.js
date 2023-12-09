import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import styles from "@/module/CustomDatePicker.module.css";

const CustomDatePicker = ({ profileData, setProfileData }) => {
  const changleHandler = (e) => {
    const date = new Date(e);
    setProfileData({ ...profileData, constructionDate: date });
  };
  return (
    <div className={styles.container}>
      <p> تاریخ ساخت</p>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        value={profileData.constructionDate}
        onChange={changleHandler}
      />
    </div>
  );
};

export default CustomDatePicker;
