
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
    const form__inputFiat = document.querySelector(".form__inputFiat");
    const form__resultBuy = document.querySelector(".form__resultBuy");
    const form__resultSell = document.querySelector(".formresultSell");
    const form__resultTrade = document.querySelector(".form__resultTrade");
   

    const trade__CodeCountry = document.querySelector('[name="trade__CodeCountry"]').value;
    const url__trade = `http://api.nbp.pl/api/exchangerates/rates/A/${trade__CodeCountry}/`;
    fetch(url__trade)
        .then((answer) => {
            if (answer.status !== 200) {
                throw Error("to nie jest odpowiedz 200")
            } else {
                return answer.json()
            }
        })
        .then((json) => {
            const tradeApi = json;
            const exchange = tradeApi.rates[0].mid;
            const input = form__inputFiat.value;
            const spred = 0.050;
            form__resultTrade.innerHTML = (`
            <span class="" > Średni kurs NBP waluty ${trade__CodeCountry} w przeliczeniu do PLN: ${exchange.toFixed(2)} </span><br>
            <strong> Spred wynosi: ${spred} <strong><br>
            `)
            const buy = trade__buy.checked;
            console.log(buy)
            const sell = trade__sell.checked;
            console.log(sell)
            if (buy === true) {
                let calculate__buy = exchange + spred;
                const calculateResultBuy = calculate__buy * input;
                form__resultBuy.innerHTML = (`
                <span class=""> Zaznaczono Zakup </span><br>
                <span class=""> Chcesz kupić ${input} ${trade__CodeCountry} po kursie zakupu ${calculate__buy.toFixed(2)} zł</span><br>
                <span class=""> Całkowity koszt zakupu: ${calculateResultBuy.toFixed(2)} zł</span>
                `)
            }
            else if (sell === true) {
                let calculate__sell = exchange - spred;
                const calculateResultSell = calculate__sell * input;
                form__resultSell.innerHTML = (`
                 <span class=""> Zaznaczono Sprzedaż </span><br>
                 <span class=""> Chcesz sprzedać ${input} ${trade__CodeCountry} po kursie sprzedaży ${calculate__sell.toFixed(2)} zł</span><br>
                 <span class=""> Całkowita kwota po sprzedaży: ${calculateResultSell.toFixed(2)} zł</span>
               
                `)
            }
        })
        .catch((error) => console.log(error, "błąd"))



}

const button = document.querySelector(".form__tradeButton")
button.addEventListener("click", Trade)