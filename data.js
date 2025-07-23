const malla = [
{
"titulo": "1° Año - I Semestre", "ramos": [
{
"codigo": "bioqu_mica_", "nombre": "Bioquímica,", "tipo": "obligatorio", "prerreq": [
"inmunolog_a_2"
]
},
{
"codigo": "introducci_n", "nombre": "Introducción", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "kinesiolog_a", "nombre": "Kinesiología", "tipo": "obligatorio", "prerreq": [
"neuroanatom_a"
]
},
{
"codigo": "estructural", "nombre": "Estructural", "tipo": "obligatorio", "prerreq": [
"profesional_2", "estructural_2", "profundizaci_n"
]
},
{
"codigo": "estrategias", "nombre": "Estrategias", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "bibliogr_fica", "nombre": "Bibliográfica", "tipo": "obligatorio", "prerreq": [
"formulaci_n_2", "_evaluaci_n_2", "_fisiolog_a", "bioqu_mica 2"
]
},
{
"codigo": "bioqu_mica 2", "nombre": "Bioquímica,", "tipo": "obligatorio", "prerreq": [
"inmunolog_a_2"
]
},
{
"codigo": "neuroanatom_a", "nombre": "Neuroanatomía",

"prerreq": [ "neuroanatom_a"
]
},
{
"codigo": "estructural_2", "nombre": "Estructural", "tipo": "obligatorio", "prerreq": [
"profesional_2", "neuroanatom_a"
]
},
{
"codigo": "estructural", "nombre": "Estructural", "tipo": "obligatorio", "prerreq": [
"profesional_2"
]
}
]
},
{
"titulo": "1° Año - II Semestre", "ramos": [
{
"codigo": "introducci_n_2", "nombre": "Introducción", "tipo": "obligatorio", "prerreq": [
"procedimientos"
]
},
{
"codigo": "biomec_nica_", "nombre": "Biomecánica,", "tipo": "obligatorio", "prerreq": [
"_evaluaci_n_2", "estructural_2", "profundizaci_n", "estructural_2"
]
},
{
"codigo": "comprensiva", "nombre": "Comprensiva", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "cient_ficos", "nombre": "Científicos", "tipo": "idiomas", "prerreq": [
"formulaci_n_2", "kinesiolog_a_2", "neuroanatom_a"
]
},
{
"codigo": "estructural_2", "nombre": "Estructural",

"prerreq": [ "profesional_2"
]
},
{
"codigo": "_biomec_nica_", "nombre": "-Biomecánica,", "tipo": "obligatorio", "prerreq": [
"_evaluaci_n_2", "_fisiolog_a"
]
},
{
"codigo": "_fisiolog_a", "nombre": "-Fisiología", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "infectolog_a_", "nombre": "Infectología,", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "inmunolog_a", "nombre": "Inmunología", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "farmacolog_a", "nombre": "Farmacología", "tipo": "obligatorio", "prerreq": []
}
]
},
{
"titulo": "2° Año - I Semestre", "ramos": [
{
"codigo": "_fisiolog_a_2", "nombre": "-Fisiología", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "_neuroanatom_a", "nombre": "-Neuroanatomía", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "aprendizaje", "nombre": "Aprendizaje", "tipo": "obligatorio", "prerreq": [
"_evaluaci_n_2"
]
},
{
"codigo": "fundamentos", "nombre": "Fundamentos",

"tipo": "obligatorio", "prerreq": []
},
{
"codigo": "investigaci_n", "nombre": "Investigación", "tipo": "idiomas", "prerreq": [
"cient_ficos"
]
},
{
"codigo": "procedimientos", "nombre": "Procedimientos", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "terap_uticos", "nombre": "Terapéuticos", "tipo": "obligatorio", "prerreq": [
"kinesiolog_a_2"
]
},
{
"codigo": "_introducci_n", "nombre": "-Introducción", "tipo": "obligatorio", "prerreq": [
"procedimientos"
]
},
{
"codigo": "fisiopatolog_a", "nombre": "Fisiopatología", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "farmacolog_a_2", "nombre": "Farmacología", "tipo": "obligatorio", "prerreq": []
}
]
},
{
"titulo": "2° Año - II Semestre", "ramos": [
{
"codigo": "_fisiolog_a", "nombre": "-Fisiología", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "infectolog_a 2", "nombre": "Infectología,", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "inmunolog_a_2", "nombre": "Inmunología",

"tipo": "obligatorio", "prerreq": []
},
{
"codigo": "farmacolog_a", "nombre": "Farmacología", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "kinesiolog_a_2", "nombre": "Kinesiología", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "aprendizaje_2", "nombre": "Aprendizaje", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "bioinstrumental", "nombre": "Bioinstrumental", "tipo": "obligatorio", "prerreq": [
"procedimientos", "comunicaci_n", "kinesiolog_a_2"
]
},
{
"codigo": "epidemiol_gico", "nombre": "Epidemiológico", "tipo": "investigacion", "prerreq": [
"estructural_2"
]
},
{
"codigo": "cient_ficos_2", "nombre": "Científicos", "tipo": "idiomas", "prerreq": [
"_evaluaci_n_2"
]
},
{
"codigo": "intervenci_n", "nombre": "Intervención", "tipo": "obligatorio", "prerreq": []
}
]
},
{
"titulo": "3° Año - I Semestre", "ramos": [
{
"codigo": "respiratorios", "nombre": "Respiratorios", "tipo": "obligatorio", "prerreq": [
"comunicaci_n"
]

},
{
"codigo": "_fisiopatolog_a", "nombre": "-Fisiopatología", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "farmacolog_a_2", "nombre": "Farmacología", "tipo": "obligatorio", "prerreq": [
"_evaluaci_n_2"
]
},
{
"codigo": "intervenci_n_2", "nombre": "Intervención", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "neurokinesiolog_a", "nombre": "Neurokinesiología", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "_kinesiolog_a", "nombre": "-Kinesiología", "tipo": "obligatorio", "prerreq": [
"_evaluaci_n_2"
]
},
{
"codigo": "intervenci_n", "nombre": "Intervención", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "m_sculoesquel_tico", "nombre": "Músculoesquelético", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "_procedimientos", "nombre": "-Procedimientos", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "terap_uticos_2", "nombre": "Terapéuticos", "tipo": "obligatorio", "prerreq": []
}
]
},
{
"titulo": "3° Año - II Semestre", "ramos": [
{

"codigo": "_fisiopatolog_a_2", "nombre": "-Fisiopatología", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "farmacolog_a", "nombre": "Farmacología", "tipo": "obligatorio", "prerreq": [
"comunicaci_n", "_evaluaci_n_2", "_evaluaci_n_2"
]
},
{
"codigo": "epidemiol_gico_2", "nombre": "Epidemiológico", "tipo": "investigacion", "prerreq": []
},
{
"codigo": "bibliogr_fica_2", "nombre": "Bibliográfica", "tipo": "obligatorio", "prerreq": [
"estructural_2"
]
},
{
"codigo": "cient_ficos", "nombre": "Científicos", "tipo": "investigacion", "prerreq": []
},
{
"codigo": "interdisciplinario", "nombre": "Interdisciplinario", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "multiprofesional", "nombre": "Multiprofesional", "tipo": "general",
"prerreq": [ "_evaluaci_n_2"
]
},
{
"codigo": "intervenci_n_2", "nombre": "Intervención", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "respiratorios_2", "nombre": "Respiratorios", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "_evaluaci_n", "nombre": "-Evaluación", "tipo": "obligatorio",

"prerreq": []
}
]
},
{
"titulo": "4° Año - I Semestre", "ramos": [
{
"codigo": "intervenci_n", "nombre": "Intervención", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "respiratorios", "nombre": "Respiratorios", "tipo": "obligatorio", "prerreq": [
"_evaluaci_n_2"
]
},
{
"codigo": "intervenci_n_2", "nombre": "Intervención", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "neurokinesiolog_a_2", "nombre": "Neurokinesiología", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "_evaluaci_n_2", "nombre": "-Evaluación", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "intervenci_n", "nombre": "Intervención", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "neurokinesiolog_a", "nombre": "Neurokinesiología", "tipo": "obligatorio", "prerreq": [
"_evaluaci_n_2"
]
},
{
"codigo": "intervenci_n_2", "nombre": "Intervención", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "_evaluaci_n", "nombre": "-Evaluación",

{
"codigo": "intervenci_n", "nombre": "Intervención", "tipo": "obligatorio", "prerreq": []
}
]
},
{
"titulo": "4° Año - II Semestre", "ramos": [
{
"codigo": "m_sculo_esquel_tico", "nombre": "Músculo-Esquelético", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "m_sculoesquel_tico_2", "nombre": "Músculoesquelético", "tipo": "obligatorio",
"prerreq": []
},
{
"codigo": "razonamiento", "nombre": "Razonamiento", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "_evaluaci_n_2", "nombre": "-Evaluación", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "intervenci_n_2", "nombre": "Intervención", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "respiratorios_2", "nombre": "Respiratorios", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "_evaluaci_n", "nombre": "-Evaluación", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "intervenci_n", "nombre": "Intervención", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "neurokinesiolog_a_2", "nombre": "Neurokinesiología",

{
"codigo": "_evaluaci_n_2", "nombre": "-Evaluación", "tipo": "obligatorio", "prerreq": []
}
]
},
{
"titulo": "5° Año - I Semestre", "ramos": [
{
"codigo": "intervenci_n_2", "nombre": "Intervención", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "m_sculoesquel_tico", "nombre": "Músculoesquelético", "tipo": "obligatorio", "prerreq": [
"_evaluaci_n_2"
]
},
{
"codigo": "responsabilidad", "nombre": "Responsabilidad", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "profesional", "nombre": "Profesional", "tipo": "investigacion", "prerreq": []
},
{
"codigo": "formulaci_n", "nombre": "Formulación", "tipo": "obligatorio", "prerreq": [
"procedimientos"
]
},
{
"codigo": "investigaci_n_2", "nombre": "Investigación", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "bibliogr_fica", "nombre": "Bibliográfica", "tipo": "general", "prerreq": [
"formulaci_n_2"
]
},
{
"codigo": "intervenci_n", "nombre": "Intervención",

{
"codigo": "profesional_2", "nombre": "Profesional", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "_evaluaci_n", "nombre": "-Evaluación", "tipo": "obligatorio", "prerreq": []
}
]
},
{
"titulo": "5° Año - II Semestre", "ramos": [
{
"codigo": "intervenci_n_2", "nombre": "Intervención", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "respiratorios", "nombre": "Respiratorios", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "_evaluaci_n_2", "nombre": "-Evaluación", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "intervenci_n", "nombre": "Intervención", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "neurokinesiolog_a", "nombre": "Neurokinesiología", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "_evaluaci_n", "nombre": "-Evaluación", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "intervenci_n_2", "nombre": "Intervención", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "m_sculo_esquel_tico_2", "nombre": "Músculo-Esquelético", "tipo": "obligatorio",
"prerreq": [ "formulaci_n_2",

"profesional_2"
]
},
{
"codigo": "_evaluaci_n_2", "nombre": "-Evaluación", "tipo": "obligatorio", "prerreq": []
},
{
"codigo": "intervenci_n", "nombre": "Intervención", "tipo": "obligatorio", "prerreq": []
}
]
}
];
