//поиск кнопки
const cta = document.getElementById('button');

//создаем экземпляр класса XMLHttpRequest
const xhr = new XMLHttpRequest();
//создаем url

//создаем функцию кнопки
cta.addEventListener('click', () => {
  //поиск и вычесление инпутов
  const inputPage = document.getElementById('input_page').value;
  const inputLimit = document.getElementById('input_limit').value;
  //записываем данные импутов
  localStorage.setItem('page',inputPage);
  localStorage.setItem('limit',inputLimit);
  //поиск дива для вставки реззультата запроса
  let result = document.getElementById('result');

  //если оба числа попадают в диапазон от 1 до 10
  if(inputPage >= 1 && inputPage <= 10 && inputLimit >= 1 && inputLimit <= 10){
    resultDisplay(inputPage, inputLimit, `https://picsum.photos/v2/list?page=${inputPage}&limit=${inputLimit}`);
  }else{ //если число не попадает в диапазон от 1 до 10 ввыводим текст
    if(inputPage >= 1 && inputPage <= 10){
      result.innerHTML = `<p>Лимит вне диапазона от 1 до 10</p>`;
    }else if(inputLimit >= 1 && inputLimit <= 10){
      result.innerHTML = `<p>Номер страницы вне диапазона от 1 до 10</p>`;
    }else{
      result.innerHTML = `<p>Номер страницы и лимит вне диапазона от 1 до 10</p>`
    };
  }
});

//если есть сохранненые данные
document.addEventListener("DOMContentLoaded", () => {
  //чтение данных
  let page = localStorage.getItem('page');
  let limit = localStorage.getItem('limit');
  //загрузка данных
  if(page && limit){
    resultDisplay(page, limit, `https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
  };
});

//создаем функцию запроса и обработки
function resultDisplay(inputPage, inputLimit, url){
  //открываем новый запрос
  xhr.open("GET", url);
  //устанавливаем responseType. Теперь XHR знает, что сервер будет возвращать JSON
  xhr.responseType = 'json';
  //отправляем запрос
  xhr.send();
  //ожидание ответа на возврат с сервера, извлечение и добавление данных в HTML
  xhr.onload = () => {
    let resultContent = xhr.response;
    let content ='';
    resultContent.forEach(function(resultContent){
      let contentBlock = `
      <img src="${resultContent.download_url}"/>
      <p>${resultContent.author}</p>`;
      content = content + contentBlock;
      result.innerHTML = content;
    });
  };
};
