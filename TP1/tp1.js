console.log('Hola desde Javascript')
//concatenación entre dos cadenas literales para que devuelva su edad en un console.log( “” )
var mi_edad='35';
console.log(`Mi edad es ${mi_edad} años.`)
//Utilice los elementos de valores numéricos para: Sumar, Restar, Dividir, multiplicar, dividir dos números
var numero1 = 10
var numero2 = 5

console.log("Suma:", numero1 + numero2)
console.log("Resta:", numero1 - numero2)
console.log("Multiplicación:", numero1 * numero2)
console.log("División:", numero1 / numero2)
//Utilizando condicionales múltiples, realice un <script> que verifique la edad de Jubilación de una persona.
var edad = prompt("Introduzca la edad para verificar si se puede jubilar.")
if (edad < 0) {
    console.log("La edad no puede ser un número negativo.")
} else if (edad < 65) {
    console.log("Aún no estás en edad de jubilación.")
} else {
    console.log("Ya estás en edad de jubilación.")
}
/*Ídem ejercicio anterior, verificando el sexo, siendo que la edad de Jubilación para el Hombre 
es de 65 años y la Mujer a los 60 años.*/
var edad2 = prompt("Introduzca la edad.")
var sexo = prompt("Introduzca su sexo.")
if (edad2 < 0) {
console.log("La edad no puede ser un número negativo.")    
}else if ((edad2 >=60 && sexo === "F") || (edad2 >= 65 && sexo === "M")){
console.log("Ya estás en edad de jubilación.");
}else{
    console.log("Aún no estás en edad de jubilación.")
}
//Realiza los cambios para generar un contador hasta el numero 10.
var cuenta
for(cuenta=1; cuenta<=10; cuenta ++)
{
    alert(cuenta)
}
/**Modifique el ejemplo para que nuestra página tenga una serie de botones para cambiar el color de 
fondo, de forma que un botón nos de un fondo rojo, otro de fondo verde, azul, etc. */
function cambiarColor(color)
{
    document.bgColor=color
}
/**Ejercicio: Modifique la matriz, para que cuando se ingrese un nombre que no existe en la lista 
arroje un alert “Nombre no existe en la lista”. */
var nombres=new Array()
nombres[0]="Nacho";
nombres[1]="Arek";
nombres[2]="Laure";
nombres[3]="Sonia";
nombres[4]="Gonzalo";
nombres[5]="Eva";
nombres[6]="Pedro";

document.write(nombres[0]+"<br>");
document.write(nombres[1]+"<br>");
document.write(nombres[2]+"<br>");
document.write(nombres[3]+"<br>");
document.write(nombres[4]+"<br>");
document.write(nombres[5]+"<br>");
document.write(nombres[6]+"<br>");

nombres[7]="Manuel";
document.write(nombres[7]+"<br>");

nombre_buscado = prompt("Ingrese un nombre")
encontrado=false
for(indice=0; indice<= nombres.length; indice ++){
    if (nombre_buscado === nombres[indice]) {
        document.write(`El nombre ${nombres[indice]} existe en la lista.`);
        encontrado=true
    } 
} 
if(!encontrado){
    document.write(`El nombre ${nombre_buscado} no existe en la lista.`);
}
/**Existe un método denominado Date, realice una tabla que devuelva los valores discriminados.
Obtención de datos de una fecha:
metodo – getFullYears(),getYear(),getMohth(),getDate(),getHourse(),getMinutes(),getSeconds(),getMiliseconds(),getTime() */
var now = new Date();
document.getElementById("getFullYears").textContent = now.getFullYear();
document.getElementById("getYear").textContent = now.getYear();
document.getElementById("getMonth").textContent = now.getMonth();
document.getElementById("getDate").textContent = now.getDate();
document.getElementById("getHours").textContent = now.getHours();
document.getElementById("getMinutes").textContent = now.getMinutes();
document.getElementById("getSeconds").textContent = now.getSeconds();
document.getElementById("getMilliseconds").textContent = now.getMilliseconds();
document.getElementById("getTime").textContent = now.getTime();