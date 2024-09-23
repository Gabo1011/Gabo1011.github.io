// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Como tú a mí me besa'", time: 13 },
  { text: "Todo pasa tan lento", time: 15 },
  { text: "A ti sí que sе reza", time: 21 },
  { text: "Como tú a mí me besa'", time: 28 },
  { text: "Todo pasa tan lento", time: 30 },
  { text: "A ti sí que sе reza", time: 36 },
  { text: "Tú eres la razón por la que yo creo en el amor", time: 44 },
  { text: "Póneme los lentes pa verte mejor", time: 48 },
  { text: "Sustancias en mi corazón, yo no creía en el amor", time: 51},
  { text: "Te cruzaste en mi camino y todo cambió", time: 54 },
  { text: "Eres musa, te plasmo, me siento tuyo", time: 64 },
  { text: "Eres linda en la mañana al levantar", time: 70 },
  { text: "Eres todo lo que quiero y más", time: 76 },
  { text: "No tenerte sería fatal", time: 80 },
  { text: "Y perdernos en amor", time: 87 },
  { text: "Me encanta la conexión", time: 91 },
  { text: "Siempre seré tu amante", time: 99 },
  { text: "Me encanta la conexión", time: 121 },
  { text: "Siempre seré tu amante", time: 129 },
  { text: "Como tú me besas", time: 131 },
  { text: "Mami, me haces ver estrellas", time: 136 },
  { text: "Ya nunca vas a estar sola", time: 141 },
  { text: "Ya nunca vas a estar sola", time: 143 },
  { text: "Como tú a mí me besa'", time: 148 },
  { text: "Todo pasa tan lento", time: 151 },
  { text: "A ti sí que sе reza", time: 156 },
  { text: "Como tú a mí me besa'", time: 163 },
  { text: "A ti sí que sе reza", time: 171 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 50);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 2000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);