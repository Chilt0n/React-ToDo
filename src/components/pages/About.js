import React from 'react'

function About() {
  return (
    <React.Fragment>
      <h1 style={headerstyle}>About</h1>
      <p style={paragraphstyle}>This is a TodoList app v1.0.0.</p>
    </React.Fragment>
  )
}

const headerstyle = {
  marginTop: '80px',
  textAlign: 'center'
}

const paragraphstyle = {
  marginTop: '10px',
  textAlign: 'center'
}

export default About;