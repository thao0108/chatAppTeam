import React, { useEffect, useState, useContext } from 'react'
import firebase from '../config/firebase'
import { AuthContext } from '../AuthService'
import styles from '../room.module.css'
import NoProfile from '../img/no-profile.png'


const Room = () => {
    const [messages, setMessages] = useState(null)
    const [image, setImage] = useState('')
    const [value, setValue] = useState('')

    const user = useContext(AuthContext)
    firebase.firestore().collection('messages')

    useEffect(() => {
        firebase.firestore().collection('messages')
            .orderBy('date', 'asc')
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })

                setMessages(messages)
            })

        firebase.storage().ref().child(`image/${user.uid}/profile`)
            .getDownloadURL().then((downloadURL) => {
                setImage(downloadURL)
            })
    }, [user])



    const handleSubmit = e => {
        e.preventDefault()
        setValue('')
        firebase.firestore().collection('messages').add({
            user: user.displayName,
            image: image,
            content: value,
            date: new Date()
        })
        setMessages([
            ...messages,
            {
                user: user.displayName,
                image: image,
                email: user.email,
                content: value

            }
        ])
    }
    console.log(messages)

    return (
        <>
            <h1>Room</h1>
            <ul>
                {
                    messages ?
                        messages.map((message, index) => (
                            <li className={styles.chat} key={index}>
                                <div className={styles.avatar}>
                                    <img src={message.image ? message.image : NoProfile} className={styles.image} alt="チャットアイコン" />
                                </div>
                                <div>
                                    {message.user}: {message.content}
                                </div>

                            </li>
                        )) :
                        <p>...loading</p>
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button type="submit">送信</button>
            </form>

        </>
    )
}


export default Room