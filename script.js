// PARTE 1 – AÑO 1 (Semestres 1 y 2)
const ramos = [
  {
    nombre: "BASES INTEGRADAS DE QUÍMICA, BIOQUÍMICA, BIOLOGÍA CELULAR Y GENÉTICA",
    tipo: "obligatorio",
    semestre: 1,
    prerequisitos: []
  },
  {
    nombre: "FÍSICA",
    tipo: "obligatorio",
    semestre: 1,
    prerequisitos: []
  },
  {
    nombre: "INTRODUCCIÓN A LA KINESIOLOGÍA",
    tipo: "obligatorio",
    semestre: 1,
    prerequisitos: []
  },
  {
    nombre: "ANATOMÍA ESTRUCTURAL Y FUNCIONAL I",
    tipo: "obligatorio",
    semestre: 1,
    prerequisitos: []
  },
  {
    nombre: "ESTRUCTURA Y FUNCIÓN TISULAR",
    tipo: "obligatorio",
    semestre: 1,
    prerequisitos: []
  },
  {
    nombre: "ESTRATEGIAS DE BÚSQUEDA BIBLIOGRÁFICA",
    tipo: "investigacion",
    semestre: 1,
    prerequisitos: []
  },
  {
    nombre: "CURSOS DE FORMACIÓN GENERAL",
    tipo: "general",
    semestre: 1,
    prerequisitos: []
  },
  {
    nombre: "INGLÉS I",
    tipo: "idiomas",
    semestre: 1,
    prerequisitos: []
  },
  {
    nombre: "PRINCIPIOS DE EVOLUCIÓN",
    tipo: "obligatorio",
    semestre: 1,
    prerequisitos: []
  },
  {
    nombre: "FISIOLOGÍA GENERAL",
    tipo: "obligatorio",
    semestre: 2,
    prerequisitos: ["BASES INTEGRADAS DE QUÍMICA, BIOQUÍMICA, BIOLOGÍA CELULAR Y GENÉTICA", "FÍSICA"]
  },
  {
    nombre: "NEUROANATOMÍA",
    tipo: "obligatorio",
    semestre: 2,
    prerequisitos: []
  },
  {
    nombre: "ANATOMÍA ESTRUCTURAL Y FUNCIONAL II",
    tipo: "obligatorio",
    semestre: 2,
    prerequisitos: ["ANATOMÍA ESTRUCTURAL Y FUNCIONAL I"]
  },
  {
    nombre: "INTRODUCCIÓN AL ESTUDIO DEL MOVIMIENTO HUMANO",
    tipo: "obligatorio",
    semestre: 2,
    prerequisitos: []
  },
  {
    nombre: "BIOMECÁNICA, LESIÓN Y REPARACIÓN TISULAR",
    tipo: "obligatorio",
    semestre: 2,
    prerequisitos: ["ESTRUCTURA Y FUNCIÓN TISULAR"]
  },
  {
    nombre: "LECTURA COMPRENSIVA DE ARTICULOS CIENTÍFICOS",
    tipo: "investigacion",
    semestre: 2,
    prerequisitos: []
  },
  {
    nombre: "CURSOS DE FORMACIÓN GENERAL",
    tipo: "general",
    semestre: 2,
    prerequisitos: []
  },
  {
    nombre: "INGLÉS II",
    tipo: "idiomas",
    semestre: 2,
    prerequisitos: ["INGLÉS I"]
  }
];

const mallaContainer = document.getElementById("malla-container");

