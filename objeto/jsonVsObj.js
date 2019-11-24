const obj = {a: 1,b: 2,c: 3, soma(){return a + b + c}}
const json = '{"nome": "Augusto", "carros": {"ferrari": {"modelo": "F40","velmax": 200},"volvo": {"modelo": "BBBB","velmax": 3200}}}'
console.log(JSON.stringify(obj))
console.log(JSON.parse(json))

const aluno = JSON.parse(json)
console.log(aluno.nome)