/**
 * FRONTEND ACADEMY - BANCO DE PREGUNTAS
 * Tecnologías evaluadas: HTML, CSS, JavaScript
 * Selección aleatoria de 10 preguntas por examen.
 * REQUISITO TÉCNICO: La respuesta correcta se ubica SIEMPRE en la 2da opción (índice 1 / Opción B).
 */

const QUESTION_BANK = {
  javascript: [
    {
      id: 'js-1',
      topic: 'JavaScript',
      question: '¿Cuál es la diferencia fundamental entre `var`, `let` y `const` respecto al ámbito (scope) y hoisting?',
      options: [
        '`var` tiene ámbito de bloque mientras que `let` y `const` tienen ámbito de función.',
        '`var` tiene ámbito de función y es hoisted inicializado como `undefined`; `let` y `const` tienen ámbito de bloque y entran en la Temporal Dead Zone (TDZ).',
        '`const` permite reasignar variables primitivas pero no objetos complejos.',
        '`let` y `const` se elevan (hoisting) y se inicializan automáticamente con el valor `null`.'
      ],
      correctAnswer: 1,
      explanation: '`var` se eleva e inicializa como undefined en el scope de la función, mientras que `let` y `const` tienen scope de bloque y no pueden accederse antes de su declaración (TDZ).'
    },
    {
      id: 'js-2',
      topic: 'JavaScript',
      question: '¿Qué retorna la expresión `typeof NaN` y por qué?',
      options: [
        '`"nan"`, porque es un tipo primitivo especial independiente.',
        '`"number"`, porque en la especificación IEEE 754 representa un valor numérico no representable (Not a Number).',
        '`"undefined"`, ya que representa un valor no numérico indefinido.',
        '`"object"`, porque es una instancia del objeto global Number.'
      ],
      correctAnswer: 1,
      explanation: 'Según la especificación ECMAScript (IEEE 754), NaN pertenece al conjunto de valores del tipo Number.'
    },
    {
      id: 'js-3',
      topic: 'JavaScript',
      question: '¿Cómo funciona el Event Loop de JavaScript al procesar Microtasks y Macrotasks?',
      options: [
        'Las Macrotasks (como `setTimeout`) tienen prioridad absoluta sobre todas las Microtasks (como `Promise.then`).',
        'La cola de Microtasks se vacía completamente después de cada Macrotask antes de realizar el renderizado o pasar a la siguiente Macrotask.',
        'Microtasks y Macrotasks se ejecutan en orden aleatorio según la carga del hilo principal.',
        'Solo se ejecuta una Microtask por cada ciclo del Event Loop.'
      ],
      correctAnswer: 1,
      explanation: 'Al finalizar una macrotask, el Event Loop procesa todas las microtasks pendientes acumuladas antes de continuar con la siguiente macrotask.'
    },
    {
      id: 'js-4',
      topic: 'JavaScript',
      question: '¿Cuál es el resultado de la expresión `[1, 2, 3] + [4, 5, 6]` en JavaScript?',
      options: [
        '`[1, 2, 3, 4, 5, 6]`',
        '`"1,2,34,5,6"`',
        '`NaN`',
        '`TypeError: Cannot add arrays`'
      ],
      correctAnswer: 1,
      explanation: 'El operador `+` convierte ambos arrays a strings primitivos ("1,2,3" y "4,5,6") y los concatena, resultando en "1,2,34,5,6".'
    },
    {
      id: 'js-5',
      topic: 'JavaScript',
      question: '¿Qué ventaja principal ofrece el uso de `WeakMap` frente a un `Map` estándar en JavaScript?',
      options: [
        'Permite iterar sobre sus claves de forma más rápida con el método `forEach`.',
        'Sus claves deben ser objetos y se mantienen con referencias débiles, permitiendo que el Garbage Collector libere memoria si no hay otras referencias al objeto.',
        'Admite valores primitivos como claves (strings, numbers, booleans).',
        'Permite la serialización directa del objeto a formato JSON mediante `JSON.stringify()`.'
      ],
      correctAnswer: 1,
      explanation: 'En WeakMap las claves son obligatoriamente objetos y se almacenan de manera débil, evitando memory leaks cuando el objeto ya no se usa.'
    },
    {
      id: 'js-6',
      topic: 'JavaScript',
      question: 'En una función flecha (arrow function), ¿cómo se determina el valor de `this`?',
      options: [
        'Se vincula dinámicamente al objeto que invoca la función en tiempo de ejecución.',
        'Se captura o hereda léxicamente del contexto circundante en el momento en que se define la función.',
        'Siempre apunta al objeto global `window` o `globalThis`.',
        'Se puede redefinir dinámicamente utilizando `.bind()`, `.call()` o `.apply()`.'
      ],
      correctAnswer: 1,
      explanation: 'Las arrow functions no tienen su propio `this`; capturan el valor de `this` del contexto léxico donde fueron creadas.'
    },
    {
      id: 'js-7',
      topic: 'JavaScript',
      question: '¿Qué método nativo de `Array` devuelve una copia superficial (shallow copy) de una porción del array sin modificar el original?',
      options: [
        '`Array.prototype.splice()`',
        '`Array.prototype.slice()`',
        '`Array.prototype.shift()`',
        '`Array.prototype.reverse()`'
      ],
      correctAnswer: 1,
      explanation: '`slice()` extrae elementos y devuelve un nuevo array sin mutar el array original, a diferencia de `splice()`, `shift()` o `reverse()`.'
    },
    {
      id: 'js-8',
      topic: 'JavaScript',
      question: '¿Qué técnica de optimización permite diferir la ejecución de una función hasta que haya transcurrido un tiempo determinado de inactividad?',
      options: [
        'Throttling',
        'Debouncing',
        'Currying',
        'Memoization'
      ],
      correctAnswer: 1,
      explanation: 'Debounce retrasa la ejecución hasta que pase un tiempo determinado sin que ocurra una nueva llamada (ideal para inputs de búsqueda).'
    },
    {
      id: 'js-9',
      topic: 'JavaScript',
      question: '¿Cuál es el resultado de la comparación `0.1 + 0.2 === 0.3` en JavaScript y por qué?',
      options: [
        '`true`, porque la suma aritmética exacta equivale a 0.3.',
        '`false`, debido a la imprecisión en la representación binaria de punto flotante IEEE 754 (que resulta en `0.30000000000000004`).',
        '`TypeError`, porque no se pueden sumar números decimales sin llamar a `parseFloat()`.',
        '`undefined`, porque la comparación requiere conversión explícita a entero.'
      ],
      correctAnswer: 1,
      explanation: 'Debido a la representación de punto flotante de doble precisión IEEE 754, 0.1 + 0.2 resulta en 0.30000000000000004, por lo que la igualdad es falsa.'
    },
    {
      id: 'js-10',
      topic: 'JavaScript',
      question: '¿Qué hace el operador de fusión nula o Nullish Coalescing (`??`) a diferencia del operador lógico OR (`||`)?',
      options: [
        'Evalúa el valor derecho si el izquierdo es cualquier valor considerado falsy (`0`, `""`, `false`, `null`, `undefined`).',
        'Evalúa el valor derecho únicamente si el izquierdo es estrictamente `null` o `undefined`.',
        'Realiza una comparación de tipo estricto entre ambos operandos devolviendo un booleano.',
        'Convierte automáticamente ambos operandos a números antes de comparar.'
      ],
      correctAnswer: 1,
      explanation: '`??` solo toma el valor por defecto si el primer valor es null o undefined, preservando valores válidos como `0` o `""`.'
    },
    {
      id: 'js-11',
      topic: 'JavaScript',
      question: '¿Qué método nativo y moderno de JavaScript permite realizar una copia profunda (deep clone) de objetos complejos?',
      options: [
        '`Object.assign({}, obj)`',
        '`structuredClone(obj)`',
        '`{ ...obj }`',
        '`Object.freeze(obj)`'
      ],
      correctAnswer: 1,
      explanation: '`structuredClone()` es la API nativa de JavaScript para realizar clonaciones profundas con soporte para ciclos, Date, RegExp, Map y Set.'
    },
    {
      id: 'js-12',
      topic: 'JavaScript',
      question: '¿Cuál es el comportamiento principal del método `Promise.allSettled()`?',
      options: [
        'Se rechaza de forma inmediata en cuanto una de las promesas del array falla.',
        'Espera a que todas las promesas se resuelvan o rechacen, devolviendo un array con el estado y valor final de cada una.',
        'Devuelve el resultado únicamente de la primera promesa que se cumpla con éxito.',
        'Ejecuta las promesas en secuencia síncrona en lugar de en paralelo.'
      ],
      correctAnswer: 1,
      explanation: '`Promise.allSettled()` espera a que todas concluyan (cumplidas o rechazadas) sin abortar si alguna falla.'
    },
    {
      id: 'js-13',
      topic: 'JavaScript',
      question: '¿Qué es una Clausura (Closure) en JavaScript?',
      options: [
        'Una instrucción especial que detiene la ejecución de un bucle de forma inmediata.',
        'La combinación de una función y el entorno léxico en el que fue creada, permitiéndole acceder a variables de su ámbito externo incluso después de que la función padre haya finalizado.',
        'Un método privado que prohíbe el acceso a las propiedades de una clase.',
        'Una estructura de control para cerrar conexiones asíncronas de red.'
      ],
      correctAnswer: 1,
      explanation: 'Un closure permite a una función interna recordar y acceder a variables de su scope padre incluso cuando la función externa ya retornó.'
    },
    {
      id: 'js-14',
      topic: 'JavaScript',
      question: '¿Cuál es la sintaxis estándar en ES Modules (ESM) para exportar una función como exportación por defecto?',
      options: [
        '`module.exports = miFuncion;`',
        '`export default function miFuncion() {}`',
        '`export { miFuncion as defaultExport };`',
        '`exports.default = miFuncion;`'
      ],
      correctAnswer: 1,
      explanation: 'En ECMAScript Modules estándar se utiliza la palabra clave `export default`.'
    }
  ],

  html: [
    {
      id: 'html-1',
      topic: 'HTML',
      question: '¿Cuál es la función semántica principal del elemento `<main>` en un documento HTML5?',
      options: [
        'Contener el menú de navegación principal y el logotipo del sitio web.',
        'Encapsular el contenido temático principal y exclusivo del documento, excluyendo barras laterales, cabeceras y pies de página.',
        'Agrupar exclusivamente los enlaces de derechos de autor y pie de página.',
        'Definir un contenedor técnico para importar scripts y hojas de estilo globales.'
      ],
      correctAnswer: 1,
      explanation: '`<main>` debe contener únicamente el contenido directo y específico del documento, debiendo ser único por página sin repetirse en cabeceras o footers.'
    },
    {
      id: 'html-2',
      topic: 'HTML',
      question: '¿Para qué se utiliza el atributo nativo `loading="lazy"` en elementos `<img>` e `<iframe>`?',
      options: [
        'Muestra una animación de carga (spinner) mientras se descarga la imagen.',
        'Pospone la descarga del recurso hasta que esté próximo a entrar en la ventana gráfica (viewport), optimizando el rendimiento.',
        'Carga la imagen en baja resolución y la reemplaza por una de alta resolución al hacer clic.',
        'Fuerza la descarga en segundo plano con la máxima prioridad de red.'
      ],
      correctAnswer: 1,
      explanation: 'El lazy loading nativo pospone la solicitud HTTP de imágenes o iframes fuera de pantalla hasta que el usuario se desplaza cerca de ellos.'
    },
    {
      id: 'html-3',
      topic: 'HTML',
      question: '¿Cuál es la diferencia de ejecución entre los atributos `async` y `defer` en etiquetas `<script>` externas?',
      options: [
        '`async` ejecuta los scripts en orden estricto; `defer` los ejecuta de forma aleatoria.',
        '`async` descarga en segundo plano y ejecuta de inmediato interrumpiendo el HTML; `defer` descarga en segundo plano y espera al parseo completo del HTML manteniendo el orden.',
        'Ambos atributos se comportan exactamente igual en los navegadores modernos.',
        '`defer` bloquea la descarga de estilos CSS hasta que el script finaliza.'
      ],
      correctAnswer: 1,
      explanation: '`async` ejecuta de forma independiente en cuanto llega interrumpiendo el parser; `defer` respeta el orden de los scripts y se ejecuta justo antes de `DOMContentLoaded`.'
    },
    {
      id: 'html-4',
      topic: 'HTML',
      question: '¿Qué etiquetas semánticas de HTML5 deben combinarse para asociar una imagen con su leyenda explicativa?',
      options: [
        '`<picture>` y `<source>`',
        '`<figure>` para el contenedor e `<figcaption>` para el pie de foto',
        '`<section>` y un párrafo `<p class="caption">`',
        '`<aside>` con el atributo `aria-label`'
      ],
      correctAnswer: 1,
      explanation: '`<figure>` representa contenido autocontenido y `<figcaption>` define su leyenda o descripción semántica.'
    },
    {
      id: 'html-5',
      topic: 'HTML',
      question: '¿Qué atributos WAI-ARIA se utilizan para indicar que un botón controla la apertura y cierre de un menú o acordeón?',
      options: [
        '`aria-hidden="true"` y `role="presentation"`',
        '`aria-expanded="true/false"` y `aria-controls="id_del_contenedor"`',
        '`aria-live="polite"` y `aria-atomic="true"`',
        '`role="navigation"` y `aria-label="menu"`'
      ],
      correctAnswer: 1,
      explanation: '`aria-expanded` indica el estado abierto/cerrado y `aria-controls` asocia el botón disparador con el contenedor desplegable.'
    },
    {
      id: 'html-6',
      topic: 'HTML',
      question: '¿Cuál es la estructura recomendada en HTML5 para representar bloques de código fuente preformateado?',
      options: [
        '`<samp><kbd>...</kbd></samp>`',
        '`<pre><code>...</code></pre>`',
        '`<textarea readonly>...</textarea>`',
        '`<blockquote cite="code">...</blockquote>`'
      ],
      correctAnswer: 1,
      explanation: 'La convención semántica estándar es envolver el elemento en línea `<code>` dentro de un bloque `<pre>`.'
    },
    {
      id: 'html-7',
      topic: 'HTML',
      question: '¿Qué elemento nativo de HTML5 permite crear cuadros de diálogo y ventanas modales accesibles mediante el método `.showModal()`?',
      options: [
        '`<popup>`',
        '`<dialog>`',
        '`<modal>`',
        '`<window>`'
      ],
      correctAnswer: 1,
      explanation: '`<dialog>` es el elemento nativo de HTML5 para modales y cuadros de diálogo, gestionando el foco y el pseudo-elemento `::backdrop`.'
    },
    {
      id: 'html-8',
      topic: 'HTML',
      question: '¿Qué elemento de HTML5 permite ofrecer una lista predefinida de opciones de autocompletado a un campo `<input type="text">`?',
      options: [
        '`<select>`',
        '`<datalist>` mediante la vinculación con el atributo `list`',
        '`<optgroup>`',
        '`<menu>`'
      ],
      correctAnswer: 1,
      explanation: '`<datalist>` contiene etiquetas `<option>` y se vincula al `<input>` con el atributo `list="id_datalist"`.'
    },
    {
      id: 'html-9',
      topic: 'HTML',
      question: '¿Qué etiqueta semántica es la adecuada para estructurar una entrada de blog, noticia o tarjeta de producto autocontenida?',
      options: [
        '`<section>`',
        '`<article>`',
        '`<div>`',
        '`<aside>`'
      ],
      correctAnswer: 1,
      explanation: '`<article>` representa una composición autónoma y distributible de forma independiente (ej. noticia, post, tarjeta de producto).'
    },
    {
      id: 'html-10',
      topic: 'HTML',
      question: '¿Cuál es el propósito fundamental del meta tag `<meta name="viewport" content="width=device-width, initial-scale=1.0">`?',
      options: [
        'Bloquear la capacidad de hacer zoom en dispositivos móviles.',
        'Establecer que el ancho de la ventana gráfica coincida con el ancho del dispositivo para permitir el diseño adaptable (Responsive Design).',
        'Forzar a los teléfonos móviles a mostrar la página en resolución de escritorio a 1920px.',
        'Acelerar la carga de fuentes web almacenándolas en la memoria caché.'
      ],
      correctAnswer: 1,
      explanation: 'Es esencial para el diseño adaptable (Responsive Web Design), estableciendo las dimensiones del viewport móvil.'
    },
    {
      id: 'html-11',
      topic: 'HTML',
      question: '¿Qué etiqueta semántica representa contenido secundario o tangencialmente relacionado con el contenido principal (como una barra lateral o publicidad)?',
      options: [
        '`<sidebar>`',
        '`<aside>`',
        '`<nav>`',
        '`<complementary>`'
      ],
      correctAnswer: 1,
      explanation: '`<aside>` se utiliza para secciones con contenido relacionado tangencialmente como sidebars, callouts publicitarios o glosarios.'
    },
    {
      id: 'html-12',
      topic: 'HTML',
      question: '¿Qué atributo de formulario HTML5 permite validar un campo de texto mediante una expresión regular antes de enviarlo?',
      options: [
        '`validate="regex"`',
        '`pattern="expresion_regular"`',
        '`regex="expresion"`',
        '`format="rule"`'
      ],
      correctAnswer: 1,
      explanation: 'El atributo `pattern` recibe una expresión regular de JavaScript que el navegador valida antes de disparar el evento submit.'
    },
    {
      id: 'html-13',
      topic: 'HTML',
      question: '¿Qué elemento HTML5 permite especificar múltiples alternativas de una imagen adaptadas a diferentes resoluciones o formatos modernos (ej. WebP/AVIF)?',
      options: [
        '`<canvas>` con atributo `srcset`',
        '`<picture>` conteniendo elementos `<source>` y una etiqueta de respaldo `<img>`',
        '`<figure>` con atributos `media-query`',
        '`<responsive-img>`'
      ],
      correctAnswer: 1,
      explanation: 'El elemento `<picture>` permite servir diferentes imágenes optimizadas en base a media queries o formatos soportados.'
    }
  ],

  css: [
    {
      id: 'css-1',
      topic: 'CSS',
      question: 'En CSS Grid, ¿qué regla de `grid-template-columns` crea un layout responsivo donde las columnas tienen al menos 280px de ancho y se adaptan automáticamente sin media queries?',
      options: [
        '`repeat(auto, 280px 1fr)`',
        '`repeat(auto-fit, minmax(280px, 1fr))`',
        '`flex: 1 1 280px`',
        '`grid-columns: responsive 280px`'
      ],
      correctAnswer: 1,
      explanation: '`repeat(auto-fit, minmax(280px, 1fr))` calcula dinámicamente cuántas columnas de al menos 280px caben y las expande equitativamente con `1fr`.'
    },
    {
      id: 'css-2',
      topic: 'CSS',
      question: '¿Cuál es el cálculo exacto de especificidad en CSS para el selector `header.nav-bar ul li a:hover`?',
      options: [
        '(0, 1, 4) - 0 IDs, 1 Clase, 4 Elementos',
        '(0, 2, 4) - 0 IDs, 2 Clases/Pseudoclases (`.nav-bar`, `:hover`) y 4 Elementos (`header`, `ul`, `li`, `a`)',
        '(1, 1, 4) - 1 ID, 1 Clase, 4 Elementos',
        '(0, 0, 6) - 6 selectores de tipo elemento'
      ],
      correctAnswer: 1,
      explanation: 'Contiene 0 IDs, 2 clases/pseudoclases (`.nav-bar` y `:hover`), y 4 elementos HTML (`header`, `ul`, `li`, `a`), resultando en (0, 2, 4).'
    },
    {
      id: 'css-3',
      topic: 'CSS',
      question: '¿Qué propiedad CSS modifica el modelo de caja para incluir el `padding` y el `border` dentro del `width` y `height` declarados del elemento?',
      options: [
        '`box-sizing: content-box;`',
        '`box-sizing: border-box;`',
        '`box-model: inner-border;`',
        '`display: flow-root;`'
      ],
      correctAnswer: 1,
      explanation: '`box-sizing: border-box` calcula el ancho y alto total incluyendo el padding y los bordes, facilitando el cálculo exacto de layouts.'
    },
    {
      id: 'css-4',
      topic: 'CSS',
      question: '¿Qué valor de la propiedad `position` permite que un elemento acompañe el desplazamiento del scroll hasta un umbral fijado y luego permanezca fijo?',
      options: [
        '`position: fixed;`',
        '`position: sticky;`',
        '`position: absolute;`',
        '`position: relative;`'
      ],
      correctAnswer: 1,
      explanation: '`position: sticky` actúa como relativo hasta que se alcanza el umbral especificado (ej. `top: 0`), momento en el que se comporta como fijo dentro de su contenedor.'
    },
    {
      id: 'css-5',
      topic: 'CSS',
      question: '¿Cómo se declara y consume de forma correcta una Variable CSS nativa (Custom Property)?',
      options: [
        'Declaración: `$primary-color: #3525cd;` | Uso: `color: $primary-color;`',
        'Declaración: `--primary-color: #3525cd;` | Uso: `color: var(--primary-color);`',
        'Declaración: `@var primary-color = #3525cd;` | Uso: `color: @primary-color;`',
        'Declaración: `const(--primary-color, #3525cd);` | Uso: `color: const(--primary-color);`'
      ],
      correctAnswer: 1,
      explanation: 'Las variables nativas de CSS se declaran con el prefijo `--nombre` y se consumen mediante la función `var(--nombre, fallback)`.'
    },
    {
      id: 'css-6',
      topic: 'CSS',
      question: '¿Cuál es la función del pseudo-elemento CSS `::backdrop`?',
      options: [
        'Aplicar un desenfoque de fondo a cualquier elemento mediante `backdrop-filter`.',
        'Estilar la capa de fondo oscura o difuminada que se renderiza detrás de un elemento `<dialog>` modal o elementos en modo pantalla completa.',
        'Insertar una marca de agua en documentos impresos.',
        'Reemplazar los pseudo-elementos `::before` y `::after`.'
      ],
      correctAnswer: 1,
      explanation: '`::backdrop` es una caja de pantalla completa que se renderiza inmediatamente detrás de elementos en la Top Layer (como `<dialog>` modal).'
    },
    {
      id: 'css-7',
      topic: 'CSS',
      question: '¿Qué valor de `display` crea un nuevo Contexto de Formato de Bloque (BFC) para evitar el colapso de márgenes sin recortar el contenido desbordado?',
      options: [
        '`overflow: hidden;`',
        '`display: flow-root;`',
        '`clear: both;`',
        '`float: left;`'
      ],
      correctAnswer: 1,
      explanation: '`display: flow-root` crea un Block Formatting Context (BFC) explícito sin efectos secundarios indeseados de recorte como en `overflow: hidden`.'
    },
    {
      id: 'css-8',
      topic: 'CSS',
      question: '¿Qué efecto produce aplicar `font-size: clamp(1rem, 2.5vw, 2.5rem)` a un elemento de texto?',
      options: [
        'Establece un tamaño fijo de 2.5vw independientemente del ancho de pantalla.',
        'Ajusta de forma fluida el tamaño del texto entre un mínimo de 1rem, un valor preferido de 2.5vw y un límite máximo de 2.5rem.',
        'Recorta el texto si supera 2.5 líneas de alto en la pantalla.',
        'Aplica una animación de zoom progresivo al texto.'
      ],
      correctAnswer: 1,
      explanation: '`clamp(MIN, VAL, MAX)` restringe un valor entre un límite inferior y un límite superior según una expresión flexible calculada.'
    },
    {
      id: 'css-9',
      topic: 'CSS',
      question: '¿Qué pseudo-clase relacional de CSS permite seleccionar un elemento en función de las características o elementos contenidos dentro de él?',
      options: [
        '`:parent()`',
        '`:has()`',
        '`:is()`',
        '`:where()`'
      ],
      correctAnswer: 1,
      explanation: '`:has()` es la pseudo-clase relacional que permite seleccionar un elemento si alguno de los selectores pasados como parámetro coincide dentro de él.'
    },
    {
      id: 'css-10',
      topic: 'CSS',
      question: '¿Qué propiedad de Flexbox establece la dimensión inicial del eje principal de un elemento antes de que se distribuya el espacio libre restante?',
      options: [
        '`flex-start`',
        '`flex-basis`',
        '`align-self`',
        '`order`'
      ],
      correctAnswer: 1,
      explanation: '`flex-basis` especifica el tamaño inicial en el eje principal antes de que actúen el crecimiento (`flex-grow`) o la contracción (`flex-shrink`).'
    },
    {
      id: 'css-11',
      topic: 'CSS',
      question: '¿Cuál es el propósito principal de la propiedad `will-change` en CSS?',
      options: [
        'Forzar a la página a volver a cargar la hoja de estilos al cambiar una variable CSS.',
        'Informar al navegador de forma anticipada qué propiedades van a animarse para promover el elemento a una capa de composición en la GPU.',
        'Aplicar reglas de estilo condicionales según el rendimiento de la CPU del usuario.',
        'Es una directiva obsoleta de reemplazo para `@keyframes`.'
      ],
      correctAnswer: 1,
      explanation: '`will-change` previene tirones (jank) al promover elementos a su propia capa de GPU, pero un uso excesivo consume demasiada memoria de video.'
    },
    {
      id: 'css-12',
      topic: 'CSS',
      question: '¿Qué función de gradiente en CSS permite crear degradados cónicos alrededor de un punto central?',
      options: [
        '`radial-gradient()`',
        '`conic-gradient()`',
        '`linear-gradient()`',
        '`mesh-gradient()`'
      ],
      correctAnswer: 1,
      explanation: '`conic-gradient()` rota las transiciones de color alrededor de un punto central como los rayos de un reloj.'
    },
    {
      id: 'css-13',
      topic: 'CSS',
      question: '¿Qué diferencia principal existe entre las pseudo-clases `:where()` e `:is()` al calcular la especificidad?',
      options: [
        '`:is()` no es compatible con los navegadores web modernos.',
        '`:where()` reduce la especificidad a (0,0,0) facilitando la sobreescritura, mientras que `:is()` adopta la especificidad del selector más específico de su lista.',
        '`:where()` solo acepta clases CSS e `:is()` solo acepta etiquetas HTML.',
        'Ambas pseudo-clases tienen la misma especificidad fija de 1 ID.'
      ],
      correctAnswer: 1,
      explanation: '`:where()` reduce la especificidad a (0,0,0) independientemente de los selectores incluidos en sus argumentos.'
    }
  ]
};

