
const welcome = () => {
    console.log("Hello FrondEnd Developers");
}
welcome();
// http://api.nbp.pl/api/exchangerates/tables/a/today/  --tabela a z dziś 
// http://api.nbp.pl/api/exchangerates/rates/{table}/{code}/today/  
const getAPI = (event) => {
    event.preventDefault();
    const result__check = document.querySelector(".result__check")
    const check__CodeCountry = document.querySelector('[name = "check__CodeCountry"]').value;
    const url = `http://api.nbp.pl/api/exchangerates/rates/A/${check__CodeCountry}/today`;
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
            const resultApi = json;
            console.log(resultApi)
            console.log(resultApi.rates[0].mid)
            fiat__price = resultApi.rates[0].mid;
            result__check.innerHTML = `Kurs = ${fiat__price} ${check__CodeCountry}`
           

        })
        .catch((error) => console.log(error, "błąd"))
        }

const button = document.querySelector(".check__button")
    button.addEventListener("click", getAPI)