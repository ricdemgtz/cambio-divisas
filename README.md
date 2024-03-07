# Descripción del Proyecto - Cotizaciones Online

Este repositorio alberga el código fuente de un proyecto que implementa un sitio de Cotizaciones Online, destacando la aplicación de conceptos de programación asíncrona. Siguiendo las instrucciones del proyecto, se consulta a tres API externas para obtener la cotización del dólar con respecto al bitcoin, euro y peso argentino.

## Características Principales

- **Carga Síncrona de Elementos HTML:** Se ha implementado un documento HTML con elementos vacíos, cuyos contenidos se cargan de manera síncrona a través de código JavaScript.

- **Consulta a APIs Externas:** Se utiliza código asíncrono, ya sea con `async/await`, `fetch`, o `XMLHttpRequest`, para obtener información de tres APIs externas que contienen los datos de cotización necesarios.

- **Presentación Asíncrona de Datos:** Se demuestra cómo la información externa se carga de manera asincrónica en comparación con el contenido local del sitio, destacando los beneficios del asincronismo.

- **Indicador de Procesamiento:** Se incluye una imagen tipo gif visible mientras los datos se procesan, desapareciendo cuando la información está completamente cargada. Esto mejora la experiencia del usuario durante la espera.

## Instrucciones para Ejecutar

1. Clona este repositorio en tu máquina local.
2. Abre el archivo HTML en un navegador web.
3. Observa cómo los elementos visuales se cargan de forma síncrona, mientras que los datos externos se obtienen asincrónicamente.
