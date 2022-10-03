/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const getListOfCars = async () => {
    try {
        const response = await fetch(ENDPOINT);
        const data = await response.json();


        // brand.append('labas');
        data.forEach(element => {
            const brandDiv = document.createElement("div");
            brandDiv.setAttribute("id", "brand" + element.brand);
            brandDiv.innerText = element.brand;
            document.getElementById("output").append(brandDiv);
            brandDiv.setAttribute("style", "font-size: 20px;");
            brandDiv.style.textAlign = "center";
            brandDiv.style.marginTop = "2rem";
            


            const modelDiv = document.createElement("div");          
            data.forEach(model => {
                modelDiv.innerText = element.models;
                document.getElementById("brand" + element.brand).append(modelDiv);
                modelDiv.setAttribute("style", "font-size: 15px;");
            })

        });

    } catch (error) {
        console.log(error);
    }
}

getListOfCars();