
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
    const form__tradeResult = document.querySelector(".form__tradeResult")
    const trade__CodeCountry = document.querySelector('[name="trade__CodeCountry"]').value;
    const url = `http://api.nbp.pl/api/exchangerates/rates/A/${trade__CodeCountry}/`;
    fetch(url)
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
            const kurs = tradeApi.rates[0].mid;
            console.log(form__inputFiat.value);
            const input = form__inputFiat.value;
            let calculate = kurs * input;
            console.log(calculate)
            const spred = 0.50;
            console.log(spred);
            const buy = trade__buy.checked;
            console.log(trade__buy.checked);
            if (buy === true) {
                console.log("zaznaczono kup")
            }
            
        })
        .catch((error) => console.log(error, "błąd"))
        }

const button = document.querySelector(".form__tradeButton")
    button.addEventListener("click", Trade)