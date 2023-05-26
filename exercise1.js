// Задание 1:

const parser = new DOMParser();

const xmlString =  `<list>
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
</list>` ;

const list = []

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const studentNode = xmlDOM.querySelectorAll('student')

for (let node of studentNode){
    const student = {}
    student.name = `${node.querySelector('first').textContent} ${node.querySelector('second').textContent}`
    student.age = node.querySelector('age').textContent
    student.prof = node.querySelector('prof').textContent
    student.lang = node.querySelector('name').getAttribute('lang')
    list.push(student)
}
console.log('list: ', list)

