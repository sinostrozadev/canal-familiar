# Piloto — El museo de las cosas imposibles

## Prototipo visual y narrativo: rondas 1–4

**Estado:** especificación v0.1 para prototipado  
**Formato maestro:** 16:9, 3840 × 2160, zona segura central 3200 × 1800  
**Audiencia:** público general hispanohablante; experiencia compartida en familia  
**Dirección visual:** colorida contemporánea, limpia y no infantilizada  
**Narración candidata:** Lorenzo, pendiente de identificar la voz y realizar prueba de audio

---

## Sistema visual común

### Paleta

| Uso | Color | Hex |
|---|---|---|
| Fondo principal | Azul noche suave | `#172554` |
| Superficie clara | Marfil | `#FFF7E8` |
| Acento 1 | Coral | `#F0645A` |
| Acento 2 | Turquesa | `#22B8A7` |
| Acento 3 | Amarillo | `#F6C84C` |
| Acento 4 | Violeta | `#7957D5` |
| Texto oscuro | Azul tinta | `#132238` |
| Respuesta correcta | Verde | `#34A853` |

### Reglas de legibilidad

- Máximo ocho objetos relevantes por pantalla durante las primeras cuatro rondas.
- Cada objeto debe ocupar al menos 12% de la altura del cuadro.
- La diferencia nunca dependerá únicamente de una variación cromática sutil.
- El temporizador se muestra como arco circular en la esquina superior derecha.
- Los rótulos se limitan a la pregunta y, durante la revelación, una explicación breve.
- La respuesta se señala con contorno verde, acercamiento de cámara y repetición animada de la regla.
- La música baja 4 dB durante instrucciones y 6 dB durante explicaciones.

### Ritmo común por ronda

1. Entrada de sala: 0,6–0,8 s.
2. Pregunta del narrador: 2,5–4 s.
3. Tablero completamente quieto durante el desafío.
4. Aviso sonoro discreto en los últimos dos segundos.
5. Revelación: 0,8 s.
6. Explicación visual y oral: 3–5 s.

---

## Ronda 1 — El jarrón intruso

### Objetivo

Enseñar las reglas del programa con una respuesta inequívoca y una dificultad baja.

### Composición

- Sala coral clara, con pared `#FFF1E6` y piso ligeramente más oscuro.
- Seis pedestales distribuidos en dos filas de tres.
- Jarrones numerados visualmente mediante una pequeña placa del 1 al 6.
- Cámara frontal; todos los jarrones tienen el mismo tamaño exterior.

### Regla visual

Cada jarrón contiene dos símbolos grandes y separados:

- Símbolo grande en la mitad superior.
- Símbolo pequeño en la mitad inferior.

Los jarrones 1, 2, 3, 5 y 6 cumplen la regla. El **jarrón 4** invierte los tamaños: símbolo pequeño arriba y grande abajo.

Para impedir una respuesta por color, los seis jarrones usan combinaciones diferentes y todos los colores aparecen tanto en piezas correctas como en la incorrecta.

### Cronometraje

- Observación libre antes del reloj: 1,5 s.
- Tiempo de respuesta: 7 s.
- Revelación y explicación: 4 s.

### Guion de Lorenzo

> Bienvenido al Museo de las Cosas Imposibles. En cada sala hay algo que rompe las reglas. Comenzamos con una sencilla: cinco jarrones siguen el mismo patrón y uno no. ¿Cuál es? Tienes siete segundos.

**Revelación:**

> Es el número cuatro. En todos los demás, la figura grande está arriba y la pequeña abajo. Este las tiene invertidas. Si lo encontraste, sumas tu primer punto.

### Animación de solución

1. Se atenúan los jarrones correctos al 55%.
2. El jarrón 4 aumenta a 110% durante 250 ms.
3. Aparecen dos flechas que comparan sus símbolos con los del jarrón 1.
4. Contorno verde y texto: **“Tamaños invertidos”**.

### Prueba de calidad

Cinco personas deben identificar la misma regla sin recibir explicación previa. Si alguien elige por color o forma exterior, se rediseña.

---

## Ronda 2 — La sombra rebelde

### Objetivo

Introducir razonamiento espacial básico sin depender de conocimientos culturales.

### Composición

- Sala turquesa pálida.
- Cinco esculturas geométricas distintas sobre pedestales alineados.
- Una lámpara grande y visible en el extremo superior izquierdo.
- Las sombras son formas simples, opacas y de igual intensidad.

### Regla visual

La luz llega desde arriba a la izquierda, por lo que todas las sombras deben proyectarse abajo a la derecha. La **escultura 2** proyecta su sombra abajo a la izquierda.

La silueta de cada sombra debe corresponder correctamente a su objeto; solo cambia su dirección. Así existe una única anomalía.

### Cronometraje

- Observación libre: 1 s.
- Tiempo de respuesta: 8 s.
- Revelación y explicación: 4,5 s.

### Guion de Lorenzo

> Segunda sala. La lámpara ilumina todas las esculturas desde el mismo lugar, pero una sombra decidió ignorarla. ¿Cuál está apuntando hacia donde no corresponde?

**Revelación:**

