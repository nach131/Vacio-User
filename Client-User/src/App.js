import './App.css';
import React, { useState, useEffect } from 'react'

import { loginServices, setToken } from './services/login'
import LoginForm from './components/LoginForm'
import Portada from './components/Portada';

import 'bootswatch/dist/yeti/bootstrap.min.css'

function App () {

  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggerdUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggerdUserJSON) {
      const user = JSON.parse(loggerdUserJSON)
      setUser(user)
      setToken(user.token)
    }

  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const user = await loginServices({
        username,
        password
      })
      console.log(user)

      // Almacenar la sesion en localStorage
      window.localStorage.setItem(
        'loggedNoteAppUser', JSON.stringify(user)
      )
      // enviamos el toquen al middelweare notes
      setToken(user.token)

      setUser(user)
      setUsername('')
      setPassword('')

    } catch (e) {
      setErrorMessage('Error al iniciar sesión')

      //PARA QUE EL ERROR DESAPAREZCA

      setTimeout(() => {
        setErrorMessage(null)
      }, 4000)
    }
  }

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }

    return (
      <div className="error">
        {message}
      </div>
    )
  }


  return (
    <div className="App">
      <Portada />
      <Notification message={errorMessage} />
      {
        user
          ? <h1>Usuario login ok</h1>
          : <LoginForm
            username={username}
            password={password}
            hanleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
      }


    </div>
  );
}

export default App;
