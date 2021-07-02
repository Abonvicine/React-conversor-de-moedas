export async function fetchCurrencyAPI(moeda1,moeda2) {
    if(moeda1===moeda2){
        const fatorDeConversao = 1
        return fatorDeConversao
    }else{
        const url = `https://economia.awesomeapi.com.br/last/${moeda1}-${moeda2}`
        const response = await fetch(url);
        const fatorDeConversao = await response.json();
        return fatorDeConversao[`${moeda1}${moeda2}`]["ask"]
    }
}