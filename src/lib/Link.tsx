import React from 'react'
import { NavLink } from 'react-router-dom'

function Link(props) {
  return (
    <NavLink to={props.href} {...props}>{props.children}</NavLink>
  )
}

export default Link