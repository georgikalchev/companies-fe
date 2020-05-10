import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import { GrFormAdd, GrFormSubtract } from 'react-icons/gr'

const NavNode = ({ element, isExpanded, toggleExpand, handleSelect, children }) => {
  if (!element) {
    return null
  }
  return (
    <li>
      <div className={styles.item}>
        <h3 onClick={() => {
          toggleExpand(element.id)
        }}>
          {isExpanded ? <GrFormSubtract /> : <GrFormAdd />}
        </h3>
        <h3 className={isExpanded ? styles.expanded : undefined} onClick={handleSelect}>{element.name}</h3>
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