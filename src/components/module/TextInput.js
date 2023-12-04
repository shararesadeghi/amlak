"use client";
import styles from'@/module/TextInput.module.css';

const TextInput = ({title,name,profileData,setProfileData,textArea = false}) => {
    const changeHandler=(e)=>{
        const {name,value} = e.target;
        setProfileData({...profileData,[name]:[value]});
    }
    return (
        <div className={styles.container}>
            <p>{title}:</p>
            {textArea ?
             <textArea tyep="text" name={name} value={profileData[name]} onChange={changeHandler}/> : <input type="text" name={name} value={profileData[name]} onChange={changeHandler}/>}
        </div>
    );
};

export default TextInput;