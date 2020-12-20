import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthService'
import NoProfile from '../img/no-profile.png';
import firebase from '../config/firebase';
import styles from '../profile.module.css'

const Profile = () => {
    const [image, setImage] = useState(null);
    const user = useContext(AuthContext);

    useEffect(()=> {
        if (user) {
            firebase.storage().ref().child(`image/${user.uid}/profile`)
            .getDownloadURL().then((downloadURL) => {
            setImage(downloadURL)
            }) 
        }
     }, [user])
     console.log(image)

    const upLoadImage = (e) => {
        const files = e.target.files
        let blob = new Blob(files, {type: "image/jpeg" });
        
        const uploadRef = firebase.storage().ref().child(`image/${user.uid}/profile`)
        const uploadTask = uploadRef.put(blob);

        uploadTask.then(() => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {   
                setImage(downloadURL)
                console.log('new!',image)

            })
            .then(() => {
                user.updateProfile({
                    photoURL: image
                })
            })
        }) 

    }


    return (
        <div>
            <div className={styles.imagePreview}>
                 <img 
                  className={styles.image} 
                  src={ image !== null ? image : NoProfile }
                  alt="プロフィール画像"
                  />
            </div>    
                <label htmlFor="image" className={styles.label}>
                <input 
                    className={styles.input}
                    type="file"
                    id="image"
                    onChange={(e) => upLoadImage(e)}
                />
                <svg width="2em"　height="2em" viewBox="0 0 16 16" className="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                </label>
        </div>
    )
};

export default Profile;