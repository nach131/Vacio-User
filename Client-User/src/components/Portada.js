import React, { useState, useEffect } from 'react'

import { loginServices, setToken } from '../services/login'
import LoginForm from './LoginForm'

function Portada () {

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
      <div className="text-center mx-auto col-4">
        <div className="error pb-3 alert alert-dismissible alert-danger">
          <h4>
            {message}
          </h4>
        </div>
      </div>
    )
  }


  return (
    <main className="index">
      <header className="masthead d-flex">
        <div className="container text-center my-auto">
          <h1 className="mb-1 portada">Control</h1>
          <h3 className="mb-3 portada">
            <em>enunpimpam</em>
          </h3>
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
      </header>
    </main>
  )
}

export default Portada
