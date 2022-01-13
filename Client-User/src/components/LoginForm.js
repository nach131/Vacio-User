import React from 'react'
import Togglable from './Togglable'

function LoginForm ({ handleSubmit, username, hanleUsernameChange, password, handlePasswordChange }) {


  return (
    <>
      <Togglable buttonLable='Login'>
        <form
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={username}
            name="Username"
            placeholder='Username'
            onChange={hanleUsernameChange}
          />
          <input
            type="password"
            value={password}
            name="Password"
            placeholder='Password'
            onChange={handlePasswordChange}
          />
          <button className="btn btn-primary">
            Login
          </button>
        </form>
      </Togglable>

    </>
  )
}

export default LoginForm
