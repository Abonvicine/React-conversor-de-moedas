import React from 'react'
import styles from '../styles/Button.module.css'

export function Button(props){
    return <button className = {styles.mainButton}>{props.description}</button>
}