> La número dos. Si la luz viene desde la izquierda, la sombra debe alejarse hacia la derecha. Esta viaja justo en la dirección contraria.

### Animación de solución

1. Una línea amarilla muestra la dirección de la luz.
2. Flechas turquesas aparecen sobre cuatro sombras correctas.
3. Una flecha coral resalta la dirección contraria de la sombra 2.
4. La sombra incorrecta se reposiciona brevemente para enseñar cómo debería verse.

### Prueba de calidad

La lámpara debe resultar visible al primer vistazo. Si la dirección de la iluminación parece cenital o ambigua, la ronda no se aprueba.

---

## Ronda 3 — La sala cambió

### Objetivo

Cambiar de percepción estática a memoria visual y renovar la atención.

### Composición inicial

- Pared violeta muy clara.
- Seis objetos grandes en una cuadrícula de dos filas:
  1. Cámara antigua mirando a la izquierda.
  2. Gramófono.
  3. Globo terráqueo.
  4. Reloj de arena.
  5. Teléfono antiguo.
  6. Catalejo.
- Los objetos tienen siluetas y colores claramente diferentes.

### Cambio

Después de cuatro segundos de observación, una cortina animada cruza la pantalla durante 0,7 s. Al retirarse, la **cámara antigua mira hacia la derecha**. Ningún otro elemento cambia de tamaño, color, posición o iluminación.

### Cronometraje

- Memorización: 4 s.
- Transición de cortina: 0,7 s.
- Tiempo para responder: 7 s.
- Revelación y repetición: 5 s.

### Guion de Lorenzo

> Ahora no busques todavía. Memoriza esta sala: tienes cuatro segundos.

**Después de la cortina:**

> Algo cambió. ¿Puedes descubrir qué fue?

**Revelación:**

> La cámara estaba mirando hacia la izquierda y ahora mira hacia la derecha. No desapareció nada: solo cambió la dirección.

### Animación de solución

1. La cámara recibe contorno verde.
2. Se presenta una comparación antes/después dividida verticalmente.
3. Una flecha curva muestra el giro.
4. El resto de la composición permanece congelado para demostrar que no hubo otro cambio.

### Prueba de calidad

El giro debe ser perceptible, pero no evidente durante el primer cuadro posterior. Se probarán dos ángulos: perfil completo y tres cuartos. Se conservará el que produzca entre 60% y 80% de aciertos en la prueba interna.

---

## Ronda 4 — El cuadro que rompe la regla

### Objetivo

Introducir una regla contable sencilla y cerrar el primer bloque con mayor dificultad.

### Composición

- Galería amarilla suave.
- Seis cuadros cuadrados distribuidos en dos filas de tres.
- Cada marco tiene un color diferente, pero el interior usa siempre azul tinta, coral y turquesa.
- Los símbolos son grandes y están separados para permitir contarlos rápidamente.

### Regla visual

Cada cuadro correcto contiene exactamente:

- 2 círculos.
- 3 líneas.
- 1 triángulo.

El **cuadro 5** contiene 2 círculos, 3 líneas y **2 triángulos**. Ningún símbolo se superpone ni queda parcialmente oculto.

### Cronometraje

- Observación libre: 1 s.
- Tiempo para responder: 9 s.
- Revelación y explicación: 5 s.

### Guion de Lorenzo

> Estos cuadros parecen completamente distintos, pero cinco obedecen una regla exacta. Uno tiene algo de más. ¿Cuál rompe la colección?

**Revelación:**

> Es el cuadro cinco. Todos tienen dos círculos, tres líneas y un solo triángulo. Aquí se escondió un segundo triángulo.

### Animación de solución

1. Los símbolos de un cuadro correcto se cuentan con pulsos: 2, 3, 1.
2. Se repite el conteo sobre el cuadro 5: 2, 3, 2.
3. El triángulo adicional parpadea en coral.
4. Texto final: **“Sobra un triángulo”**.

### Prueba de calidad

La ronda no debe convertirse en una búsqueda de un símbolo diminuto. Todos los triángulos tendrán el mismo tamaño mínimo y contraste.

---

## Unión narrativa del primer bloque

Después de la ronda 4, el narrador entrega un resultado parcial sin interrumpir demasiado el ritmo:

> Primer sector completado. Si llevas cuatro puntos, tu vista está bien entrenada. Pero hasta ahora el museo solo estaba calentando.

La cámara avanza hacia una puerta marcada con dos cerraduras. Esto anticipa que las próximas rondas podrán contener más de una regla o solución.

## Criterios para aprobar el prototipo

- Las cuatro respuestas son únicas y demostrables.
- Ninguna diferencia depende de una pantalla grande.
- Las instrucciones se comprenden escuchando una sola vez.
- El temporizador no empieza antes de que la pregunta termine.
- La explicación aporta una regla verificable.
- Las cuatro rondas se sienten diferentes pese a compartir identidad gráfica.
- El narrador no repite la misma fórmula de felicitación.
- El bloque completo dura aproximadamente 90–110 segundos.

## Próxima prueba

Construir primero tableros estáticos de las cuatro rondas y revisarlos en formato 16:9 a tamaño de teléfono. Solo después se animarán y se sincronizarán con una muestra de voz.
