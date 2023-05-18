let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let valor3 = document.querySelector("#valor3");
let valor4 = document.querySelector("#valor4");

function CalcularMenor(){
    let a = Number(valor1.value);
    let b = Number(valor2.value);
    let c = Number(valor3.value);
    let d = Number(valor4.value);


    if (a < b && a < c && a < d){
        resultado.innerHTML = valor1.value;
    } else if(b < c && b < d){
        resultado.innerHTML = valor2.value;
    } else if(c < d){
        resultado.innerHTML = valor3.value;
    } else{
        resultado.innerHTML = valor4.value;
    }

}

botao.onclick = function(){
    CalcularMenor();
}