function crearColumnaAnio(anioNumero, semestres) {
  const columna = document.createElement("div");
  columna.className = "anio";

  const titulo = document.createElement("h2");
  titulo.textContent = `${anioNumero}° Año`;
  columna.appendChild(titulo);

  const contenedorSemestres = document.createElement("div");
  contenedorSemestres.className = "semestres";

  semestres.forEach(num => {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";
    const h3 = document.createElement("h3");
    h3.textContent = `Semestre ${num}`;
    divSemestre.appendChild(h3);

    ramos.filter(r => r.semestre === num).forEach(ramo => {
      const div = document.createElement("div");
      div.className = `ramo ${ramo.tipo}`;
      div.textContent = ramo.nombre;
      div.dataset.nombre = ramo.nombre;
      div.onclick = () => toggleAprobado(div, ramo);
      divSemestre.appendChild(div);
    });

    contenedorSemestres.appendChild(divSemestre);
  });

  columna.appendChild(contenedorSemestres);
  mallaContainer.appendChild(columna);
  // PARTE 2 – AÑO 2 (Semestres 3 y 4)
ramos.push(
  {
    nombre: "EXAMEN KINÉSICO BÁSICO",
    tipo: "obligatorio",
    semestre: 3,
    prerequisitos: ["ANATOMÍA ESTRUCTURAL Y FUNCIONAL II", "BIOMECÁNICA, LESIÓN Y REPARACIÓN TISULAR"]
  },
  {
    nombre: "FISIOLOGÍA DE SISTEMAS",
    tipo: "obligatorio",
    semestre: 3,
    prerequisitos: ["FISIOLOGÍA GENERAL"]
  },
  {
    nombre: "BASES INTEGRADAS DE INFECTOLOGÍA, INMUNOLOGÍA Y FARMACOLOGÍA GENERAL",
    tipo: "obligatorio",
    semestre: 3,
    prerequisitos: ["FISIOLOGÍA GENERAL", "NEUROANATOMÍA"]
  },
  {
    nombre: "CONTROL Y APRENDIZAJE MOTOR",
    tipo: "obligatorio",
    semestre: 3,
    prerequisitos: []
  },
  {
    nombre: "EDUCACIÓN FÍSICA I",
    tipo: "obligatorio",
    semestre: 3,
    prerequisitos: []
  },
  {
    nombre: "FUNDAMENTOS DE LA INVESTIGACIÓN CIENTÍFICA",
    tipo: "obligatorio",
    semestre: 3,
    prerequisitos: []
  },
  {
    nombre: "INGLÉS III",
    tipo: "idiomas",
    semestre: 3,
    prerequisitos: ["INGLÉS II"]
  },
  {
    nombre: "PROCEDIMIENTOS TERAPÉUTICOS BÁSICOS Y GENERALES",
    tipo: "obligatorio",
    semestre: 4,
    prerequisitos: ["EXAMEN KINÉSICO BÁSICO", "INTRODUCCIÓN AL ESTUDIO DEL MOVIMIENTO HUMANO"]
  },
  {
    nombre: "FISIOPATOLOGÍA Y FARMACOLOGÍA DE SISTEMAS",
    tipo: "obligatorio",
    semestre: 4,
    prerequisitos: ["FISIOLOGÍA DE SISTEMAS", "BASES INTEGRADAS DE INFECTOLOGÍA, INMUNOLOGÍA Y FARMACOLOGÍA GENERAL"]
  },
  {
    nombre: "KINESIOLOGÍA DEL DESARROLLO PSICOMOTOR",
    tipo: "obligatorio",
    semestre: 4,
    prerequisitos: ["CONTROL Y APRENDIZAJE MOTOR"]
  },
  {
    nombre: "ANÁLISIS BIOINSTRUMENTAL DEL MOVIMIENTO HUMANO",
    tipo: "obligatorio",
    semestre: 4,
    prerequisitos: []
  },
  {
    nombre: "EXAMEN DE LA CONDICIÓN FÍSICA Y LA CONDUCTA MOTORA",
    tipo: "obligatorio",
    semestre: 4,
    prerequisitos: ["EXAMEN KINÉSICO BÁSICO"]
  },
  {
    nombre: "ANÁLISIS EPIDEMIOLÓGICO",
    tipo: "investigacion",
    semestre: 4,
    prerequisitos: []
  },
  {
    nombre: "LECTURA CRÍTICA DE ARTÍCULOS CIENTÍFICOS",
    tipo: "investigacion",
    semestre: 4,
    prerequisitos: []
  },
  {
    nombre: "INGLÉS IV",
    tipo: "idiomas",
    semestre: 4,
    prerequisitos: ["INGLÉS III"]
  }
);

// Crear columna del Año 2 (semestres 3 y 4)
crearColumnaAnio(2, [3, 4]);
}
// PARTE 3 – AÑO 3 (Semestres 5 y 6)
ramos.push(
  {
    nombre: "EVALUACIÓN E INTERVENCIÓN EN CUIDADOS RESPIRATORIOS I",
    tipo: "obligatorio",
    semestre: 5,
    prerequisitos: [
      "EXAMEN DE LA CONDICIÓN FÍSICA Y LA CONDUCTA MOTORA",
      "FISIOPATOLOGÍA Y FARMACOLOGÍA DE SISTEMAS"
    ]
  },
  {
    nombre: "EVALUACIÓN E INTERVENCIÓN EN NEUROKINESIOLOGÍA I",
    tipo: "obligatorio",
    semestre: 5,
    prerequisitos: ["KINESIOLOGÍA DEL DESARROLLO PSICOMOTOR"]
  },
  {
    nombre: "EVALUACIÓN E INTERVENCIÓN EN MÚSCULOESQUELÉTICO I",
    tipo: "obligatorio",
    semestre: 5,
    prerequisitos: ["PROCEDIMIENTOS TERAPÉUTICOS BÁSICOS Y GENERALES"]
  },
  {
    nombre: "EFECTOS DE LA ACTIVIDAD FÍSICA EN LA SALUD",
    tipo: "obligatorio",
    semestre: 5,
    prerequisitos: [
      "FISIOPATOLOGÍA Y FARMACOLOGÍA DE SISTEMAS",
      "EXAMEN DE LA CONDICIÓN FÍSICA Y LA CONDUCTA MOTORA"
    ]
  },
  {
    nombre: "EDUCACIÓN FÍSICA II",
    tipo: "obligatorio",
    semestre: 5,
    prerequisitos: ["EDUCACIÓN FÍSICA I"]
  },
  {
    nombre: "ANÁLISIS DEL MODELO DE SALUD CHILENO",
    tipo: "investigacion",
    semestre: 5,
    prerequisitos: ["ANÁLISIS EPIDEMIOLÓGICO"]
  },
  {
    nombre: "REVISIÓN BIBLIOGRÁFICA",
    tipo: "investigacion",
    semestre: 5,
    prerequisitos: ["LECTURA CRÍTICA DE ARTÍCULOS CIENTÍFICOS"]
  },
  {
    nombre: "MÓDULO INTEGRADO, INTERDISCIPLINARIO Y MULTIPROFESIONAL I",
    tipo: "general",
    semestre: 5,
    prerequisitos: []
  },

  {
    nombre: "EVALUACIÓN E INTERVENCIÓN EN CUIDADOS RESPIRATORIOS II",
    tipo: "obligatorio",
    semestre: 6,
    prerequisitos: ["EVALUACIÓN E INTERVENCIÓN EN CUIDADOS RESPIRATORIOS I"]
  },
  {
    nombre: "EVALUACIÓN E INTERVENCIÓN EN NEUROKINESIOLOGÍA II",
    tipo: "obligatorio",
    semestre: 6,
    prerequisitos: ["EVALUACIÓN E INTERVENCIÓN EN NEUROKINESIOLOGÍA I"]
  },
  {
    nombre: "EVALUACIÓN E INTERVENCIÓN EN MÚSCULO-ESQUELÉTICO II",
    tipo: "obligatorio",
    semestre: 6,
    prerequisitos: ["EVALUACIÓN E INTERVENCIÓN EN MÚSCULOESQUELÉTICO I"]
  },
  {
    nombre: "RAZONAMIENTO CLÍNICO",
    tipo: "obligatorio",
    semestre: 6,
    prerequisitos: [
      "EVALUACIÓN E INTERVENCIÓN EN CUIDADOS RESPIRATORIOS I",
      "EVALUACIÓN E INTERVENCIÓN EN NEUROKINESIOLOGÍA I",
      "EVALUACIÓN E INTERVENCIÓN EN MÚSCULOESQUELÉTICO I"
    ]
  },
  {
    nombre: "ACTIVIDAD FÍSICA Y DEPORTES",
    tipo: "obligatorio",
    semestre: 6,
    prerequisitos: ["EFECTOS DE LA ACTIVIDAD FÍSICA EN LA SALUD", "EDUCACIÓN FÍSICA II"]
  },
  {
    nombre: "RESPONSABILIDAD DEL EJERCICIO PROFESIONAL",
    tipo: "investigacion",
    semestre: 6,
    prerequisitos: []
  },
  {
    nombre: "DISEÑO Y FORMULACIÓN DE PROYECTOS DE INVESTIGACIÓN",
    tipo: "investigacion",
    semestre: 6,
    prerequisitos: ["REVISIÓN BIBLIOGRÁFICA"]
  },
  {
    nombre: "CURSOS DE FORMACIÓN GENERAL",
    tipo: "general",
    semestre: 6,
    prerequisitos: []
  }
);

