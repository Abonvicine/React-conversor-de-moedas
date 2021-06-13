import React from 'react'
import { Button } from './Button'
import { Selection } from './Selection'
import styles from '../styles/Main.module.css'

export function Main(){
    return(
        <div className = {styles.Field}>
            <Selection name ="Moeda 1"/>
            <span className={styles.mainSpan}>Converter para:</span>
            <Selection name ="Moeda 2"/>

            <div className = {styles.buttonsField}>
                <Button description= "Converter"/>
                <Button description= "Inverter"/> 
            </div>
        </div>
    )
}