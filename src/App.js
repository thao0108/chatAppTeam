import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Room from './pages/Room'
import TabList from './tab/TabList'
import Profile from './profile/Profile'
import { Container } from 'react-bootstrap'
import { AuthProvider } from './AuthService'
import LoggedInRoute from './LoggedInRoute'
import classes from './style.module.css'
import Menubar from './Menubar'
import Writings from './writings/Writings'
import logo from './img/logo.png'
import TodoApp from './todo/TodoApp'


const App = () => {
    return (
        <>
            <header>
                <div className={classes.header}>
                    <img src={logo} className={classes.logo} />
                </div>
            </header>
            <AuthProvider>
                <Router>
                    <Menubar />
                    <Container>
                        <Switch>
                            <Route exact path='/Login' component={Login} />
                            <Route exact path='/SignUp' component={SignUp} />
                            <LoggedInRoute exact path='/' component={Room} />
                            <Route exact path='/todo' component={TodoApp} />
                            <Route exact path='/album' component={Writings} />
                            <Route exact path='/profile' component={Profile} />
                            <Route exact path='/recommend' component={TabList} />
                        </Switch>
                    </Container>
                </Router>
            </AuthProvider>
            <footer className={classes.footer}>2021年1月17日卒業</footer>
        </>
    )
}

export default App