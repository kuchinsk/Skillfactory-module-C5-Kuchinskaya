// Задание 2:

const jsonString = `
{
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
}
`;

const data = JSON.parse(jsonString);
const list = data.list
const result = {'list': []}

for (let node of list) {
    const people = {
        name: node.name,
        age: node.age,
        prof: node.prof
    }
    result.list.push(people)
}

console.log(result)