// Crear columna del Año 3 (semestres 5 y 6)
crearColumnaAnio(3, [5, 6]);
// PARTE 4 – AÑO 4 (Semestres 7 y 8)
ramos.push(
  {
    nombre: "INTERVENCIÓN PROFESIONAL EN CONTEXTO I",
    tipo: "obligatorio",
    semestre: 7,
    prerequisitos: [
      "EFECTOS DE LA ACTIVIDAD FÍSICA EN LA SALUD",
      "EVALUACIÓN E INTERVENCIÓN EN CUIDADOS RESPIRATORIOS II",
      "EVALUACIÓN E INTERVENCIÓN EN NEUROKINESIOLOGÍA II",
      "EVALUACIÓN E INTERVENCIÓN EN MÚSCULO-ESQUELÉTICO II"
    ]
  },
  {
    nombre: "ANÁLISIS DE LA RELACIÓN PERSONA ENTORNO",
    tipo: "obligatorio",
    semestre: 7,
    prerequisitos: [
      "EVALUACIÓN E INTERVENCIÓN EN CUIDADOS RESPIRATORIOS II",
      "EVALUACIÓN E INTERVENCIÓN EN NEUROKINESIOLOGÍA II",
      "EVALUACIÓN E INTERVENCIÓN EN MÚSCULO-ESQUELÉTICO II"
    ]
  },
  {
    nombre: "ESTRATEGIAS DEPORTIVAS Y RECREATIVAS",
    tipo: "obligatorio",
    semestre: 7,
    prerequisitos: ["ACTIVIDAD FÍSICA Y DEPORTES"]
  },
  {
    nombre: "DETERMINANTES SOCIALES DE LA SALUD",
    tipo: "investigacion",
    semestre: 7,
    prerequisitos: ["ANÁLISIS DEL MODELO DE SALUD CHILENO"]
  },
  {
    nombre: "CONCEPTOS BÁSICOS DE ADMINISTRACIÓN EN SALUD",
    tipo: "investigacion",
    semestre: 7,
    prerequisitos: ["ANÁLISIS DEL MODELO DE SALUD CHILENO"]
  },
  {
    nombre: "EJECUCIÓN DE PROYECTOS DE INVESTIGACION I",
    tipo: "investigacion",
    semestre: 7,
    prerequisitos: ["DISEÑO Y FORMULACIÓN DE PROYECTOS DE INVESTIGACIÓN"]
  },
  {
    nombre: "METODOLOGÍAS DE ENSEÑANZA APRENDIZAJE",
    tipo: "investigacion",
    semestre: 7,
    prerequisitos: []
  },
  {
    nombre: "CURSOS DE FORMACIÓN GENERAL",
    tipo: "general",
    semestre: 7,
    prerequisitos: []
  },
  {
    nombre: "INTERVENCIÓN PROFESIONAL EN CONTEXTO II",
    tipo: "obligatorio",
    semestre: 8,
    prerequisitos: [
      "EVALUACIÓN E INTERVENCIÓN EN CUIDADOS RESPIRATORIOS II",
      "EVALUACIÓN E INTERVENCIÓN EN NEUROKINESIOLOGÍA II",
      "EVALUACIÓN E INTERVENCIÓN EN MÚSCULO-ESQUELÉTICO II"
    ]
  },
  {
    nombre: "EVALUACIÓN ERGONÓMICA",
    tipo: "obligatorio",
    semestre: 8,
    prerequisitos: ["ANÁLISIS DE LA RELACIÓN PERSONA ENTORNO"]
  },
  {
    nombre: "ESTRATEGIAS DEPORTIVAS Y RECREATIVAS APLICADAS",
    tipo: "obligatorio",
    semestre: 8,
    prerequisitos: ["ESTRATEGIAS DEPORTIVAS Y RECREATIVAS"]
  },
  {
    nombre: "PROGRAMAS DE PROMOCIÓN Y PREVENCIÓN EN SALUD",
    tipo: "investigacion",
    semestre: 8,
    prerequisitos: ["DETERMINANTES SOCIALES DE LA SALUD"]
  },
  {
    nombre: "PROYECTOS DE EMPRENDIMIENTO",
    tipo: "investigacion",
    semestre: 8,
    prerequisitos: ["CONCEPTOS BÁSICOS DE ADMINISTRACIÓN EN SALUD"]
  },
  {
    nombre: "EJECUCIÓN DE PROYECTOS DE INVESTIGACIÓN II",
    tipo: "investigacion",
    semestre: 8,
    prerequisitos: ["EJECUCIÓN DE PROYECTOS DE INVESTIGACION I"]
  },
  {
    nombre: "APLICACIÓN BÁSICA DE METODOLOGÍAS DOCENTES",
    tipo: "investigacion",
    semestre: 8,
    prerequisitos: ["METODOLOGÍAS DE ENSEÑANZA APRENDIZAJE"]
  },
  {
    nombre: "MÓDULO INTEGRADO, INTERDISCIPLINARIO Y MULTIPROFESIONAL II",
    tipo: "general",
    semestre: 8,
    prerequisitos: ["MÓDULO INTEGRADO, INTERDISCIPLINARIO Y MULTIPROFESIONAL I"]
  }
);

