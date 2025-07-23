const malla = [
  {
    "titulo": "1° Año - I Semestre",
    "ramos": [
      {
        "nombre": "BASES INTEGRADAS DE QUÍMICA, BIOQUÍMICA, BIOLOGÍA CELULAR Y GENÉTICA",
        "codigo": "bases_integradas_1",
        "tipo": "obligatorio",
        "prerreq": []
      },
      {
        "nombre": "FÍSICA",
        "codigo": "fisica_1",
        "tipo": "obligatorio",
        "prerreq": []
      },
      {
        "nombre": "INTRODUCCIÓN A LA KINESIOLOGÍA",
        "codigo": "intro_kine",
        "tipo": "obligatorio",
        "prerreq": []
      },
      {
        "nombre": "ANATOMÍA ESTRUCTURAL Y FUNCIONAL I",
        "codigo": "anato_1",
        "tipo": "obligatorio",
        "prerreq": []
      },
      {
        "nombre": "ESTRUCTURA Y FUNCIÓN TISULAR",
        "codigo": "tisular",
        "tipo": "obligatorio",
        "prerreq": []
      },
      {
        "nombre": "ESTRATEGIAS DE BÚSQUEDA BIBLIOGRÁFICA",
        "codigo": "busqueda_biblio",
        "tipo": "investigacion",
        "prerreq": []
      },
      {
        "nombre": "CURSOS DE FORMACIÓN GENERAL",
        "codigo": "form_gen_1",
        "tipo": "formacion_general",
        "prerreq": []
      },
      {
        "nombre": "INGLÉS I",
        "codigo": "ingles_1",
        "tipo": "idiomas",
        "prerreq": []
      }
    ]
  },
  {
    "titulo": "1° Año - II Semestre",
    "ramos": [
      {
        "nombre": "PRINCIPIOS DE EVOLUCIÓN",
        "codigo": "evolucion",
        "tipo": "obligatorio",
        "prerreq": []
      },
      {
        "nombre": "FISIOLOGÍA GENERAL",
        "codigo": "fisio_general",
        "tipo": "obligatorio",
        "prerreq": ["bases_integradas_1", "fisica_1"]
      },
      {
        "nombre": "NEUROANATOMÍA",
        "codigo": "neuroanato",
        "tipo": "obligatorio",
        "prerreq": []
      },
      {
        "nombre": "ANATOMÍA ESTRUCTURAL Y FUNCIONAL II",
        "codigo": "anato_2",
        "tipo": "obligatorio",
        "prerreq": ["anato_1"]
      },
      {
        "nombre": "INTRODUCCIÓN AL ESTUDIO DEL MOVIMIENTO HUMANO",
        "codigo": "mov_humano",
        "tipo": "obligatorio",
        "prerreq": []
      },
      {
        "nombre": "BIOMECÁNICA, LESIÓN Y REPARACIÓN TISULAR",
        "codigo": "biomecanica",
        "tipo": "obligatorio",
        "prerreq": ["tisular"]
      },
      {
        "nombre": "LECTURA COMPRENSIVA DE ARTICULOS CIENTÍFICOS",
        "codigo": "lectura_comp",
        "tipo": "investigacion",
        "prerreq": []
      },
      {
        "nombre": "CURSOS DE FORMACIÓN GENERAL",
        "codigo": "form_gen_2",
        "tipo": "formacion_general",
        "prerreq": []
      },
      {
        "nombre": "INGLÉS II",
        "codigo": "ingles_2",
        "tipo": "idiomas",
        "prerreq": ["ingles_1"]
      }
        {
    "titulo": "2° Año - III Semestre",
    "ramos": [
      {
        "nombre": "EXAMEN KINÉSICO BÁSICO",
        "codigo": "examen_kinesico",
        "tipo": "obligatorio",
        "prerreq": ["anato_2", "biomecanica"]
      },
      {
        "nombre": "FISIOLOGÍA DE SISTEMAS",
        "codigo": "fisio_sistemas",
        "tipo": "obligatorio",
        "prerreq": ["fisio_general"]
      },
      {
        "nombre": "BASES INTEGRADAS DE INFECTOLOGÍA, INMUNOLOGÍA Y FARMACOLOGÍA",
        "codigo": "bases_inmuno_farma",
        "tipo": "obligatorio",
        "prerreq": ["fisio_general", "neuroanato"]
      },
      {
        "nombre": "CONTROL Y APRENDIZAJE MOTOR",
        "codigo": "control_motor",
        "tipo": "obligatorio",
        "prerreq": []
      },
      {
        "nombre": "EDUCACIÓN FÍSICA I",
        "codigo": "edufis_1",
        "tipo": "obligatorio",
        "prerreq": []
      },
      {
        "nombre": "FUNDAMENTOS DE LA INVESTIGACIÓN CIENTÍFICA",
        "codigo": "fund_investigacion",
        "tipo": "obligatorio",
        "prerreq": []
      },
      {
        "nombre": "INGLÉS III",
        "codigo": "ingles_3",
        "tipo": "idiomas",
        "prerreq": ["ingles_2"]
      }
    ]
  },
  {
    "titulo": "2° Año - IV Semestre",
    "ramos": [
      {
        "nombre": "PROCEDIMIENTOS TERAPÉUTICOS BÁSICOS Y GENERALES",
        "codigo": "procedimientos_basicos",
        "tipo": "obligatorio",
        "prerreq": ["examen_kinesico", "mov_humano"]
      },
      {
        "nombre": "FISIOPATOLOGÍA Y FARMACOLOGÍA DE SISTEMAS",
        "codigo": "fisiofarma_sistemas",
        "tipo": "obligatorio",
        "prerreq": ["fisio_sistemas", "bases_inmuno_farma"]
      },
      {
        "nombre": "KINESIOLOGÍA DEL DESARROLLO PSICOMOTOR",
        "codigo": "kine_desarrollo",
        "tipo": "obligatorio",
        "prerreq": ["control_motor"]
      },
      {
        "nombre": "ANÁLISIS BIOINSTRUMENTAL DEL MOVIMIENTO HUMANO",
        "codigo": "analisis_bioinstrumental",
        "tipo": "obligatorio",
        "prerreq": []
      },
      {
        "nombre": "EXAMEN DE LA CONDICIÓN FÍSICA Y LA CONDUCTA MOTORA",
        "codigo": "condicion_fisica",
        "tipo": "obligatorio",
        "prerreq": ["examen_kinesico"]
      },
      {
        "nombre": "ANÁLISIS EPIDEMIOLÓGICO",
        "codigo": "analisis_epidemiologico",
        "tipo": "investigacion",
        "prerreq": []
      },
      {
        "nombre": "LECTURA CRÍTICA DE ARTÍCULOS CIENTÍFICOS",
        "codigo": "lectura_critica",
        "tipo": "investigacion",
        "prerreq": []
      },
      {
        "nombre": "INGLÉS IV",
        "codigo": "ingles_4",
        "tipo": "idiomas",
        "prerreq": ["ingles_3"]
      }
        {
    "titulo": "3° Año - V Semestre",
    "ramos": [
      {
        "nombre": "EVALUACIÓN E INTERVENCIÓN EN CUIDADOS RESPIRATORIOS I",
        "codigo": "eval_respiratorio_i",
        "tipo": "obligatorio",
        "prerreq": ["condicion_fisica", "fisiofarma_sistemas"]
      },
      {
        "nombre": "EVALUACIÓN E INTERVENCIÓN EN NEUROKINESIOLOGÍA I",
        "codigo": "eval_neuro_i",
        "tipo": "obligatorio",
        "prerreq": ["kine_desarrollo"]
      },
      {
        "nombre": "EVALUACIÓN E INTERVENCIÓN EN MÚSCULOESQUELÉTICO I",
        "codigo": "eval_musculo_i",
        "tipo": "obligatorio",
        "prerreq": ["procedimientos_basicos"]
      },
      {
        "nombre": "EFECTOS DE LA ACTIVIDAD FÍSICA EN LA SALUD",
        "codigo": "efectos_act_fisica",
        "tipo": "obligatorio",
        "prerreq": ["fisiofarma_sistemas", "condicion_fisica"]
      },
      {
        "nombre": "EDUCACIÓN FÍSICA II",
        "codigo": "edufis_2",
        "tipo": "obligatorio",
        "prerreq": ["edufis_1"]
      },
      {
        "nombre": "ANÁLISIS DEL MODELO DE SALUD CHILENO",
        "codigo": "modelo_salud_chileno",
        "tipo": "investigacion",
        "prerreq": ["analisis_epidemiologico"]
      },
      {
        "nombre": "REVISIÓN BIBLIOGRÁFICA",
        "codigo": "revision_biblio",
        "tipo": "investigacion",
        "prerreq": ["lectura_critica"]
      },
      {
        "nombre": "MÓDULO INTEGRADO, INTERDISCIPLINARIO Y MULTIPROFESIONAL I",
        "codigo": "modulo_integrado_i",
        "tipo": "formacion_general",
        "prerreq": []
      }
    ]
  },
  {
    "titulo": "3° Año - VI Semestre",
    "ramos": [
      {
        "nombre": "EVALUACIÓN E INTERVENCIÓN EN CUIDADOS RESPIRATORIOS II",
        "codigo": "eval_respiratorio_ii",
        "tipo": "obligatorio",
        "prerreq": ["eval_respiratorio_i"]
      },
      {
        "nombre": "EVALUACIÓN E INTERVENCIÓN EN NEUROKINESIOLOGÍA II",
        "codigo": "eval_neuro_ii",
        "tipo": "obligatorio",
        "prerreq": ["eval_neuro_i"]
      },
      {
        "nombre": "EVALUACIÓN E INTERVENCIÓN EN MÚSCULO-ESQUELÉTICO II",
        "codigo": "eval_musculo_ii",
        "tipo": "obligatorio",
        "prerreq": ["eval_musculo_i"]
      },
      {
        "nombre": "RAZONAMIENTO CLÍNICO",
        "codigo": "razonamiento_clinico",
        "tipo": "obligatorio",
        "prerreq": ["eval_respiratorio_i", "eval_neuro_i", "eval_musculo_i"]
      },
      {
        "nombre": "ACTIVIDAD FÍSICA Y DEPORTES",
        "codigo": "act_fisica_deportes",
        "tipo": "obligatorio",
        "prerreq": ["efectos_act_fisica", "edufis_2"]
      },
      {
        "nombre": "RESPONSABILIDAD DEL EJERCICIO PROFESIONAL",
        "codigo": "responsabilidad_profesional",
        "tipo": "investigacion",
        "prerreq": []
      },
      {
        "nombre": "DISEÑO Y FORMULACIÓN DE PROYECTOS DE INVESTIGACIÓN",
        "codigo": "diseno_proyectos",
        "tipo": "investigacion",
        "prerreq": ["revision_biblio"]
      },
      {
        "nombre": "CURSOS DE FORMACIÓN GENERAL",
        "codigo": "form_gen_3",
        "tipo": "formacion_general",
        "prerreq": []
      }
        {
    "titulo": "4° Año - VII Semestre",
    "ramos": [
      {
        "nombre": "INTERVENCIÓN PROFESIONAL EN CONTEXTO I",
        "codigo": "interv_contexto_i",
        "tipo": "obligatorio",
        "prerreq": [
          "efectos_act_fisica",
          "eval_respiratorio_ii",
          "eval_neuro_ii",
          "eval_musculo_ii"
        ]
      },
      {
        "nombre": "ANÁLISIS DE LA RELACIÓN PERSONA ENTORNO",
        "codigo": "persona_entorno",
        "tipo": "obligatorio",
        "prerreq": [
          "eval_respiratorio_ii",
          "eval_neuro_ii",
          "eval_musculo_ii"
        ]
      },
      {
        "nombre": "ESTRATEGIAS DEPORTIVAS Y RECREATIVAS",
        "codigo": "estrategias_deportivas",
        "tipo": "obligatorio",
        "prerreq": ["act_fisica_deportes"]
      },
      {
        "nombre": "DETERMINANTES SOCIALES DE LA SALUD",
        "codigo": "determinantes_salud",
        "tipo": "investigacion",
        "prerreq": ["modelo_salud_chileno"]
      },
      {
        "nombre": "CONCEPTOS BÁSICOS DE ADMINISTRACIÓN EN SALUD",
        "codigo": "admin_basica_salud",
        "tipo": "investigacion",
        "prerreq": ["modelo_salud_chileno"]
      },
      {
        "nombre": "EJECUCIÓN DE PROYECTOS DE INVESTIGACION I",
        "codigo": "ejecucion_i",
        "tipo": "investigacion",
        "prerreq": ["diseno_proyectos"]
      },
      {
        "nombre": "METODOLOGÍAS DE ENSEÑANZA APRENDIZAJE",
        "codigo": "metodologias_ensenanza",
        "tipo": "investigacion",
        "prerreq": []
      },
      {
        "nombre": "CURSOS DE FORMACIÓN GENERAL",
        "codigo": "form_gen_4",
        "tipo": "formacion_general",
        "prerreq": []
      }
    ]
  },
  {
    "titulo": "4° Año - VIII Semestre",
    "ramos": [
      {
        "nombre": "INTERVENCIÓN PROFESIONAL EN CONTEXTO II",
        "codigo": "interv_contexto_ii",
        "tipo": "obligatorio",
        "prerreq": [
          "eval_respiratorio_ii",
          "eval_neuro_ii",
          "eval_musculo_ii"
        ]
      },
      {
        "nombre": "EVALUACIÓN ERGONÓMICA",
        "codigo": "eval_ergonomica",
        "tipo": "obligatorio",
        "prerreq": ["persona_entorno"]
      },
      {
        "nombre": "ESTRATEGIAS DEPORTIVAS Y RECREATIVAS APLICADAS",
        "codigo": "estrategias_aplicadas",
        "tipo": "obligatorio",
        "prerreq": ["estrategias_deportivas"]
      },
      {
        "nombre": "PROGRAMAS DE PROMOCIÓN Y PREVENCIÓN EN SALUD",
        "codigo": "programas_promocion",
        "tipo": "investigacion",
        "prerreq": ["determinantes_salud"]
      },
      {
        "nombre": "PROYECTOS DE EMPRENDIMIENTO",
        "codigo": "proyectos_emprendimiento",
        "tipo": "investigacion",
        "prerreq": ["admin_basica_salud"]
      },
      {
        "nombre": "EJECUCIÓN DE PROYECTOS DE INVESTIGACIÓN II",
        "codigo": "ejecucion_ii",
        "tipo": "investigacion",
        "prerreq": ["ejecucion_i"]
      },
      {
        "nombre": "APLICACIÓN BÁSICA DE METODOLOGÍAS DOCENTES",
        "codigo": "aplicacion_docente",
        "tipo": "investigacion",
        "prerreq": ["metodologias_ensenanza"]
      },
      {
        "nombre": "MÓDULO INTEGRADO, INTERDISCIPLINARIO Y MULTIPROFESIONAL II",
        "codigo": "modulo_integrado_ii",
        "tipo": "formacion_general",
        "prerreq": ["modulo_integrado_i"]
      }
        {
    "titulo": "5° Año - IX Semestre",
    "ramos": [
      {
        "nombre": "INTERVENCIÓN PROFESIONAL I",
        "codigo": "interv_profesional_i",
        "tipo": "obligatorio",
        "prerreq": ["interv_contexto_ii"]
      },
      {
        "nombre": "PROYECTOS DE INTERVENCIÓN ERGONÓMICA",
        "codigo": "proyectos_ergonomica",
        "tipo": "obligatorio",
        "prerreq": ["eval_ergonomica"]
      },
      {
        "nombre": "COMUNICACIÓN CIENTÍFICA",
        "codigo": "comunicacion_cientifica",
        "tipo": "obligatorio",
        "prerreq": ["ejecucion_ii"]
      }
    ]
  },
  {
    "titulo": "5° Año - X Semestre",
    "ramos": [
      {
        "nombre": "INTERVENCIÓN PROFESIONAL II",
        "codigo": "interv_profesional_ii",
        "tipo": "obligatorio",
        "prerreq": ["interv_profesional_i"]
      },
      {
        "nombre": "CURSOS DE PROFUNDIZACIÓN DISCIPLINAR Y PROFESIONAL",
        "codigo": "profundizacion_disciplinar",
        "tipo": "obligatorio",
        "prerreq": ["interv_contexto_i", "interv_contexto_ii"]
      },
      {
        "nombre": "INTERVENCIÓN EN SALUD COMUNITARIA",
        "codigo": "interv_comunitaria",
        "tipo": "investigacion",
        "prerreq": ["programas_promocion"]
      },
      {
        "nombre": "ADMINISTRACIÓN EN SALUD",
        "codigo": "admin_salud",
        "tipo": "investigacion",
        "prerreq": ["admin_basica_salud"]
      }
    ]
  }
];
    
  },
    ]
  },
    ]
  },
    ]
  },


  
