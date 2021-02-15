import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import firebase from '../config/firebase'
import { AuthContext } from '../AuthService'
import googlelogin from '../img/btn_google_signin_light_focus_web.png'
import facebooklogin from '../img/fb_button.png'

const Login = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/") //"/"に遷移
            })
            .catch(err => {
                console.log(err)
            })
    }
    const user = useContext(AuthContext)

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider)
            .then(user => {
                history.push("/") //"/"に遷移
            })
            .catch(error => {
                alert(error.message)
            })
    }

/*-------------------------facebook-------------------------- */
    const signInWithFacebook = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;// The signed-in user info.
                var user = result.user;// This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var accessToken = credential.accessToken;
            })
            .catch((error) => {
                    alert(error.message);
        }); 
    }
    
/*----------------------------------------------------------- */

    if (user) {
        return <Redirect to="/" />
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='email'
                        placeholder='password'
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
            <div><a href="/signup">新規登録</a></div>
            {/* <div className={}> lineloginと合わせて設定する*/}
            <img src={googlelogin} onClick={() => signInWithGoogle()} alt="google signin" />
            {/* </div> */}
            <img src={facebooklogin} onClick={() => signInWithFacebook()} alt="facebook signin" />
        </>
    )
}

export default Login