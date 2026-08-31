/**
 * Banco de preguntas para la Prueba en Línea
 * Tecnologías disponibles: HTML, CSS, JavaScript
 * Cada test selecciona aleatoriamente 10 preguntas.
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
        '`"undefined"`, ya que representa un valor no numérico indefinido.',
        '`"number"`, porque en la especificación IEEE 754 representa un valor numérico no representable.',
        '`"object"`, porque es una instancia del objeto global Number.'
      ],
      correctAnswer: 2,
      explanation: 'Según la especificación ECMAScript (IEEE 754), NaN pertenece al conjunto de valores del tipo Number.'
    },
    {
      id: 'js-3',
      topic: 'JavaScript',
      question: '¿Cómo funciona el Event Loop de JavaScript al procesar Microtasks y Macrotasks?',
      options: [
        'Las Macrotasks (como `setTimeout`) tienen prioridad absoluta sobre todas las Microtasks (como `Promise.then`).',
        'La cola de Microtasks se vacía completamente después de cada Macrotask antes de renderizar o pasar a la siguiente Macrotask.',
        'Microtasks y Macrotasks se ejecutan en orden aleatorio según la carga del hilo principal.',
        'Solo se ejecuta una Microtask por cada ciclo del Event Loop.'
      ],
      correctAnswer: 1,
      explanation: 'Al finalizar una macrotask, el Event Loop procesa todas las microtasks pendientes acumuladas antes de continuar con la siguiente macrotask.'
    },
    {
      id: 'js-4',
      topic: 'JavaScript',
      question: '¿Cuál es el resultado de `[1, 2, 3] + [4, 5, 6]` en JavaScript?',
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
      question: '¿Qué ventaja principal ofrece el uso de `WeakMap` frente a un `Map` estándar?',
      options: [
        'Permite iterar sobre sus claves de forma más rápida con `forEach`.',
        'Sus claves deben ser objetos y se mantienen con referencias débiles, permitiendo que el Garbage Collector libere memoria si no hay otras referencias.',
        'Admite valores primitivos como claves (strings, numbers, booleans).',
        'Permite serialización directa a JSON con `JSON.stringify()`.'
      ],
      correctAnswer: 1,
      explanation: 'En WeakMap las claves son obligatoriamente objetos y se almacenan de manera débil, evitando memory leaks cuando el objeto ya no se usa.'
    },
    {
      id: 'js-6',
      topic: 'JavaScript',
      question: 'En una función flecha (arrow function), ¿cómo se determina el valor de `this`?',
      options: [
        'Se vincula dinámicamente al objeto que invoca la función.',
        'Se hereda léxicamente del contexto circundante en el momento de su definición.',
        'Siempre apunta al objeto `window` o `globalThis`.',
        'Se puede modificar utilizando `.bind()`, `.call()` o `.apply()`.'
      ],
      correctAnswer: 1,
      explanation: 'Las arrow functions no tienen su propio `this`; capturan el valor de `this` del contexto léxico donde fueron creadas.'
    },
    {
      id: 'js-7',
      topic: 'JavaScript',
      question: '¿Qué método nativo de Array devuelve una copia superficial (shallow copy) de una porción del array sin mutar el original?',
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
      question: '¿Qué técnica permite ejecutar una función solo después de que haya transcurrido un tiempo de inactividad desde su última invocación?',
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
      question: '¿Cuál es la salida de `console.log(0.1 + 0.2 === 0.3)` en JavaScript estándar?',
      options: [
        '`true`',
        '`false`, debido a la precisión de punto flotante binario IEEE 754 (0.30000000000000004)',
        '`TypeError`',
        '`undefined`'
      ],
      correctAnswer: 1,
      explanation: 'Debido a la representación de punto flotante de doble precisión IEEE 754, 0.1 + 0.2 resulta en 0.30000000000000004, por lo que la igualdad es falsa.'
    },
    {
      id: 'js-10',
      topic: 'JavaScript',
      question: '¿Qué hace el operador Nullish Coalescing (`??`) a diferencia del operador lógico OR (`||`)?',
      options: [
        'Evalúa el operando derecho solo si el izquierdo es estrictamente `null` o `undefined`.',
        'Evalúa el operando derecho si el izquierdo es cualquier valor falsy (`0`, `""`, `false`, `null`, `undefined`).',
        'Realiza una comparación de tipo estricto entre ambos valores.',
        'Convierte automáticamente ambos operandos a booleanos.'
      ],
      correctAnswer: 0,
      explanation: '`??` solo toma el valor por defecto si el primer valor es null o undefined, preservando valores válidos como `0` o `""`.'
    },
    {
      id: 'js-11',
      topic: 'JavaScript',
      question: '¿Qué método moderno permite realizar una copia profunda (deep clone) nativa de objetos complejos en JavaScript?',
      options: [
        '`Object.assign({}, obj)`',
        '`{ ...obj }`',
        '`structuredClone(obj)`',
        '`Object.freeze(obj)`'
      ],
      correctAnswer: 2,
      explanation: '`structuredClone()` es la API nativa de JavaScript para realizar clonaciones profundas con soporte para ciclos, Date, RegExp, Map y Set.'
    },
    {
      id: 'js-12',
      topic: 'JavaScript',
      question: '¿Cuál es la función del método `Promise.allSettled()`?',
      options: [
        'Se rechaza inmediatamente si alguna de las promesas falla.',
        'Espera a que todas las promesas se resuelvan o rechacen, devolviendo un array con el estado y resultado de cada una.',
        'Retorna el valor de la primera promesa resuelta exitosamente.',
        'Ejecuta las promesas en serie de forma sincrónica.'
      ],
      correctAnswer: 1,
      explanation: '`Promise.allSettled()` espera a que todas concluyan (cumplidas o rechazadas) sin abortar si alguna falla.'
    },
    {
      id: 'js-13',
      topic: 'JavaScript',
      question: '¿Qué es una Clausura (Closure) en JavaScript?',
      options: [
        'Una función que finaliza la ejecución de un bucle inmediatamente.',
        'La combinación de una función y el entorno léxico en el que fue declarada, permitiéndole acceder a variables de un ámbito exterior incluso tras su finalización.',
        'Un método privado que no puede ser invocado desde fuera de una clase.',
        'Una sintaxis para cerrar conexiones de sockets en Node.js.'
      ],
      correctAnswer: 1,
      explanation: 'Un closure permite a una función interna recordar y acceder a variables de su scope padre incluso cuando la función externa ya retornó.'
    },
    {
      id: 'js-14',
      topic: 'JavaScript',
      question: '¿Cuál es la forma correcta de crear un Módulo ES (ESM) exportando una función por defecto?',
      options: [
        '`module.exports = myFunction;`',
        '`export default function myFunction() {}`',
        '`export { myFunction as defaultExport };`',
        '`exports.default = myFunction;`'
      ],
      correctAnswer: 1,
      explanation: 'En ECMAScript Modules estándar se utiliza la palabra clave `export default`.'
    }
  ],

  html: [
    {
      id: 'html-1',
      topic: 'HTML',
      question: '¿Cuál es el propósito semántico principal del elemento `<main>` en HTML5?',
      options: [
        'Contener el menú de navegación principal del sitio.',
        'Representar el contenido temático central y único del documento, excluyendo cabeceras, pies y barras laterales repetitivas.',
        'Agrupar todos los enlaces de pie de página y copyright.',
        'Definir un contenedor para scripts interactivos y estilos globales.'
      ],
      correctAnswer: 1,
      explanation: '`<main>` debe contener únicamente el contenido directo y específico del documento, debiendo ser único por página sin repetirse en cabeceras o footers.'
    },
    {
      id: 'html-2',
      topic: 'HTML',
      question: '¿Para qué sirve el atributo `loading="lazy"` en una etiqueta `<img>` o `<iframe>`?',
      options: [
        'Aplica una animación de carga suave con un spinner CSS.',
        'Indica al navegador que difiera la carga del recurso hasta que esté cerca del viewport del usuario, optimizando el rendimiento y consumo de datos.',
        'Descarga la imagen en baja resolución y la sustituye al hacer click.',
        'Fuerza la descarga en segundo plano con máxima prioridad.'
      ],
      correctAnswer: 1,
      explanation: 'El lazy loading nativo pospone la solicitud HTTP de imágenes o iframes fuera de pantalla hasta que el usuario se desplaza cerca de ellos.'
    },
    {
      id: 'html-3',
      topic: 'HTML',
      question: '¿Cuál es la diferencia entre los atributos `defer` y `async` en una etiqueta `<script>`?',
      options: [
        '`async` ejecuta el script en orden en cuanto el DOM está completamente parseado; `defer` bloquea el render.',
        '`async` descarga el script en paralelo y lo ejecuta de inmediato apenas finaliza la descarga; `defer` descarga en paralelo y espera al parseo completo del HTML manteniendo el orden.',
        'Ambos son idénticos y solo varían por compatibilidad con navegadores antiguos.',
        '`defer` solo funciona en scripts embebidos en el HTML, no en archivos externos.'
      ],
      correctAnswer: 1,
      explanation: '`async` ejecuta de forma independiente en cuanto llega interrumpiendo el parser; `defer` respeta el orden de los scripts y se ejecuta justo antes de `DOMContentLoaded`.'
    },
    {
      id: 'html-4',
      topic: 'HTML',
      question: '¿Qué etiqueta HTML5 debe usarse para proporcionar texto alternativo y pie de foto estructurado a una imagen o diagrama?',
      options: [
        '`<picture>` con `<source>`',
        '`<figure>` acompañado de `<figcaption>`',
        '`<section>` con un párrafo `<p class="caption">`',
        '`<aside>` con atributo `aria-label`'
      ],
      correctAnswer: 1,
      explanation: '`<figure>` representa contenido autocontenido y `<figcaption>` define su leyenda o descripción semántica.'
    },
    {
      id: 'html-5',
      topic: 'HTML',
      question: '¿Qué atributo de accesibilidad (WAI-ARIA) se utiliza para describir a lectores de pantalla qué elemento controla el despliegue de un acordeón o menú?',
      options: [
        '`aria-expanded="true/false"` y `aria-controls="id"`',
        '`aria-hidden="true"`',
        '`aria-live="polite"`',
        '`role="navigation"`'
      ],
      correctAnswer: 0,
      explanation: '`aria-expanded` indica el estado abierto/cerrado y `aria-controls` asocia el botón disparador con el contenedor desplegable.'
    },
    {
      id: 'html-6',
      topic: 'HTML',
      question: '¿Cuál es la etiqueta recomendada en HTML5 para mostrar código fuente dentro de un bloque preformateado?',
      options: [
        '`<pre><code>...</code></pre>`',
        '`<samp><kbd>...</kbd></samp>`',
        '`<textarea readonly>...</textarea>`',
        '`<blockquote cite="code">...</blockquote>`'
      ],
      correctAnswer: 0,
      explanation: 'La convención semántica estándar es envolver el elemento en línea `<code>` dentro de un bloque `<pre>`.'
    },
    {
      id: 'html-7',
      topic: 'HTML',
      question: '¿Qué elemento HTML5 permite crear un cuadro de diálogo nativo o ventana modal con soporte de backdrop accesible mediante `.showModal()`?',
      options: [
        '`<popup>`',
        '`<modal>`',
        '`<dialog>`',
        '`<window>`'
      ],
      correctAnswer: 2,
      explanation: '`<dialog>` es el elemento nativo de HTML5 para modales y cuadros de diálogo, gestionando el foco y el pseudo-elemento `::backdrop`.'
    },
    {
      id: 'html-8',
      topic: 'HTML',
      question: '¿Qué elemento permite proveer una lista de opciones autocompletables predefinidas a un `<input type="text">`?',
      options: [
        '`<select>`',
        '`<datalist>` asociado mediante el atributo `list`',
        '`<optgroup>`',
        '`<menu>`'
      ],
      correctAnswer: 1,
      explanation: '`<datalist>` contiene etiquetas `<option>` y se vincula al `<input>` con el atributo `list="id_datalist"`.'
    },
    {
      id: 'html-9',
      topic: 'HTML',
      question: '¿Qué etiqueta semántica es la más apropiada para encapsular una publicación de blog, un comentario o una tarjeta de producto independiente y reutilizable?',
      options: [
        '`<article>`',
        '`<section>`',
        '`<div>`',
        '`<aside>`'
      ],
      correctAnswer: 0,
      explanation: '`<article>` representa una composición autónoma y distributible de forma independiente (ej. noticia, post, tarjeta de producto).'
    },
    {
      id: 'html-10',
      topic: 'HTML',
      question: '¿Cuál es la función del meta tag `<meta name="viewport" content="width=device-width, initial-scale=1.0">`?',
      options: [
        'Deshabilitar el zoom en dispositivos táctiles.',
        'Instruir al navegador para que ajuste el ancho de la ventana gráfica al ancho del dispositivo y establezca la escala inicial 1:1, permitiendo el responsive design.',
        'Forzar la resolución de pantalla a 1920x1080.',
        'Mejorar la velocidad de renderizado de fuentes web.'
      ],
      correctAnswer: 1,
      explanation: 'Es esencial para el diseño adaptable (Responsive Web Design), estableciendo las dimensiones del viewport móvil.'
    },
    {
      id: 'html-11',
      topic: 'HTML',
      question: '¿Qué elemento semántico HTML5 representa contenido que solo está indirectamente relacionado con el contenido principal (como barras laterales, glosarios o publicidad)?',
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
      question: '¿Qué atributo de formulario HTML5 permite validar que un campo de texto cumpla con una expresión regular específica antes del envío?',
      options: [
        '`validate="regex"`',
        '`pattern="regex"`',
        '`regex="expression"`',
        '`format="rule"`'
      ],
      correctAnswer: 1,
      explanation: 'El atributo `pattern` recibe una expresión regular de JavaScript que el navegador valida antes de disparar el evento submit.'
    },
    {
      id: 'html-13',
      topic: 'HTML',
      question: '¿Qué elemento permite especificar múltiples fuentes de medios según la resolución o formato (ej. WebP, AVIF) para una imagen responsive?',
      options: [
        '`<picture>` que contiene elementos `<source>` y una etiqueta de respaldo `<img>`',
        '`<canvas>` con directivas `srcset`',
        '`<figure>` con atributos `media-query`',
        '`<responsive-img>`'
      ],
      correctAnswer: 0,
      explanation: 'El elemento `<picture>` permite servir diferentes imágenes optimizadas en base a media queries o formatos soportados.'
    }
  ],

  css: [
    {
      id: 'css-1',
      topic: 'CSS',
      question: 'En CSS Grid, ¿qué valor de `grid-template-columns` crea un grid responsivo automático donde las columnas tienen al menos 280px y se expanden equitativamente sin necesidad de media queries?',
      options: [
        '`repeat(auto-fit, minmax(280px, 1fr))`',
        '`repeat(auto, 280px 1fr)`',
        '`flex: 1 1 280px`',
        '`grid-columns: responsive 280px`'
      ],
      correctAnswer: 0,
      explanation: '`repeat(auto-fit, minmax(280px, 1fr))` calcula dinámicamente cuántas columnas de al menos 280px caben y las expande equitativamente con `1fr`.'
    },
    {
      id: 'css-2',
      topic: 'CSS',
      question: '¿Cuál es el cálculo de especificidad correcto para el selector `header.nav-bar ul li a:hover`?',
      options: [
        '(0, 1, 4) - 0 IDs, 1 Clase, 4 Elementos/Pseudoclases',
        '(0, 2, 4) - 0 IDs, 2 Clases/Pseudoclases (`.nav-bar`, `:hover`), 4 Elementos (`header`, `ul`, `li`, `a`)',
        '(1, 1, 4) - 1 ID, 1 Clase, 4 Elementos',
        '(0, 0, 6) - 6 selectores simples'
      ],
      correctAnswer: 1,
      explanation: 'Contiene 0 IDs, 2 clases/pseudoclases (`.nav-bar` y `:hover`), y 4 elementos HTML (`header`, `ul`, `li`, `a`), resultando en (0, 2, 4).'
    },
    {
      id: 'css-3',
      topic: 'CSS',
      question: '¿Qué propiedad CSS cambia el modelo de caja para que el `padding` y el `border` se incluyan dentro del `width` y `height` declarados?',
      options: [
        '`box-sizing: border-box;`',
        '`box-sizing: content-box;`',
        '`box-model: inner-border;`',
        '`display: flow-root;`'
      ],
      correctAnswer: 0,
      explanation: '`box-sizing: border-box` calcula el ancho y alto total incluyendo el padding y los bordes, facilitando el cálculo exacto de layouts.'
    },
    {
      id: 'css-4',
      topic: 'CSS',
      question: '¿Qué valor de la propiedad `position` hace que un elemento se desplace con el scroll del usuario hasta alcanzar un umbral y luego quede fijo en la pantalla?',
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
      question: '¿Cómo se declara y consume correctamente una Variable CSS (Custom Property)?',
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
      question: '¿Cuál es la función del pseudo-elemento `::backdrop` en CSS moderno?',
      options: [
        'Generar un fondo borroso para cualquier contenedor con `backdrop-filter`.',
        'Estilar el fondo oscuro o difuminado que se sitúa detrás de un `<dialog>` abierto con `.showModal()` o en elementos en pantalla completa.',
        'Crear una capa de marca de agua en páginas impresas.',
        'Servir de reemplazo para `::before` y `::after`.'
      ],
      correctAnswer: 1,
      explanation: '`::backdrop` es una caja de pantalla completa que se renderiza inmediatamente detrás de elementos en la Top Layer (como `<dialog>` modal).'
    },
    {
      id: 'css-7',
      topic: 'CSS',
      question: '¿Qué propiedad CSS moderna permite evitar el colapso de márgenes creando un nuevo contexto de formato de bloque (BFC) de manera limpia?',
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
      question: '¿Cuál es el efecto de la propiedad `clamp(1rem, 2.5vw, 2.5rem)` aplicada a `font-size`?',
      options: [
        'Establece un tamaño fijo de 2.5vw con un margen de 1rem.',
        'Ajusta de forma fluida el tamaño entre un mínimo de 1rem, un valor preferido del 2.5% del ancho de la ventana (vw) y un límite máximo de 2.5rem.',
        'Corta el texto si supera 2.5 líneas de altura.',
        'Aplica una animación de escala continua.'
      ],
      correctAnswer: 1,
      explanation: '`clamp(MIN, VAL, MAX)` restringe un valor entre un límite inferior y un límite superior según una expresión flexible calculada.'
    },
    {
      id: 'css-9',
      topic: 'CSS',
      question: '¿Qué pseudo-clase permite seleccionar un elemento padre en función de si contiene determinados hijos o estados (el selector de padre de CSS)?',
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
      question: '¿Qué propiedad de Flexbox define el tamaño base de un item antes de que se distribuya el espacio restante con `flex-grow` o `flex-shrink`?',
      options: [
        '`flex-basis`',
        '`flex-start`',
        '`align-self`',
        '`order`'
      ],
      correctAnswer: 0,
      explanation: '`flex-basis` especifica el tamaño inicial en el eje principal antes de que actúen el crecimiento (`flex-grow`) o la contracción (`flex-shrink`).'
    },
    {
      id: 'css-11',
      topic: 'CSS',
      question: '¿Cuál es la función de `will-change` en CSS y cuándo debe utilizarse con precaución?',
      options: [
        'Obliga al navegador a recargar la página cuando cambian las variables CSS.',
        'Informa al navegador con antelación qué propiedades van a animarse para que prepare optimizaciones de render en GPU (creando capas de composición), debiendo usarse solo en elementos críticos.',
        'Aplica estilos condicionales basados en el hardware del usuario.',
        'Es un sustituto deprecado de `@keyframes`.'
      ],
      correctAnswer: 1,
      explanation: '`will-change` previene tirones (jank) al promover elementos a su propia capa de GPU, pero un uso excesivo consume demasiada memoria de video.'
    },
    {
      id: 'css-12',
      topic: 'CSS',
      question: '¿Qué función de gradiente permite crear fondos cónicos utilizados típicamente para gráficos circulares y paletas cromáticas?',
      options: [
        '`radial-gradient()`',
        '`linear-gradient()`',
        '`conic-gradient()`',
        '`mesh-gradient()`'
      ],
      correctAnswer: 2,
      explanation: '`conic-gradient()` rota las transiciones de color alrededor de un punto central como los rayos de un reloj.'
    },
    {
      id: 'css-13',
      topic: 'CSS',
      question: '¿Qué diferencia a `:where()` de `:is()` al evaluar la especificidad de las reglas CSS?',
      options: [
        '`:where()` siempre tiene especificidad 0 (cero), facilitando sobreescribir estilos, mientras que `:is()` adopta la especificidad del selector más específico de su lista.',
        '`:where()` solo acepta clases y `:is()` solo acepta tags HTML.',
        '`:is()` no es soportado en navegadores modernos.',
        'Son completamente idénticos sin ninguna diferencia en cascada.'
      ],
      correctAnswer: 0,
      explanation: '`:where()` reduce la especificidad a (0,0,0) independientemente de los selectores incluidos en sus argumentos.'
    }
  ]
};

// Datos completos de los 6 Cursos requeridos por la consigna
const COURSES_DATA = [
  {
    id: 'javascript',
    title: 'JavaScript Moderno & ESNext',
    shortDesc: 'Domina closures, promesas, event loop, arquitectura de módulos y patrones avanzados de programación funcional y reactiva.',
    category: 'Lenguajes',
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
    category: 'Estructura',
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
    category: 'Estilos',
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
  },
  {
    id: 'sql',
    title: 'Bases de Datos SQL para Frontend Devs',
    shortDesc: 'Comprende el modelado relacional, consultas complejas con PostgreSQL/MySQL, índices de rendimiento e integración con ORMs.',
    category: 'Backend & Data',
    level: 'Intermedio',
    duration: '9 Semanas',
    rating: '4.8 (820)',
    students: '6,300+',
    icon: 'database',
    accent: 'primary',
    badge: 'Fullstack Ready',
    colorHex: '#336791',
    hasExam: false,
    modules: [
      'Modelado de datos relacionales y normalización (1NF, 2NF, 3NF)',
      'Consultas complejas: JOINs, Subqueries, Agregaciones y Window Functions',
      'Diseño de esquemas en PostgreSQL y MySQL',
      'Indexación y optimización de planes de ejecución EXPLAIN',
      'Integración con ORMs modernos (Prisma, Drizzle) y Supabase'
    ]
  },
  {
    id: 'nosql',
    title: 'Bases de Datos NoSQL & Document Stores',
    shortDesc: 'Aprende MongoDB, Redis, bases de datos clave-valor y orientadas a documentos para aplicaciones de alta concurrencia en tiempo real.',
    category: 'Backend & Data',
    level: 'Intermedio',
    duration: '8 Semanas',
    rating: '4.7 (670)',
    students: '5,100+',
    icon: 'storage',
    accent: 'secondary',
    badge: 'Alta Demanda',
    colorHex: '#47a248',
    hasExam: false,
    modules: [
      'Modelado de documentos en MongoDB y Atlas',
      'Estrategias de Embedding vs Referencing en NoSQL',
      'Caché de ultra-baja latencia y pub/sub con Redis',
      'Bases de datos Vectoriales y NoSQL en la Nube (Firestore/DynamoDB)',
      'Patrones de consistencia eventual y escalabilidad horizontal'
    ]
  },
  {
    id: 'agile',
    title: 'Metodologías Ágiles & DevOps Frontend',
    shortDesc: 'Aplica Scrum, Kanban, User Stories, estimación ágil, integración continua CI/CD y cultura de feedback para equipos de alto rendimiento.',
    category: 'Gestión & Metodología',
    level: 'Todos los niveles',
    duration: '6 Semanas',
    rating: '4.9 (1.1k)',
    students: '9,800+',
    icon: 'groups',
    accent: 'tertiary',
    badge: 'Habilidad Clave',
    colorHex: '#0052cc',
    hasExam: false,
    modules: [
      'Framework Scrum en desarrollo ágil de software',
      'Tableros Kanban, métricas de flujo (Lead Time, Cycle Time)',
      'Escritura de Historias de Usuario y Criterios de Aceptación (Gherkin)',
      'Planificación de Sprints, Retrospectivas efectivas y Poker Planning',
      'Integración Continua (CI/CD) y Git Flow para equipos Frontend'
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
