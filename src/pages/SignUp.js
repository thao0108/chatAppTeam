import React, { useState } from 'react'
import firebase from '../config/firebase'

const SignUp = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({
                    displayName: name
                })
                history.push("/login")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        name='email'
                        type='email'
                        id='email'
                        placeholder='Email'
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        name='password'
                        type='password'
                        id='password'
                        placeholder='Password'
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='名前'>名前</label>
                    <input
                        name='name'
                        type='name'
                        id='name'
                        placeholder='名前'
                        onChange={e => {
                            setName(e.target.value)
                        }}
                    />
                </div>
                <button type='submit'>Sign Up</button>
                <div><a href="/login">ログイン</a></div>
            </form>
        </div>
    )
}

export default SignUp