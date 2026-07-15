import React from 'react'
import styles from './Button.module.css'

type btnProps = {
text: string,
style: React.CSSProperties
}

export const Button: React.FC<btnProps> = ({text, style}) => {
  return (
    <button style={style} className={styles.button}>{text}</button>
  )
}
