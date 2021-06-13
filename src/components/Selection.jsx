import React, { useState } from 'react'
import { Input } from './Input'
import styles from '../styles/Selection.module.css'

export function Selection(props){
    
    function mudarMoeda(e){
        const moeda = e.target.value
        console.log(moeda)
        setMoedas(moeda)
    }

    const [moeda, setMoedas] = useState("Real")
    const listaMoedas = ["Dólar","Real","Iene"]

    const options = listaMoedas.map(element => {
        return (<option value={element}>{element}</option>)
    })

    return(
        <div className = {styles.selectionContainer}>
            <select className={styles.mainSelection} id={props.name} 
                    value = {moeda} 
                    name={props.name} 
                    onChange={mudarMoeda}>
                {options}
            </select>

            <Input name = {moeda}/>
        </div>
   )
}