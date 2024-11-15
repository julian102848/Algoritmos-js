// Saludar


function Saludar(){
    alert("Hola Usuario");
}

function opBasicas() {
    // Declaró las variables necesarias para la ejecución
    let A = 0;
    let B = 0;
    let S = 0;
    let R = 0;
    let M = 0;
    let D = 0;
    // Notifico al ususario que realiza este algoritmo
    alert("Este Algoritmo realiza una suma, restas multiplicacion y divicion entre dis valores iniciados");
    // Capturar los datos de entrada o inputs
    A = parseInt(prompt("Porfavor ingrese el primer valor"));
    B = parseInt(prompt("Porfavor ingrese el segundo valor"));
    // Realizar el proceso
    S = A + B;
    R = A - B;
    M = A * B;
    D = A / B;

    // Dar el resultado 
    alert("El resultado de la suma es: " + S);
    alert("El resultado de la resta es: " + R);
    alert("El resultado de la multiplicación es: " + M);
    alert("El resultado de la divicion es: " + D);


}

function areaTriangulo() {
    let B,H,A = 0;

    alert("Este algoritmo calcula el area de un triangulo a partir de su base y su altura");

    B = parseInt(prompt("Ingrese el valor de Base"));
    H = parseInt(prompt("Ingrese el valor de Altura"));

    A = (B*H)/2;

    alert("El Area del triangulo es: " + A);
}

function conversionUnidades(){
    let m, p, cm, km = 0;

    alert("Este algoritmo convierte en centimetros, pulgadas y kilometros un valor dado en metros");

    m = parseInt(prompt("Ingrese el valor en metros a convertir"));

    p = m * 39.37;
    cm = m * 100;
    km = m / 1000;

    alert(m + " metros en pulgadas son: " + p);
    alert(m + " metros en centimetros son: " + cm);
    alert(m + " metros en kilometros son: " + km);
}


// Algoritmos condicionales

function servicioMilitar() {
    let edad = 0;
    let genero = "";
    let hijoUnico = "";
    
    alert("Algoritmo que determina si eres apto para prestar el servicio militar obligatorio");

    edad = parseInt(prompt("Por favor ingrese su edad"));
    genero = prompt("Por favor ingrese su genero: F- Femenino o M- Masculino");
    hijoUnico = prompt("Por favor ingrese Sí o Nó, de ser hijo unico");

    if (edad>=18 && edad<=26){

        if (genero === "M"){

            if (hijoUnico === "Nó"){

                alert("Eres apto para presta el servicio militar");

            }else{
                alert("No eres apto para presta el servicio militar");
            }
        }else{
            alert("No eres apto para presta el servicio militar");
        }
    }else{
        alert("No eres apto para presta el servicio militar");
    }
}


function mayorDosN() {
    
    let N1,N2 = 0;

    alert("Valida el mayor de dos números");

    N1 = parseInt(prompt("Ingrese el primer número"))
    N2 = parseInt(prompt("Ingrese el segundo número"));

    if (N1 === N2){
        alert("No hay nungun numero mayor");
    }else if (N1>N2){
        alert(N1 + " es mayor que " + N2);
    }else{
        alert(N2 + " es mayor que " + N1);
    }
}


function paroImpar() {
    
    let X=0;

    alert("Determina si un numero es par o impar");

    X = parseInt(prompt("Ingrese el numero a verificar"));

    if (X % 2 === 0){
        alert(X + " es un numero par");
    }else{
        alert(X + " es un numero impar");
    }
}


function rangoNumeros() {
    
    alert("Imprimir en consola los numeros existentes entre el valor inicial y el valor final")

    let inicio = parseInt(prompt("Ingrese el valor de punto de partida"));
    let fin = parseInt(prompt("Ingrese el valor del punto final"));

    let contador = inicio;

    while(contador <= fin){
        console.log(contador);

        contador ++;
    }

    alert("En consola mostraremos los numeros que hay entre " + inicio + " y " + fin);
}

