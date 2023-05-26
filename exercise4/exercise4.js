const btn = document.querySelector('button')
const div = document.querySelector('div')

function cheak (width, height) {
    if (! isNaN(+width) && typeof (+width) == 'number' && (+width)>=100 && (+width)<=300 &&
        ! isNaN(+height) && typeof (+height) == 'number' && (+height)>=100 && (+height)<=300) {
        return true
    }
    else {
        div.innerHTML = '<p>Одно из чисел вне диапазона от 100 до 300</p>'
        return false
    }
};

function useRequest(url) {
    return fetch(url)
        .then((response) => {
            return response.url;
        })
        .then((url) => {return url})
        .catch(() => {
            div.innerHTML = '<p>Произошла ошибка, попробуйте отправить запрос еще раз.</p>'
        })
};

btn.addEventListener('click', async () => {
    let width = document.querySelector('.width').value
    let height = document.querySelector('.height').value
    if (cheak(width, height)) {
        let requestResult = await useRequest(`https://picsum.photos/${width}/${height}`)
        div.innerHTML = `<img src="${requestResult}">`
    }
});