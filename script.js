let sumar = document.getElementById('sumar');

sumar.addEventListener("click", function () {
    console.log("Presionaste el más.");
    alert("Presionaste el más.");

    var a = document.getElementById('N1').value;
    var b = document.getElementById('N2').value;

    var res = parseInt(a) + parseInt(b);

    document.getElementById('res').value = res;
    console.log("Resultado: " + res);
    alert("El resultado es: " + res);
});

let restar = document.getElementById('restar');

restar.addEventListener("click", function () {
    console.log("Presionaste el menos.");
    alert("Presionaste el menos.");

    var a = document.getElementById('N1').value;
    var b = document.getElementById('N2').value;

    var res = parseInt(a) - parseInt(b);

    document.getElementById('res').value = res;
    console.log("Resultado: " + res);
    alert("El resultado es: " + res);
});

let multiplicar = document.getElementById('multiplicar');

multiplicar.addEventListener("click", function () {
    console.log("Presionaste el multiplicar.");
    alert("Presionaste el multiplicar.");

    var a = document.getElementById('N1').value;
    var b = document.getElementById('N2').value;

    var res = parseInt(a) * parseInt(b);

    document.getElementById('res').value = res;
    console.log("Resultado: " + res);
    alert("El resultado es: " + res);
});

let dividir = document.getElementById('dividir');

dividir.addEventListener("click", function () {
    console.log("Presionaste el dividir.");
    alert("Presionaste el dividir.");

    var a = document.getElementById('N1').value;
    var b = document.getElementById('N2').value;

    if (parseInt(b) !== 0) {
        var res = parseInt(a) / parseInt(b);
        document.getElementById('res').value = res;
        console.log("Resultado: " + res);
        alert("El resultado es: " + res);
    } else {
        alert("No se puede dividir por cero.");
    }
});




