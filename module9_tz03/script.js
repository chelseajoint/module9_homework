//поиск кнопки
const cta = document.getElementById('button');

//создаем экземпляр класса XMLHttpRequest
const xhr = new XMLHttpRequest();

//создаем функцию запроса и обработки
cta.addEventListener('click', () => {
  //поиск инпутa
  const input = document.getElementById('input').value;
  //поиск дива для вставки реззултата запроса
  const result = document.getElementById('result');

  //если число попадает в диапазон от 1 до 10
  if(input >= 1 && input <= 10){
    const url = `https://picsum.photos/v2/list?limit=${input}`;
    //открываем новый запрос
    xhr.open("GET", url);
    //устанавливаем responseType. Теперь XHR знает, что сервер будет возвращать JSON
    xhr.responseType = 'json';
    //отправляем запрос
    xhr.send();
    //ожидание ответа на возврат с сервера, извлечение и добавление данных в HTML
    xhr.onload = () => {
      let resultContent = xhr.response;
      //console.log(resultContent);
      let content ='';
      resultContent.forEach(function(resultContent){
        let contentBlock = `
           <img src="${resultContent.download_url}"/>
           <p>${resultContent.author}</p>`;
        content = content + contentBlock;
        result.innerHTML = content;
      });
    };
  }else{ //если число не попадает в диапазон от 1 до 10 ввыводим текст
    result.innerHTML = `<p>число вне диапазона от 1 до 10</p>`;
  }
});
