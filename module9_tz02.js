//создаем переменную json
const jsonString = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;
//console.log(jsonString);

//создаем переменную объект
const result = [];

//парсим json
const jsonStringParse = JSON.parse(jsonString);
//console.log(jsonStringParse);

//выводим объект
const info = jsonStringParse.list;
console.log(info);
