# FitLife – Tu Gimnasio Personal

Proyecto web desarrollado para el Trabajo Práctico Final de **Generación T – Módulo 3** (EPET N°24 – 5to C).

## Alumno
- **Nombre:** Tiago Bautista León
- **Curso:** 5to - C
- **Institución:** EPET N°24 – Campus GT

## Descripción del proyecto
**FitLife** es una aplicación web frontend para el seguimiento personal de actividad física y hábitos saludables. Cuenta con cuatro secciones principales:
1. **Entrenamientos:** Registro de sesiones (nombre, tipo de ejercicio, duración en minutos y calorías quemadas) con validación de datos desacoplada.
2. **Alimentación:** Control de comidas diarias y calorías consumidas.
3. **Progreso:** Seguimiento de peso actual y objetivo fitness del usuario.
4. **Rutinas:** Creación de rutinas personalizadas con ejercicios y series.

## Estructura del repositorio
- `index.html`: Estructura principal de la aplicación.
- `fitlife.css`: Estilos visuales en tema oscuro.
- `fitlife.js`: Lógica de interfaz y función pura `validarEntrenamiento()` refactorizada para desacoplar la validación del DOM.
- `tests/fitlife.test.js`: Suite de tests unitarios (casos válidos, inválidos y límite).
- `agents/revisor.md`: Subagente revisor de código enfocado en seguridad y robustez.

## Cómo ejecutar el proyecto
1. Clonar o descargar este repositorio.
2. Abrir `index.html` directamente en cualquier navegador web.

## Cómo ejecutar los tests unitarios
Con Node.js y Jest instalados:
```bash
npm test
