
const form__trade = () => {
    console.log("form Trade is conect");
}
form__trade();
// https://api.nbp.pl/api/exchangerates/tables/A/ 
const Trade = (event) => {
    event.preventDefault();
    const trade__buy = document.querySelector(".trade__buy");
    const trade__sell = document.querySelector(".trade__sell");
    const form__inputFiat = document.querySelector(".form__inputFiat")
    const form__resultExchange = document.querySelector(".form__resultExchange")
    const form__resultBuy = document.querySelector(".form__resultBuy")
    const formresultSell = document.querySelector(".formresultSell")
    const form__resultTrade = document.querySelector(".form__resultTrade")
    const form__resultInput = document.querySelector(".form__resultInput")
    const form__resultOnChange = document.querySelector(".form__resultOnChange")

    const trade__CodeCountry = document.querySelector('[name="trade__CodeCountry"]').value;
    // const result__CodeCountry = document.querySelector('[name="result__CodeCountry"]').value;
    const url__trade = `http://api.nbp.pl/api/exchangerates/rates/A/${trade__CodeCountry}/`;
    fetch(url__trade)
        .then((answer) => {
            console.log(answer)
            if (answer.status !== 200) {
                throw Error("to nie jest odpowiedz 200")
            } else {
                return answer.json()
            }
        })
        // .then((json) => console.log(json))
        .then((json) => {
            const tradeApi = json;
            console.log(tradeApi);
            console.log(tradeApi.rates[0].mid);
            const exchange = tradeApi.rates[0].mid;
            console.log(exchange)
            console.log("Ilość do wymiany: " + form__inputFiat.value);
            const input = form__inputFiat.value;
            const spred = 0.050;
            console.log("spred: " + spred);
           
            form__resultExchange.innerHTML = (`
            <span class=""> Średni kurs NBP wybranej waluty: ${trade__CodeCountry} to: ${exchange} PLN<span><br>
            <span class=""> spred: ${spred}<span><br>
            `)

            form__resultInput.innerHTML = (` <span class=""> Wprowadzona ilość ${trade__CodeCountry} do wymiany: ${input}<span><br>`)
            const buy = trade__buy.checked;
            console.log(trade__buy.checked);
            if (buy === true && sell === false) {
                console.log("zaznaczono kup")
                let calculate__buy = exchange + spred;
                const calculateResultBuy = calculate__buy * input;
                console.log(`domyślnie przeliczono na walutę Fiat PLN ${calculateResultBuy.toFixed(2)}`);
               
                // .innerHTML = (`
                // <span class="">Kurs kupna: ${calculate__buy}<span>
                // `)
            }
            const sell = trade__sell.checked;
            console.log(trade__sell.checked);
            if (sell === true && buy === false) {
                console.log("zaznaczono Sprzedaj")
                let calculate__sell = kurs - spred;
                const calculateResultSell = calculate__sell * input;
                console.log(`domyślnie przeliczono na walutę Fiat PLN ${calculateResultSell.toFixed(2)}`);
            }
            
            
           
           
        })
        .catch((error) => console.log(error, "błąd"))
        
    const result__CodeCountry = document.querySelector('[name="result__CodeCountry"]').value;
    const url__result = `http://api.nbp.pl/api/exchangerates/rates/A/${result__CodeCountry}/`;
    fetch(url__result)
        .then((answer) => {
            console.log(answer)
            if (answer.status !== 200) {
                throw Error("to nie jest odpowiedz 200")
            } else {
                return answer.json()
            }
        })
        // .then((json) => console.log(json))
        .then((json) => {
            const resultApi = json;
            console.log(resultApi);
            console.log(resultApi.rates[0].mid);
            const onChnange = resultApi.rates[0].mid;
            console.log("Przelicz na: " + onChnange);
           
        })
        .catch((error) => console.log(error, "błąd"))

        
}

const button = document.querySelector(".form__tradeButton")
button.addEventListener("click", Trade)