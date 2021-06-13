import React from 'react'
import styles from '../styles/Input.module.css'

export function Input(props){
    const name = props.name
    const placeholder = `insira o valor em ${name}`
    return(
        <div>
            <input 
                className = {styles.Input}
                name= {name} 
                type = "number" 
                placeholder={placeholder}
            />
        </div>
    )
}