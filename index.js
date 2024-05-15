var peliculas = [];

document.addEventListener("DOMContentLoaded", () => {
  peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

  // Limpia la lista antes de volver a agregar las películas
  var listaPelicula = document.getElementById("listaPeliculas");
  listaPelicula.innerHTML = "";

  peliculas.forEach(function (peliculaUrl, index) {
    var contenedorPeliculas = document.createElement("div");
    contenedorPeliculas.setAttribute("class", "box_pelicula");

    var nuevaPelicula = document.createElement("img");
    nuevaPelicula.src = peliculaUrl;

    var botonEliminar = document.createElement("button");
    botonEliminar.innerText = "Eliminar";

    botonEliminar.addEventListener("click", function () {
      eliminarPelicula(index);
    });

    contenedorPeliculas.appendChild(nuevaPelicula);
    contenedorPeliculas.appendChild(botonEliminar);
    listaPelicula.appendChild(contenedorPeliculas);
  });
});

function agregarPelicula() {
  var peliculaUrl = document.getElementById("pelicula").value;
  var listaPelicula = document.getElementById("listaPeliculas");
  var urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

  if (peliculaUrl !== "" && peliculaUrl.match(urlRegex)) {
    peliculas.push(peliculaUrl);
    var index = peliculas.length - 1;

    var contenedorPeliculas = document.createElement("div");
    contenedorPeliculas.setAttribute("class", "box_pelicula");

    var nuevaPelicula = document.createElement("img");
    nuevaPelicula.src = peliculaUrl;

    var botonEliminar = document.createElement("button");
    botonEliminar.innerText = "Eliminar";

    botonEliminar.addEventListener("click", function () {
      eliminarPelicula(index);
    });

    contenedorPeliculas.appendChild(nuevaPelicula);
    contenedorPeliculas.appendChild(botonEliminar);

    listaPelicula.appendChild(contenedorPeliculas);

    document.getElementById("pelicula").value = "";
  } else {
    alert("Debes Escribir una URL valida");
  }
  sincronizarStorage();
}

function sincronizarStorage() {
  localStorage.setItem("peliculas", JSON.stringify(peliculas));
}

function eliminarPelicula(index) {
  // Elimina la película en el índice especificado
  peliculas.splice(index, 1);

  // Limpia la lista antes de volver a agregar las películas
  var listaPelicula = document.getElementById("listaPeliculas");
  listaPelicula.innerHTML = "";

  // Vuelve a agregar todas las películas excepto la eliminada
  peliculas.forEach(function (peliculaUrl, index) {
    var contenedorPeliculas = document.createElement("div");
    contenedorPeliculas.setAttribute("class", "box_pelicula");

    var nuevaPelicula = document.createElement("img");
    nuevaPelicula.src = peliculaUrl;

    var botonEliminar = document.createElement("button");
    botonEliminar.innerText = "Eliminar";

    botonEliminar.addEventListener("click", function () {
      eliminarPelicula(index);
    });

    contenedorPeliculas.appendChild(nuevaPelicula);
    contenedorPeliculas.appendChild(botonEliminar);
    listaPelicula.appendChild(contenedorPeliculas);
  });

  // Sincroniza el localStorage después de realizar todas las operaciones
  sincronizarStorage();
}