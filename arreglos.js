//Ejericicio#1
/*var array=[]
for (var index = 0; index < 10; index++) {
    array[index]=Math.random()
}
console.log(array)*/
//Ejericicio#2
/*
var ArrayText= window.prompt("Ingrese el texto separado por comas")
var array=ArrayText.split(',')
console.log(array)
*/
//Ejericicio#3
var arrayN=[10,40,30,20,15,5]
var ar2=arrayN.sort()
console.log("Array Ordenado: "+arrayN.sort(function(a, b){return a - b}))
console.log("Numero Mayor: "+Math.max(... arrayN))
console.log("Numero Menor: "+Math.min(... arrayN))

