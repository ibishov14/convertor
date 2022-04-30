const right = document.querySelectorAll('#right');
const left = document.querySelectorAll('#left');
const p = document.querySelector('p');
const daxilet2 = document.getElementById('daxilet2');
const daxilet1 = document.getElementById('daxilet1');
const button = document.querySelectorAll('button');
const cevirme = document.getElementById('cevirme');
const cevirme2 = document.getElementById('cevirme2');




let valyuta = 'USD';
let valyuta2 = 'RUB'; 

right.forEach(event => {
    event.addEventListener('click', function () {
        valyuta = this.innerText
        getvalue()
    })
});

left.forEach(event => {
    event.addEventListener('click', function () {
        valyuta2 = this.innerText
        getvalue()
    })
});

daxilet1.addEventListener('keyup', function () {
    getvalue()
})

function same() {
    daxilet1.addEventListener('keyup', function () {
        daxilet2.value = daxilet1.value
    })
};

const getvalue = async () => {
    let out;
    await fetch(`https://api.exchangerate.host/latest?base=${valyuta2}&symbols=${ valyuta}`)
        .then(response => response.json())
        .then((data) => {
            out = Object.values(data.rates)[0]
            console.log(data)
        })
    if ((valyuta == 'RUB') && (valyuta2 == 'RUB')) {
        daxilet2.value = daxilet1.value
    }
    if ((valyuta == 'RUB') && (valyuta2 == 'EUR')) {
        daxilet2.value = daxilet1.value * out
        cevirme.innerText = '1 EUR = ' + out + ' RUB'
        cevirme2.innerText = '1 RUB = ' + 1 / out + ' EUR'
    }
    if ((valyuta == 'RUB') && (valyuta2 == 'USD')) {
        daxilet2.value = daxilet1.value * out
        cevirme.innerText = '1 USD = ' + out + ' RUB'
        cevirme2.innerText = '1 RUB = ' + 1 / out + ' USD'
    }
    if ((valyuta == 'RUB') && (valyuta2 == 'AZN')) {
        daxilet2.value = daxilet1.value * out
        cevirme.innerText = '1 AZN = ' + out + ' RUB'
        cevirme2.innerText = '1 RUB = ' + 1 / out + ' AZN'
    }
    else if ((valyuta == 'USD') && (valyuta2 == 'USD')) {
        daxilet2.value = daxilet1.value
    }
    else if ((valyuta == 'USD') && (valyuta2 == 'EUR')) {
        daxilet2.value = daxilet1.value * out
        cevirme.innerText = '1 EUR = ' + out + ' USD'
        cevirme2.innerText = '1 USD = ' + 1 / out + ' EUR'
    }
    else if ((valyuta == 'USD') && (valyuta2 == 'RUB')) {
        daxilet2.value = daxilet1.value * out
        cevirme.innerText = '1 RUB = ' + out + ' USD'
        cevirme2.innerText = '1 USD = ' + 1 / out + ' RUB'
    }
    else if ((valyuta == 'USD') && (valyuta2 == 'AZN')) {
        daxilet2.value = daxilet1.value * out
        cevirme.innerText = '1 AZN = ' + out + ' USD'
        cevirme2.innerText = '1 USD = ' + 1 / out + ' AZN'
    }
    else if ((valyuta == 'EUR') && (valyuta2 == 'EUR')) {
        daxilet2.value = daxilet1.value
    }
    else if (( valyuta == 'EUR') && (valyuta2 == 'USD')) {
        daxilet2.value = daxilet1.value * out
        cevirme.innerText = '1 USD = ' + out + ' EUR'
        cevirme2.innerText = '1 EUR = ' + 1 / out + ' USD'
    }
    else if ((valyuta == 'EUR') && (valyuta2 == 'RUB')) {
        daxilet2.value = daxilet1.value * out
        cevirme.innerText = '1 RUB = ' + out + ' EUR'
        cevirme2.innerText = '1 EUR = ' + 1 / out + ' RUB'
    }
    else if ((valyuta == 'EUR') && (valyuta2 == 'AZN')) {
        daxilet2.value = daxilet1.value * out
        cevirme.innerText = '1 AZN = ' + out + ' EUR'
        cevirme2.innerText = '1 EUR = ' + 1 / out + ' AZN'
    }
    else if ((valyuta == 'AZN') && (valyuta2 == 'AZN')) {
        daxilet2.value = daxilet1.value
    }
    else if ((valyuta == 'AZN') && (valyuta2 == 'EUR')) {
        daxilet2.value = daxilet1.value * out
        cevirme.innerText = '1 EUR = ' + out + ' AZN'
        cevirme2.innerText = '1 AZN = ' + 1 / out + ' EUR'
    }
    else if ((valyuta == 'AZN') && (valyuta2 == 'RUB')) {
        daxilet2.value = daxilet1.value * out;
        cevirme.innerText = '1 RUB = ' + out + ' AZN'
        cevirme2.innerText = '1 AZN = ' + 1 / out + ' RUB'
    }
    else if ((valyuta == 'AZN') && (valyuta2 == 'USD')) {
        daxilet2.value = daxilet1.value * out
        cevirme.innerText = '1 USD = ' + out + ' AZN'
        cevirme2.innerText = '1 AZN = ' + 1 / out + ' USD'
    }
}

right.forEach((event) => {
    event.addEventListener('click', function () {
        right.forEach((event) => {
            event.classList.remove('active')
            this.classList.add('active')
        })
    })
})

left.forEach((event) => {
    event.addEventListener('click', function () {
        left.forEach((event) => {
            event.classList.remove('active')
            this.classList.add('active')
        })
    })
});

function check() {
    right.forEach((event) => {
        event.addEventListener('click', function () {
            right.forEach((event) => {
                event.classList.remove('active')
                this.classList.add('active')
            })
        })
    });
    left.forEach((event) => {
        event.addEventListener('click', function () {
            right.forEach((event) => {
                event.classList.remove('active')
                this.classList.add('active')
            })
        })
    })
}