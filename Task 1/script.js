/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const input = document.querySelector('input');
input.addEventListener('click', () => {

})

const display = document.createElement("h1");

let kg = document.forms[0];
const handleSubmit = (e) => {
    e.preventDefault();
    display.innerHTML = "";
    const kgToLb = input.value * 2.2046;
    const kgToG = input.value / 0.0010000;
    const kgToOz = input.value * 35.274;
    input.value = "";

    display.append("Lb: " + kgToLb.toFixed(2) + " g: " + kgToG.toFixed(2) + " Oz: " + kgToOz.toFixed(2));
    document.getElementById("output").append(display);

}

kg.addEventListener('submit', handleSubmit);
