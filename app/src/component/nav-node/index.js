import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr'

const NavNode = ({ element, isExpanded, toggleExpand, handleSelect, children }) => {
  if (!element) {
    return null
  }
  console.log(children)
  return (
    <li>
      <div className={styles.item}>
        <h4 onClick={() => {
          toggleExpand(element.id)
        }}>
          {children && (isExpanded ? <GrFormSubtract /> : <GrFormAdd />)}
        </h4>
        <h4 onClick={handleSelect}>{element.name}</h4>
      </div>

      {children}
    </li>
  )
}
NavNode.propTypes = {
  element: PropTypes.object,
  isSelected: PropTypes.bool,
  toggleExpand: PropTypes.func,
  handleSelect: PropTypes.func,
  children: PropTypes.node
}
export default NavNode