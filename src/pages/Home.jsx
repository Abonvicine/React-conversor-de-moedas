import { useState } from 'react'
import '../styles/home.css'

export function Home(){

    const fatoresDeConversao ={
        real:{
            real: 1.00,
            dolar:0.20,
            iene:22.45,
            simbolo:"R$"
        },
        dolar:{
            real:4.95,
            dolar:1.00,
            iene:110.78,
            simbolo:"US$"
        },
        iene:{
            real:0.045,
            dolar:0.0090,
            iene:1.00,
            simbolo:"¥"
        }
    }

    const [moedas,setMoedas] = useState(["real","dolar"]);
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

    function converterMoedas(){
        const novoValor = valor*fatoresDeConversao[moedas[0]][moedas[1]];
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
                    <option value="dolar">Dólar</option>
                    <option value="real">Real</option>
                    <option value="iene">Iene</option>
                </select>

                <select name='moeda 1' id="segunda-moeda"
                    onChange = {mudarMoedas} value={moedas[1]}>
                    <option value="dolar">Dólar</option>
                    <option value="real">Real</option>
                    <option value="iene">Iene</option>
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
                        <span> Valor Convertido: {fatoresDeConversao[moedas[1]]["simbolo"]} {valorConvertido}</span> 
                    )
                }
            </div>
        </main>
        </>
    )
}