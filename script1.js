
const welcome = () => {
    console.log("Hello FrondEnd Developers");
}
welcome();
// http://api.nbp.pl/api/exchangerates/tables/a/today/  --tabela a z dziś 
// http://api.nbp.pl/api/exchangerates/rates/{table}/{code}/today/  
const getAPI = (event) => {
    event.preventDefault();
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
        .then((json) => console.log(json))
            // .then((json) => {
            // let rezultat = json;
            // console.log(rezultat)
        .catch((error) => console.log(error, "błąd"))
        }

const button = document.querySelector(".button")
    button.addEventListener("click", getAPI)