# Arquitectura de producción del piloto

El piloto debe recorrer el mismo sistema técnico que se usaría después para producir el canal. La automatización diaria seguirá bloqueada hasta validar un video largo y tres Shorts, pero la prueba no se hará artesanalmente.

## Flujo

1. Especificación editorial en archivos de datos.
2. Validación automática de reglas y respuesta única.
3. Generación determinista del tablero SVG.
4. Rasterización con una fuente empaquetada.
5. Síntesis de voz.
6. Montaje audiovisual.
7. Controles automáticos técnicos.
8. Revisión humana editorial y visual.
9. Publicación manual durante el piloto.

## Tipografía

- Los SVG no usarán la abreviatura CSS `font:`.
- Peso, tamaño y familia se declaran como propiedades separadas.
- La fuente del pipeline se almacena en `assets/fonts/`.
- La imagen de ejecución debe registrar o cargar esa fuente antes de rasterizar.
- No se dependerá de Arial ni de fuentes instaladas incidentalmente en un servidor.

## Validación de respuesta única

Cada juego declara su regla, opciones y respuesta esperada. El validador calcula las respuestas que incumplen la regla y detiene la generación cuando:

- no existe ninguna respuesta;
- existen dos o más respuestas posibles;
- la respuesta calculada no coincide con la declarada;
- faltan propiedades necesarias para evaluar la regla.

Las rondas 1–4 ya usan este contrato. El comando `npm run pilot` ejecuta pruebas negativas, valida los datos, genera los cinco SVG y los rasteriza.

## Alcance actual

El generador cubre las rondas 1–4 y produce cinco tableros, porque la ronda de memoria requiere estados anterior y posterior. La siguiente etapa incorporará voz y montaje temporal sobre estos mismos artefactos.
