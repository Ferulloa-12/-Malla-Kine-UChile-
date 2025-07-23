let aprobados = new Set();

function crearMalla() {
  const container = document.getElementById("malla-container");
  let totalRamos = 0;

  malla.forEach(bloque => {
    const columna = document.createElement("div");
    columna.className = "columna";

    const titulo = document.createElement("h2");
    titulo.textContent = bloque.titulo;
    columna.appendChild(titulo);

    bloque.ramos.forEach(ramo => {
      totalRamos++;

      const div = document.createElement("div");
      div.className = `ramo ${ramo.tipo}`;
      div.id = ramo.codigo;
      div.textContent = ramo.nombre;

      if (ramo.prerreq.length > 0) {
        div.classList.add("bloqueado");
      }

      div.addEventListener("click", () => {
        if (div.classList.contains("bloqueado")) return;

        div.classList.toggle("tachado");

        if (div.classList.contains("tachado")) {
          aprobados.add(ramo.codigo);
        } else {
          aprobados.delete(ramo.codigo);
        }

        actualizarRamos();
        actualizarProgreso(totalRamos);
      });

      columna.appendChild(div);
    });

    container.appendChild(columna);
  });

  actualizarRamos();
  actualizarProgreso(totalRamos);
}

function actualizarRamos() {
  malla.forEach(bloque => {
    bloque.ramos.forEach(ramo => {
      const div = document.getElementById(ramo.codigo);
      if (!div) return;

      const requisitosCumplidos = ramo.prerreq.every(pr => aprobados.has(pr));

      if (!requisitosCumplidos && !div.classList.contains("tachado")) {
        div.classList.add("bloqueado");
      } else {
        div.classList.remove("bloqueado");
      }
    });
  });
}

function actualizarProgreso(total) {
  const porcentaje = Math.round((aprobados.size / total) * 100);
  const progreso = document.getElementById("progreso");
  progreso.textContent = `Progreso: ${porcentaje}%`;
}

crearMalla();
