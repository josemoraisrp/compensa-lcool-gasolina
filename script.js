function calcular(event) {
    event.preventDefault();

    let alcoolInput = document.getElementById("alcool").value;
    let gasolinaInput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("content-result");
    let textResult = document.getElementById("text-result");

    let gasolinaSpan = document.getElementById("gasolina-result");
    let alcoolSpan = document.getElementById("alcool-result");

    /*
    Calculo: alcool / gasolina e se o re3sultado for menor que 0.7, entao compensa usar alcool.
    */

    let calculo = (alcoolInput / gasolinaInput);

    if (calculo < 0.7) {

        textResult.innerHTML = "Compensa usar Álcool";
    } else {
        
        textResult.innerHTML = "Compensa usar Gasolina";
    }

    gasolinaSpan.innerHTML = "gasolina R$ " + gasolinaInput;
    alcoolSpan.innerHTML = "Álcool R$ " + alcoolInput;

    contentResult.classList.remove("hide");

}
