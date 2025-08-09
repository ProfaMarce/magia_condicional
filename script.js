// -------- Misión 1: Sombrero Seleccionador --------
function asignarCasa(event) {
  event.preventDefault();
  const valentia = parseInt(document.getElementById('valentia').value);
  const ambicion = parseInt(document.getElementById('ambicion').value);
  const sabiduria = parseInt(document.getElementById('sabiduria').value);
  const lealtad = parseInt(document.getElementById('lealtad').value);
  const resultadoDiv = document.getElementById('resultadoCasa');
  let casa = "", imagen = "";

  if (valentia > 7) {
    casa = "🦁 ¡El Sombrero te asignó a <strong>Gryffindor</strong>!";
    imagen = "https://i.postimg.cc/NM3nq40g/gryffindor.png";
  } else if (ambicion > 7) {
    casa = "🐍 ¡El Sombrero te asignó a <strong>Slytherin</strong>!";
    imagen = "https://i.postimg.cc/NM9nzVBJ/slytherin.png";
  } else if (sabiduria > 7) {
    casa = "🦅 ¡El Sombrero te asignó a <strong>Ravenclaw</strong>!";
    imagen = "https://i.postimg.cc/s208KydG/ravenclaw.png";
  } else if (lealtad > 7) {
    casa = "🦡 ¡El Sombrero te asignó a <strong>Hufflepuff</strong>!";
    imagen = "https://i.postimg.cc/3N2cKvy2/hufflepuff.png";
  } else {
    casa = "🤔 Aún no estás listo para ser asignado.";
    imagen = "imagenes/sombrero.png";
  }

  resultadoDiv.innerHTML = `
    <p>${casa}</p>
    <img src="${imagen}" alt="Escudo de casa" style="width: 150px; margin-top: 10px;">
  `;
}

// -------- Certificado --------
function mostrarCertificado() {
  let nombre = prompt("¿Cuál es tu nombre para el certificado?");
  if (nombre && nombre.trim() !== "") {
    document.getElementById("nombre-estudiante").textContent = nombre.trim();
  }
}

function descargarCertificado() {
  const area = document.getElementById("area-certificado");

  html2canvas(area).then(canvas => {
    const enlace = document.createElement("a");
    enlace.href = canvas.toDataURL("image/png");
    enlace.download = "certificado.png";
    enlace.click();
  });
}

// -------- Intro: Simulación condicional --------
document.addEventListener("DOMContentLoaded", function () {
  window.mostrarResultado = function(clima) {
    const resultado = document.getElementById('resultado-condicional');
    if (resultado) {
      if (clima === 'llueve') {
        resultado.textContent = 'El programa dice: ¡Llevá paraguas! ☔';
      } else if (clima === 'sol') {
        resultado.textContent = 'El programa dice: ¡Ponete protector solar! 😎';
      } else if (clima === 'nieve') {
        resultado.textContent = 'El programa dice: ¡Abrigate mucho! 🧤';
      }
    }
  };
});
