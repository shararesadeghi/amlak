import { FiCircle } from 'react-icons/fi';
import styles from '@/template/HomePage.module.css';

const HomePage = () => {
    const services = ["خرید", "فروش", "رهن", "اجاره"];
    const cities = [
      "تهران",
      "سنندج",
      "کرمانشاه",
      "اهواز",
      "مشهد",
      "اصفهان",
      "شیراز",
      "خرم آباد",
    ];
  return (
    <div>
        <div className={styles.banner}>
            <div className={styles.desc}>
                <h1>سامانه خرید و اجاره ملک</h1>
                <ul>
                    {services.map(item=>
                        <li key={item}>
                            <FiCircle/>
                            <span>{item}</span>
                        </li>)}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HomePage