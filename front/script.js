const url = 'http://localhost:8080'

const buttonPlus = document.getElementById('plus');
const plusLabel = document.getElementById('p-label');

const buttonMinus = document.getElementById('minus');
const minusLabel = document.getElementById('m-label');

var Button;
(function (Button) {
    Button['PLUS'] = 'PLUS';
    Button['MINUS'] = 'MINUS';
})(Button || (Button = {}));

buttonPlus.onclick = () => {
    const request = JSON.stringify({btn: Button.PLUS});
    fetch(url, {
        method: 'PATCH',
        body: request,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            plusLabel.innerText = data.plus;
            minusLabel.innerText = data.minus;
        });
}

buttonMinus.onclick = () => {
    const request = JSON.stringify({btn: Button.MINUS});
    fetch(url, {
        method: 'PATCH',
        body: request,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            plusLabel.innerText = data.plus;
            minusLabel.innerText = data.minus;
        });
}
