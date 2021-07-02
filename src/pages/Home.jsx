import { useEffect, useState } from 'react'
import '../styles/home.css'
import { fetchCurrencyAPI } from '../api/fetchAPI';

export function Home(){

    const [moedas,setMoedas] = useState(["BRL","USD"]);
    const [valor,setValor] = useState(1.00)
    const [valorConvertido,setValorConvertido] = useState(0.20)
    const [convertido,setConvertido] = useState(true)

    function mudarMoedas(event){
        switch (event.target.id){
            case 'primeira-moeda':
                setMoedas([event.target.value,moedas[1]]);
                setConvertido(false)
                break;
            case 'segunda-moeda':
                setMoedas([moedas[0],event.target.value]);
                setConvertido(false)
                break;
        }
    }

    function inverterMoedas(){
        setMoedas([moedas[1],moedas[0]]);
        setConvertido(false)
    }

    function atualizaValor(event){
        setValor(event.target.value)
        setConvertido(false)
    }

    async function converterMoedas(){
        const data = await fetchCurrencyAPI(moedas[0],moedas[1])
        const novoValor = valor*parseFloat(data);
        console.log(data)
        setValorConvertido(novoValor)
        setConvertido(true)
    }

    return(
        <>
        <header id='nav-bar'>
            <div>

            </div>
        </header>

        <main>
            <div className = "seletor-de-moedas">

                <select 
                    name='moeda 1' id="primeira-moeda"
                    onChange = {mudarMoedas} value={moedas[0]}>
                    <option value="USD">Dólar</option>
                    <option value="BRL">Real</option>
                    <option value="JPY">Iene</option>
                </select>

                <select name='moeda 1' id="segunda-moeda"
                    onChange = {mudarMoedas} value={moedas[1]}>
                    <option value="USD">Dólar</option>
                    <option value="BRL">Real</option>
                    <option value="JPY">Iene</option>
                </select>
                
                <button onClick = {inverterMoedas}>
                    Inverter
                </button>

                <button onClick = {converterMoedas}>
                    Converter
                </button>

            </div>
            <div className = "resultados">
                <span>R$</span>

                    <input type="number" value={valor} onChange={atualizaValor}/>
                {
                    convertido && (
                        <span> Valor Convertido: {moedas[1]} {valorConvertido}</span> 
                    )
                }
            </div>
        </main>
        </>
    )
}