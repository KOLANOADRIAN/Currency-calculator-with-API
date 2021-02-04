

const Trade = (event) => {
    event.preventDefault();
    const form__tradeResult = document.querySelector(".form__tradeResult")
    const trade__CodeCountry = document.querySelector('[name = "trade__CodeCountry"]').value;
    const url = `http://api.nbp.pl/api/exchangerates/rates/A/${trade__CodeCountry}/today`
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
        // .then((json) => { 
           
        // })
        .catch((error) => console.log(error, "błąd"))
        }

const button = document.querySelector(".form__tradeButton")
    button.addEventListener("click", Trade)