function sumaRango() {
    
    alert("Suma los valores entre un rango ingresado");

    let inicio = parseInt(prompt("Ingrese el punto de partida"));
    let fin = parseInt(prompt("Ingrese el punto final"));

    let suma = 0;

    contador = inicio;

    while (contador <= fin){
        suma += contador;

        contador ++;
    }

    alert("La suma de los números del " + inicio + " al " + fin + " es " + suma);

}


function esPrimo() {
    
    alert("Este algoritmo determina si un número es primo");

    let numero = parseInt(prompt("Ingrese el número"));

    if (numero<=1){
        alert(numero + " no es número primo");
    }

    for(let i = 2; i <= numero/2; i++){

        if (numero % i === 0){
            alert(numero + " no es un número primo");
            return;
        }
    }
    alert(numero + " si es un número primo");
}


function conversionMoneda() {
    
    // Objeto como datos de partida
    let tasaCambio = {
        USD : 0.00028,
        EUR : 0.00024,
        YEN : 0.035
    }

    alert("Realiza la conversión de dinero en pesos colombianos a dolares, euros o yenes");

    let cantidadPesos = parseFloat(prompt("ingrese la cantidad de pesos colombianos a convertir"));
    let tasa = parseInt(prompt("Seleccione la divisa a cambiar: USD = 1, EUR = 2, YEN = 3"));
    let conversion;

    switch (tasa) {
        case 1:
            conversion = cantidadPesos * tasaCambio.USD;
            alert(cantidadPesos + " Pesos colombianos son " + conversion + " dolares");
            break;
        case 2:
            conversion = cantidadPesos * tasaCambio.EUR;
            alert(cantidadPesos + " Pesos colombianos son " + conversion + " euros");
            break;
        case 3:
            conversion = cantidadPesos * tasaCambio.YEN;
            alert(cantidadPesos + " Pesos colombianos son " + conversion + " yenes");
            break;
        default:
            alert("Tasa de cambio no permitida");
            break;
    }
}




function calcularPromedio() {
    
    alert("Este algoritma determina el promedio de calificaciones ingresadas por el usuario");

    let calificaciones = [];

    let cantidadNotas = parseInt(prompt("Ingrese la cantidad de calificaciones"));

    for (let i = 1; i <= cantidadNotas; i++){
        calificaciones.push(parseFloat(prompt("Ingrese la calificacion #" + i + " :")));
    }

    let sumaCalif = 0;
    for(let calificacion of calificaciones){
        sumaCalif += calificacion;
    }
    
    let promedio = sumaCalif/calificaciones.length;

    alert("El promedio de las calificaciones es: " + promedio);
}


function consultarPeli() {
    
    alert("Este algoritmo muestra la información de una pelicula elegida")

    let peliculas = [
        {
            titulo : "El padrino",
            director : "Nombre del director",
            anio : "1972",
            genero : "Drama"
        },
        {
            titulo : "Interestellar",
            director : "Nombre del director",
            anio : "2014",
            genero : "Ficciín"
        },
        {
            titulo : "Harry Potter",
            director : "Nombre del director",
            anio : "2008",
            genero : "Ficción"
        }
    ];

    let nombrePelicula = prompt("Por favor ingrese el nombre de la pelicula");

    let infoPelicula = "";

    for (let pelicula of peliculas){
        if (pelicula.titulo === nombrePelicula){
        infoPelicula = "Titulo: " + pelicula.titulo + "\n" +
                           "Director: " +  pelicula.director + "\n" +
                           "Año: " + pelicula.anio + "\n" +
                           "Genero: " + pelicula.genero;
                           break;
        }
    }

    if (infoPelicula !== ""){
        alert("La pelicula consultada tiene la siguiente información " + infoPelicula)
    }else{
        alert("La pelicula no se encuentra dentro de nuestro sistema")
    }
}

