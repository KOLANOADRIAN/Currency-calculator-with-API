
const form__trade = () => {
    console.log("Hello Frond__EndDevelopers")
    console.log("Form Trade is conect");
}
form__trade();

window.addEventListener("load", function () {
    console.log("Form Trade is Load");
});

const Trade = (event) => {
    event.preventDefault();
    const trade__buy = document.querySelector(".trade__buy");
    const trade__sell = document.querySelector(".trade__sell");
    const form__inputFiat = document.querySelector(".form__inputFiat")
    const form__resultBuy = document.querySelector(".form__resultBuy")
    const form__resultSell = document.querySelector(".formresultSell")
    const form__resultTrade = document.querySelector(".form__resultTrade")
   

    const trade__CodeCountry = document.querySelector('[name="trade__CodeCountry"]').value;
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
            // console.log(tradeApi.rates[0].mid);
            const exchange = tradeApi.rates[0].mid;
            console.log(exchange)
            const input = form__inputFiat.value;
            console.log(input)
            const spred = 0.050;
            console.log("spred: " + spred);
            form__resultTrade.innerHTML = (`
            <span class="" > Średni kurs NBP waluty ${trade__CodeCountry} w przeliczeniu do PLN: ${exchange} </span><br>
            <strong> Spred wynosi: ${spred} <strong><br>
            `)
            const buy = trade__buy.checked;
            console.log(trade__buy.checked);
            const sell = trade__sell.checked;
            console.log(trade__sell.checked);

            if (buy === true) {
                console.log("zaznaczono kup")
                let calculate__buy = exchange + spred;
                const calculateResultBuy = calculate__buy * input;
                console.log(`domyślnie przeliczono na walutę Fiat PLN ${calculateResultBuy.toFixed(2)}`);
                form__resultBuy.innerHTML = (`
                <span class=""> Zaznaczono Zakup </span><br>
                <span class=""> Wprowadzona ilość do wymiany: ${input}</span><br>
                <span class="" > Domyślnie w przeliczeniu na walutę Fiat PLN otrzymasz: ${calculateResultBuy.toFixed(2)} zł</span>
                `)

            }
            else if (sell === true) {
                console.log("zaznaczono Sprzedaj")
                let calculate__sell = exchange - spred;
                const calculateResultSell = calculate__sell * input;
                console.log(`domyślnie przeliczono na walutę Fiat PLN ${calculateResultSell.toFixed(2)}`);
                form__resultSell.innerHTML = (`
                 <span class=""> Zaznaczono Sprzedaż </span><br>
                 <span class=""> Wprowadzona ilość od wymiany: ${input}</span><br>
                 <span class="" > Domyślnie w przeliczeniu na walutę Fiat PLN otrzymasz: ${calculateResultSell.toFixed(2)}</span>
               
                `)

            }
        })
        .catch((error) => console.log(error, "błąd"))



}

const button = document.querySelector(".form__tradeButton")
button.addEventListener("click", Trade)