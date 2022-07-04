//создание экземпляра класса DOMParser. Он поpволит нам парсить xml
const parser = new DOMParser();

//переменная xml для парсинга
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
//console.log(xmlString);

//создаем переменную объект
const list = [];

//парсим xml
const xmlDOM = parser.parseFromString(xmlString, 'text/xml');
//console.log(xmlDOM);

//находим студентов
const students = xmlDOM.querySelectorAll('student');
//console.log(students);

//перебираем студентов
students.forEach(node => {
  let student = {
    name: `${node.querySelector('first').textContent} ${node.querySelector('second').textContent}`,
    age: `${node.querySelector('age').textContent}`,
    prof: `${node.querySelector('prof').textContent}`,
    lang: `${node.querySelector('name').getAttribute('lang')}`
  }
  list.push(student);
})

console.log(list);