// Datos completos de los 3 Cursos Frontend disponibles (JavaScript, HTML y CSS)
const COURSES_DATA = [
  {
    id: 'javascript',
    title: 'JavaScript Moderno & ESNext',
    shortDesc: 'Domina closures, promesas, event loop, arquitectura de módulos y patrones avanzados de programación funcional y reactiva.',
    category: 'JavaScript',
    level: 'Avanzado',
    duration: '12 Semanas',
    rating: '4.9 (1.8k)',
    students: '12,450+',
    icon: 'code',
    accent: 'primary',
    badge: 'Más Popular',
    colorHex: '#3525cd',
    hasExam: true,
    modules: [
      'Motor V8, Call Stack & Event Loop en profundidad',
      'Scope léxico, Closures y Temporal Dead Zone',
      'Asincronía moderna: Promises, Async/Await y Web Workers',
      'Programación Funcional, Inmutabilidad y Clases ESNext',
      'Arquitectura de Aplicaciones y Clean Code'
    ]
  },
  {
    id: 'html',
    title: 'HTML5 & Accesibilidad Web (a11y)',
    shortDesc: 'Aprende semántica estricta, arquitectura SEO técnica, estándares W3C, WAI-ARIA y optimización para lectores de pantalla.',
    category: 'HTML',
    level: 'Todos los niveles',
    duration: '8 Semanas',
    rating: '4.9 (950)',
    students: '8,900+',
    icon: 'html',
    accent: 'secondary',
    badge: 'Fundamental',
    colorHex: '#e44d26',
    hasExam: true,
    modules: [
      'Semántica HTML5 y estructura jerárquica de contenidos',
      'WAI-ARIA: Roles, estados, propiedades y accesibilidad WCAG 2.2',
      'Formularios avanzados, validaciones nativas y diálogos',
      'Optimización de carga: Lazy loading, responsive picture y resource hints',
      'SEO Técnico y Meta Tags de Open Graph'
    ]
  },
  {
    id: 'css',
    title: 'CSS Avanzado, Grid & Design Systems',
    shortDesc: 'Construye sistemas de diseño escalables con CSS Grid, Flexbox, Custom Properties, container queries y micro-animaciones.',
    category: 'CSS',
    level: 'Intermedio / Avanzado',
    duration: '10 Semanas',
    rating: '4.8 (1.4k)',
    students: '11,200+',
    icon: 'palette',
    accent: 'tertiary',
    badge: 'Imprescindible',
    colorHex: '#264de4',
    hasExam: true,
    modules: [
      'Sistemas de Maquetación: Grid bidimensional y Flexbox fluido',
      'Variables CSS, Tokens de diseño y Theming Dinámico',
      'Selectores modernos: :has(), :is(), :where() y Container Queries',
      'Animaciones y Transiciones de 60fps con aceleración GPU',
      'Metodologías BEM, CSS Modules y Arquitectura ITCSS'
    ]
  }
];

// Helper para obtener 10 preguntas aleatorias de una tecnología
function getRandomQuestions(technology, count = 10) {
  const normalized = technology.toLowerCase().trim();
  const pool = QUESTION_BANK[normalized];
  if (!pool) {
    console.warn(`Tecnología "${technology}" no encontrada en el banco. Usando JavaScript por defecto.`);
    return QUESTION_BANK.javascript.slice(0, count);
  }
  // Clonar y mezclar con algoritmo Fisher-Yates
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}
