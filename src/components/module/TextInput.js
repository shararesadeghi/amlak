import {p2e} from '@/utils/replaceNumber';
import styles from'@/module/TextInput.module.css';

const TextInput = ({title,name,profileData,setProfileData,textarea = false}) => {
    const changeHandler=(e)=>{
        const {name,value} = e.target;
        setProfileData({...profileData,[name]:p2e(value)});
    }
    return (
        <div className={styles.container}>
            <p>{title}:</p>
            {textarea ?
             <textarea tyep="text" name={name} value={profileData[name]} onChange={changeHandler}/> : <input type="text" name={name} value={profileData[name]} onChange={changeHandler}/>}
        </div>
    );
};

export default TextInput;