// Crear columna del Año 4 (semestres 7 y 8)
crearColumnaAnio(4, [7, 8]);
// PARTE 5 – AÑO 5 (Semestres 9 y 10)
ramos.push(
  {
    nombre: "INTERVENCIÓN PROFESIONAL I",
    tipo: "obligatorio",
    semestre: 9,
    prerequisitos: ["INTERVENCIÓN PROFESIONAL EN CONTEXTO II"]
  },
  {
    nombre: "PROYECTOS DE INTERVENCIÓN ERGONÓMICA",
    tipo: "obligatorio",
    semestre: 9,
    prerequisitos: ["EVALUACIÓN ERGONÓMICA"]
  },
  {
    nombre: "COMUNICACIÓN CIENTÍFICA",
    tipo: "obligatorio",
    semestre: 9,
    prerequisitos: ["EJECUCIÓN DE PROYECTOS DE INVESTIGACIÓN II"]
  },
  {
    nombre: "CURSOS DE PROFUNDIZACIÓN DISCIPLINAR Y PROFESIONAL",
    tipo: "obligatorio",
    semestre: 9,
    prerequisitos: [
      "INTERVENCIÓN PROFESIONAL EN CONTEXTO I",
      "INTERVENCIÓN PROFESIONAL EN CONTEXTO II"
    ]
  },
  {
    nombre: "INTERVENCIÓN EN SALUD COMUNITARIA",
    tipo: "investigacion",
    semestre: 9,
    prerequisitos: ["PROGRAMAS DE PROMOCIÓN Y PREVENCIÓN EN SALUD"]
  },
  {
    nombre: "ADMINISTRACIÓN EN SALUD",
    tipo: "investigacion",
    semestre: 9,
    prerequisitos: ["CONCEPTOS BÁSICOS DE ADMINISTRACIÓN EN SALUD"]
  },
  {
    nombre: "INTERVENCIÓN PROFESIONAL II",
    tipo: "obligatorio",
    semestre: 10,
    prerequisitos: ["INTERVENCIÓN PROFESIONAL I"]
  }
);

// Crear columna del Año 5 (semestres 9 y 10)
crearColumnaAnio(5, [9, 10]);
function toggleAprobado(div, ramo) {
  if (div.classList.contains("aprobado")) {
    div.classList.remove("aprobado");
  } else {
    const ok = ramo.prerequisitos.every(pr => {
      const elem = [...document.querySelectorAll(".ramo")].find(d => d.dataset.nombre === pr);
      return elem && elem.classList.contains("aprobado");
    });
    if (!ok) {
      alert("Debes aprobar los prerrequisitos primero");
      return;
    }
    div.classList.add("aprobado");
  }
  actualizarPorcentaje();
}

function actualizarPorcentaje() {
  const total = document.querySelectorAll(".ramo").length;
  const aprobados = document.querySelectorAll(".ramo.aprobado").length;
  const porcentaje = ((aprobados / total) * 100).toFixed(1);
  document.getElementById("porcentaje-avance").textContent = `Avance: ${porcentaje}%`;
}
