import React, { useState } from 'react'
import firebase from '../config/firebase'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(err => {
                console.log(err)
            })
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
                            setEmail(e.target.email)
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
                            setPassword(e.target.password)
                        }}
                    />
                </div>
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login