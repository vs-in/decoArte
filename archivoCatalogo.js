document.getElementById("titulo");
const h1 = document.querySelector("h1");
h1.style.color = "red";



let listSinOrden = document.createElement("ul");
document.body.appendChild(listaSinOrden);

let elemento1Lista = document.createElement("li");
elemento1Lista.textContent = "Producto X";
listSinOrden.appendChild(elemento1Lista);

let elemento2Lista = document.createElement("li");
elemento2Lista.textContent = "Producto Y";
listSinOrden.appendChild(elemento2Lista);