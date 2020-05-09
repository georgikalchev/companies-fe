import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import cx from 'classnames'
import { GrCaretNext } from 'react-icons/gr'

const NavNode = ({ element, isExpanded, toggleExpand, handleSelect, children }) => {
  if (!element) {
    return null
  }
  return (
    <li className={cx(styles.item, isExpanded && styles.selected)}>
      <h4 className={cx(styles.chevron, isExpanded && styles.expanded)}
          onClick={(e) => {
            e.stopPropagation()
            toggleExpand(element.id)
          }}>
        <GrCaretNext />
      </h4>
      <h4 onClick={handleSelect}>{element.name}</h4>
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