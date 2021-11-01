function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
window.addEventListener('load', () => {
    let id = 1;
    const preloader = document.createElement('div');
    preloader.classList.add('card');
    preloader.classList.add('preloader');
    preloader.classList.add('disabled');
    let card_title = document.createElement('div');
    let card_title_h2 = document.createElement('h2');
    card_title_h2.innerHTML = "";
    card_title.appendChild(card_title_h2);
    let card_hr = document.createElement('hr');
    card_hr.setAttribute('style', 'border-color: green;');
    let card_body = document.createElement('div');
    card_body.classList.add('card-body');
    card_body.setAttribute('id', "-1");
    card_body.innerHTML = "<img src='../res/preloader.gif'>";
    preloader.appendChild(card_title);
    preloader.appendChild(card_hr);
    preloader.appendChild(card_body);
    preloader.classList.add('card');
    const cards = document.getElementById("cards");
    cards.appendChild(preloader);
    document.getElementById("add-card").addEventListener('click', function (e) {
        preloader.classList.remove('disabled');
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                let card = document.createElement('div');
                if (Object.keys(json).length) {
                    card.classList.add('card');
                    let card_title = document.createElement('div');
                    let card_title_h2 = document.createElement('h2');
                    card_title_h2.innerHTML = json.title;
                    card_title.appendChild(card_title_h2);
                    let card_hr = document.createElement('hr');
                    card_hr.setAttribute('style', 'border-color: green;');
                    let card_body = document.createElement('div');
                    card_body.classList.add('card-body');
                    card_body.setAttribute('id', id);
                    card_body.innerHTML = json.body;
                    card.appendChild(card_title);
                    card.appendChild(card_hr);
                    card.appendChild(card_body);
                    id = id + 1;
                }
                else {
                    alert("⚠ Что-то пошло не так");
                }
                sleep(2000);
                preloader.classList.add('disabled');
                cards.insertBefore(card, preloader);
            })
            .catch(error => {
                console.error(error);
            })
    });
})


