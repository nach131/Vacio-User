import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Togglable = forwardRef(({ children, buttonLable }, ref) => {

  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  //Metodo para cabir el estado visible desde el padre(NoteForm)
  const toggleVisibility = () => setVisible(!visible)

  // Este metodo se llamara desde Padre
  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{buttonLable}</button>
      </div>

      <div style={showWhenVisible}>
        {children}
        <button onClick={toggleVisibility}> Cancelar </button>
      </div>
    </div>
  )
})

export default Togglable
