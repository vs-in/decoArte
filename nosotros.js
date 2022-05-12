let titulo = document.getElementById("encabezado1");
titulo.style.fontFamily = "Calibri";
titulo.style.color = "white";
titulo.style.textAlign = "center";


function valida() {
  let nombre = document.getElementById("nombre").value;
  let radios = document.getElementsByName("contactarse");
  let contacto = document.getElementById("cliente");
  let valorRadio = "";

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      valorRadio = radios[i].value;
    }
  }

  if (contacto.checked) {
    contacto = "SI";
  } else {
    contacto = "NO";
  }
  console.log(
    "Nombre: " +
      nombre +
      "\n Se contacto: " +
      valorRadio +
      "\nEs Cliente: " +
      contacto
  );
}


function limpiar() {
  document.getElementById("nombre").value = "";
  let radios = document.getElementsByName("contactarse");

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radios[i].checked = false;
    }
  }

  document.getElementById("cliente").checked = false;
}
