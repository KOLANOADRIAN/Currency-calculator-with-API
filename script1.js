
const welcome = () => {
    console.log("Hello FrondEnd Developers");
}
welcome();
// http://api.nbp.pl/api/exchangerates/tables/a/today/  --tabela a z dziś 
// http://api.nbp.pl/api/exchangerates/rates/{table}/{code}/today/  
const getAPI = (event) => {
    event.preventDefault();
    const result__checkt = document.querySelector(".result__checkt")
    const CheckCodeCountry = document.querySelector('[name = "CheckCodeCountry"]').value;
    const url = `http://api.nbp.pl/api/exchangerates/rates/A/${CheckCodeCountry}/today`
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
            fiatPrice = resultApi.rates[0].mid;
            result__checkt.innerHTML = `Wybrana przez ciebie waluta: ${CheckCodeCountry} Obecny kurs = ${fiatPrice}`
           

        })
        .catch((error) => console.log(error, "błąd"))
        }

const button = document.querySelector(".button")
    button.addEventListener("click", getAPI)