const apiKey = "kdt3kugu68yaiETpiqLLJ1B95oyBga8G"; // API KEY(Api generada)
let paginaActual = 1;
let queryActual = "";

async function buscarGifs(resetPagina = false) {
  if (resetPagina) paginaActual = 1;

  const query = document.getElementById("searchInput").value.trim();
  if (query === "") return;

  queryActual = query;
  const limit = 15;
  const offset = (paginaActual - 1) * limit;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=${limit}&offset=${offset}&rating=g`;

  const respuesta = await fetch(url);
  const datos = await respuesta.json();

  const contenedor = document.getElementById("gifContainer");
  contenedor.innerHTML = "";

  datos.data.forEach(gif => {
    const col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `
      <div class="gif-card">
        <img src="${gif.images.fixed_height.url}" alt="${gif.title}">
      </div>
    `;
    contenedor.appendChild(col);
  });

  document.getElementById("numeroPagina").innerText = `Página ${paginaActual}`;
}

function cambiarPagina(direccion) {
  if (direccion === "next") {
    paginaActual++;
  } else if (direccion === "prev" && paginaActual > 1) {
    paginaActual--;
  }
  buscarGifs(false);
}
