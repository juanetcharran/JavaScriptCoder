let isAdult = false;

function adult() {
    let age = prompt("Indicanos tu edad, recordá que debés ser mayor de 18 años.")
    isAdult = age >= 18;
}


const user = {
    userName: "Juan",
    password: "12345",
};

let isAuthenticated = false;

function login() {
    let userName = prompt("Indicá tu nombre de Usuario");
    let password = prompt("Indicá tu contraseña");

    if (userName === user.userName && password === user.password) {
        isAuthenticated = true;
        alert("Bienvenido, estás listo para comprar!!!")
    }
    else {
        //  isAuthenticated = false;  podemos sacarlo porque ya está definido anteriormente.
        alert("El usuario o la contraseña ingresada es incorrecta.")
    }
}

function menu() {
    let flag = true;
    while (flag) {
        let promptResponse = prompt("Elegí una de las dos opciones: 1-Realizar pedido 2-Salir");
        let selectMenu = Number(promptResponse);
        switch (selectMenu) {
            case 1:
                alert("Empezá a comprar!");
                buy(); //ver si está bien poner acá el código
                break;
            case 2:
                flag = false;
                break;
            default:
                alert("Tenés que elegir alguna de las otras opciones");
                break;
        }
    }
}

function buy() {
    let flagTwo = true;
    while (flagTwo) {
        let promptResponse = prompt("Elegí el tipo de pedido: 1-Promociones 2-Bebidas sueltas 3-Volver para atrás");
        let selectBuy = Number(promptResponse);
        switch (selectBuy) {
            case 1:
                alert("Mirá nuestras promociones!");
                break;
            case 2:
                alert("Elegí tus opciones de bebidas!");
                break;    
            case 3:
                flagTwo = false;
                break;
            default:
                alert("Tenés que elegir alguna de las otras opciones");
                break;
        }
    }
    // armar combos e items
}

function buyOrder() {

}

const promo = [
    {nombre: "Fernet 1L con coca 2.25L", precio: 16000},
    {nombre: "Campari 0.75L con Cepita 1L", precio: 10000},
    {nombre: "Gin Tanqueray 0.75L con Tónica 2L", precio: 12000},
];

const drink = [
    {nombre: "Coca 2.25L", precio: 4500},
    {nombre: "Fernet 1L", precio: 12000},
    {nombre: "Campari 0.75L", precio: 8500},
    {nombre: "Cepita 1L", precio: 2500},
    {nombre: "Gin 0.75L", precio: 10000},
    {nombre: "Tónica", precio: 2500},
];


adult();

if (isAdult == true) {
    login();
    if (isAuthenticated) {
        menu();
    }
}
else {
    alert("Tenés que esperar a cumplir 18")
}


