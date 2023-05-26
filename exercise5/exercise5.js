const btn = document.querySelector('button')
const div = document.querySelector('div')

function cheak (page, limit) {
    let cheakPage = ! isNaN(+page) && typeof (+page) == 'number' && +page>=1 && +page<=10
    let cheakLimit = ! isNaN(+limit) && typeof (+limit) == 'number' && +limit>=1 && +limit<=10
    if (!(cheakPage || cheakLimit)) {
        div.innerHTML = '<p>Номер страницы и лимит вне диапазона от 1 до 10</p>'
        return false
    }
    if (! cheakPage) {
        div.innerHTML = '<p>Номер страницы вне диапазона от 1 до 10</p>'
        return false
    }
    if (! cheakLimit) {
        div.innerHTML = '<p>Номер лимита вне диапазона от 1 до 10</p>'
        return false
    }
    else {
        return true
    }
}

function useRequest(url) {
    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .catch(() => {
            div.innerHTML = '<p>Произошла ошибка, пожалуйста повторите запрос</p>'
        });
};

function displayResult(requestResult) {
    let img = [];
    requestResult.forEach(item => {
        img += `<img
          src='${item.download_url}'
          width = 260px
        />
        <p>${item.author}</p>`
    })
    localStorage.removeItem('lastRequest')
    localStorage.setItem('lastRequest', JSON.stringify(img))
    console.log('JSON.stringify(img)', JSON.stringify(img))
    div.innerHTML = img;
}

btn.addEventListener('click', async () => {
    let page = document.querySelector('.page').value
    let limit = document.querySelector('.limit').value
    if (cheak(page, limit)) {
        let requestResult = await useRequest(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        displayResult(requestResult)
    }
});

document.addEventListener("DOMContentLoaded", () => {
    let data = localStorage.getItem('lastRequest')
    if (data != null) {
        div.innerHTML = JSON.parse(data)
    }
})