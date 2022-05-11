//saludoInicial


let nombre = prompt("ingrese nombre");
let apellido = prompt("ingrese apellido");

function saludar(nombre, apellido) {
  alert(`Bienvenido/a ${nombre} ${apellido} a DecoArte!`);
}

saludar(nombre, apellido);


//seleccion

let opcion;
alert("Seleccione Servicio:");

do {
  opcion = prompt(
    "1-Asesoramiento \n 2-Ventas \n 3-Servicios \n 4-Trabaja con nosotros!"
  );
} while (opcion != "1" && opcion != "2" && opcion != "3" && opcion != "4");

if(opcion == "1" || "2" || "3" || "4"){
  alert("Ingresaste Correctamente!");
}

switch (opcion) {
    case "1":
      alert("Asesorate con nosotros al 15-4848-2323");
      break;
    case "2":
      alert("Para ventas mira nuestro e-shop www.decoarte.com/e-shop.");
      break;
    case "3":
      alert("Venta de productos y decoracion para el hogar");
      break;
    case "4":
      alert("No dudes en mandarnos tu CV a =>>> ....");
      break;
    default:
      console.log("error");
      break;
  }

//articulos

let productos = [
    {
      "nombre": "Cocina Escorial",
      "garantia": 4,
      "condicion": "nuevo",
      "Disponible": true,
    },
    {
      "nombre": "Alfombra Baño",
      "garantia": 1,
      "condicion": "nuevo",
      "Disponible": true,
    },
    {
      "nombre": "Espejo Vintage",
      "garantia": "no aplica",
      "condicion": "reacondicionado",
      "Disponible": true,
    },
    {
      "nombre": "Sacacorcho",
      "garantia": 1,
      "condicion": "nuevo",
      "Disponible": true,
    },
  ];
  
  // agregando nuevo articulo //
  let articuloNuevo = {
      "nombre": "Lampara Globo",
      "garantia": "No tiene",
      "condicion": "Reacondicionado",
      "Disponible": true,
  }
  
  productos.push(articuloNuevo);

   
  //clientes

  let clientes = [
      { id: 1, name: "Hernan Gomez", estado: "activo"},
      { id: 2, name: "Pedro Sanchez", estado: "activo"},
      { id: 3, name: "Yamila Orozco", estado: "activo"},
      { id: 4, name: "Tomas Muller", estado: "activo"},
      { id: 5, name: "Sabrina Salerno", estado: "activo"},
  ];

  let clientesEstado = clientes.filter(function(cliente) {
      return cliente.estado === "activo"

  })

console.log(clientesEstado);

//comprobacionEdad

const clientes1 = [
    { name: 'Hernan', edad: 16 },
    { name: 'Pedro', edad: 18 },
    { name: 'Yamila', edad: 27 },
    { name: 'Tomas', edad: 14 },
    { name: 'Sabrina', edad: 24},
  ];
  
const estado1 = clientes1.filter(persona => persona.edad >= 18);
  
  console.log(estado1);


  