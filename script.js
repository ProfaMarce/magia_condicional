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

document.addEventListener("DOMContentLoaded", function () {
  window.mostrarResultado = function(clima) {
    const resultado = document.getElementById('resultado-condicional');
    if (clima === 'llueve') {
      resultado.textContent = 'El programa dice: ¡Llevá paraguas! ☔';
    } else if (clima === 'sol') {
      resultado.textContent = 'El programa dice: ¡Ponete protector solar! 😎';
    } else if (clima === 'nieve') {
      resultado.textContent = 'El programa dice: ¡Abrigate mucho! 🧤';
    }
  };
});
