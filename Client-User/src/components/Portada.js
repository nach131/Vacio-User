import React from 'react'

function Portada () {
  return (
    <main className="index">
      <header className="masthead d-flex">
        <div className="container text-center my-auto">
          <h1 className="mb-1 portada">Control</h1>
          <h3 className="-mb-5 portada">
            <em>enunpimpam</em>
          </h3>
          <a href="/signin" className="btn btn-primary"> Entrar </a>
        </div>
      </header>
    </main>
  )
}

export default Portada
