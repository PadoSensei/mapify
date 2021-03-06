import React from 'react'
import PropTypes from 'prop-types'
import css from './icon.module.css'
import icons from './icons'

Icon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
}

function Icon(props) {
  let className = css.icon
  className += ` ${css[props.type]}`
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      className={className}
    >
      <path d={icons[props.name]} />
    </svg>
  )
}

export default Icon
