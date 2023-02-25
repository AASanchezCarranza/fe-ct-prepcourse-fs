/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   if(num > 0) {
      return "Es positivo"
   }
   if(num < 0) {
      return "Es negativo"
   }
   else {
      return false
   }
}

function agregarSimboloExclamacion(str) {
   return str + "!"
}

function combinarNombres(nombre, apellido) {
   return nombre + " " + apellido
}

function obtenerSaludo(nombre) {
   return "Hola " + nombre + "!"
}

function obtenerAreaRectangulo(alto, ancho) {
   return ancho * alto
}

function retornarPerimetro(lado) {
   return lado * 4
}

function areaDelTriangulo(base, altura) {
   return (base * altura) / 2
}

function deEuroAdolar(euro) {
   return euro * 1.2
}

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   if(letra === "a" || "e" || "i" || "o" || "u"){
      return "Es vocal"
   }
   return "Dato incorrecto"
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
