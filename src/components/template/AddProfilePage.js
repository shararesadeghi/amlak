"use client";
import {useState} from 'react';
import styles from '@/template/AddProfilePage.module.css';

const AddProfilePage = () => {
    const [profileData,setProfileData] = useState({
        title:"",
        description:"",
        location:"",
        phone:"",
        price:"",
        realState:"",
        constructionDate:new Date(),
        category:"",
        rules:[],
        amenities:[],

    })
    return (
        <div>
            
        </div>
    );
};

export default AddProfilePage;