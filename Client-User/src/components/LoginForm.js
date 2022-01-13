import React from 'react'
import Togglable from './Togglable'

function LoginForm ({ handleSubmit, username, hanleUsernameChange, password, handlePasswordChange }) {


  return (
    <>
      <Togglable buttonLable='LogIn'>
        {/* <div className="container text-center my-auto col-2"> */}
        <div className="container text-center mx-auto col-3">
          <form
            onSubmit={handleSubmit}
          >
            <div class="form-group pb-2">
              <input
                className="form-control"
                type="text"
                value={username}
                name="Username"
                placeholder='Username'
                onChange={hanleUsernameChange}
              />
            </div>
            <div class="form-group pb-3">
              <input
                className="form-control"
                type="password"
                value={password}
                name="Password"
                placeholder='Password'
                onChange={handlePasswordChange}
              />
            </div>
            <div class="d-grid gap-2 mx-auto pb-2">
              <button className="btn btn-success btn-block">
                Iniciar
              </button>
            </div>

          </form>
        </div>
      </Togglable>

    </>
  )
}

export default LoginForm
