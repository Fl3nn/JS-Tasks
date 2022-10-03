/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const getUsers = async () => {
    try {
        const response = await fetch(ENDPOINT);
        const data = await response.json();
        document.getElementById("output").innerHTML = "";
        data.forEach((element, index) => {

            // console.log(element.login + " " + element.avatar_url);
            const userDiv = document.createElement("div");
            userDiv.setAttribute("id", "profile_" + index)
            document.getElementById("output").append(userDiv);



            const userImage = document.createElement("img");
            userImage.setAttribute("src", element.avatar_url);
            userImage.setAttribute("height", "100px");
            document.getElementById("profile_" + index).append(userImage);


            const userName = document.createElement("a");
            userName.append(element.login);
            userName.style.padding = "25px";
            // userName.style.fontSize = "50px";
            userName.setAttribute("style", "font-size: 50px;")
            userName.style.fontWeight = "bold";
            userName.style.color = "grey";
            document.getElementById("profile_" + index).append(userName);
        });

    } catch (error) {
        console.log(error);
    }
}

// getUsers();

