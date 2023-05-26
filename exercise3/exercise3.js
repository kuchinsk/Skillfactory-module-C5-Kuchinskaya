// Задание 3:
const btn =  document.querySelector('button');
const div =  document.querySelector('div');
function cheak (value) {
    if (! isNaN(+value) && typeof (+value) == 'number' && 1<=(+value) && (+value)<=10) {
        return true
        }
    else {
    div.innerHTML = '<p>Ввод не коректный, пожалуйста, введите число от 1 до 10</p>'
    return false
    };
};
function request(url) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
        if (xhr.status != 200) {
            div.innerHTML = '<p>Произошла ошибка, попробуйте еще раз</p>'
        }
        else {
            const result = JSON.parse(xhr.response)
            displayResult(result)
        }
    }
    xhr.send();
};

function displayResult(result) {
    let cards = '';
    result.forEach(item => {
        const cardBlock = `
      <div>
        <img
          src='${item.download_url}'
          width = 260px
        />
        <p>${item.author}</p>
      </div>
    `;
        cards = cards + cardBlock;
    });

    div.innerHTML = cards;
}


btn.addEventListener('click', function (){
    let value = document.querySelector('input').value;
    let url = 'https://picsum.photos/v2/list?limit=' + value
    if (cheak(value)) {
        request(url)
    }
})
