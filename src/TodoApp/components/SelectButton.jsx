import React from 'react'
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

const SelectButton = ({children, id, ...rest}) => {
  return (
    <select 
      id={id}
      className={getClasses([
        styles.button,
        styles.button__select,
      ])}
      {...rest}
    >
      {children}
    </select>
  )
}

export default SelectButton;