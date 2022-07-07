//поиск кнопки
const cta = document.getElementById('button');

//создаем функцию запроса и обработки
cta.addEventListener('click', () => {
  //поиск инпутов
  const input1 = document.getElementById('input1').value;
  const input2 = document.getElementById('input2').value;
  //поиск дива для вставки реззультата запроса
  let result = document.getElementById('result');

  if(input1 >= 100 && input1 <= 300 && input2 >= 100 && input2 <= 300){
    fetch(`https://picsum.photos/${input1}/${input2}`)
    .then(function(response) {
      return response.blob();
    })
    .then(function(myBlob) {
      let objectURL = URL.createObjectURL(myBlob);
      result.innerHTML = `<img src="${objectURL}"/>`;
    });
  }else{
    result.innerHTML = `<p>одно из чисел вне диапазона</p>`;
  };
});
