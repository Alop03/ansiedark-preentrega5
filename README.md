# Ansiedark — Pre-entrega 5

Quinta pre-entrega del curso de React JS de Coderhouse.

Ansiedark es un e-commerce de joyas desarrollado con React. Su propuesta se basa en una selección mensual de piezas para personas que hacen de su identidad una estética.

## Objetivo de la entrega

Esta entrega incorpora la navegación completa del e-commerce mediante React Router.

La aplicación permite:

- Navegar sin recargar completamente la página.
- Visualizar el catálogo completo.
- Filtrar productos mediante categorías dinámicas.
- Acceder al detalle individual de cada joya.
- Obtener parámetros desde la URL.
- Mantener un layout compartido en todas las rutas.
- Mostrar una página 404 para direcciones inexistentes.
- Redirigir el acceso a una zona no autorizada.

## Funcionalidades incorporadas

- Instalación de `react-router-dom`.
- Configuración de `BrowserRouter`.
- Definición de rutas mediante `Routes` y `Route`.
- Navegación interna con `Link` y `NavLink`.
- Parámetros dinámicos con `useParams`.
- Filtrado automático por categoría.
- Detalles de productos vinculados desde las tarjetas.
- Layout compartido mediante rutas anidadas.
- Renderizado de contenido mediante `Outlet`.
- Navbar, CartWidget y Footer persistentes.
- Ruta 404 mediante el componente `NotFound`.
- Redirección mediante `Navigate`.
- Carga asincrónica de catálogos y detalles.
- Estados visuales de carga y error.
- Diseño adaptable a dispositivos móviles.

## Rutas disponibles

| Ruta | Función |
|---|---|
| `/` | Muestra el catálogo completo |
| `/category/:categoryId` | Filtra los productos por categoría |
| `/item/:itemId` | Muestra el detalle del producto seleccionado |
| `/admin` | Simula una zona restringida y redirige al inicio |
| `*` | Muestra la página de error 404 |

### Ejemplos de categorías

```text
/category/anillos
/category/collares
/category/pulseras
```

### Ejemplos de productos

```text
/item/anillo-niebla
/item/collar-orbita
/item/pulsera-vertigo
```

## Flujo del catálogo

`ItemListContainer` obtiene `categoryId` desde la URL mediante `useParams`.

Si no existe una categoría, solicita todos los productos:

```text
/
```

Si existe una categoría, la función `getProducts` filtra la colección antes de resolver la promesa:

```text
/category/anillos
```

El efecto depende de `categoryId`, por lo que la carga se ejecuta nuevamente cuando cambia la categoría.

## Flujo del detalle

Cada componente `Item` genera un enlace dinámico utilizando el ID del producto:

```jsx
<Link to={`/item/${id}`}>
    Ver detalle
</Link>
```

`ItemDetailContainer` obtiene `itemId` mediante `useParams` y ejecuta `getProductById(itemId)`.

La función busca el producto correspondiente mediante `.find()` y devuelve una promesa. Si el producto no existe, la aplicación muestra un mensaje de error.

## Layout compartido

El componente `Layout` mantiene visibles los elementos comunes:

```text
Layout
├── Navbar
│   └── CartWidget
├── Outlet
│   └── Contenido de la ruta activa
└── Footer
```

`Outlet` permite cambiar el contenido central sin volver a crear la navegación ni el pie de página.

## Componentes principales

### `Navbar`

Contiene la marca, los enlaces a las categorías y el acceso visual al carrito.

### `CartWidget`

Representa el acceso al carrito, cuya lógica global se incorporará en una próxima etapa.

### `ItemListContainer`

Administra la carga del catálogo y reacciona al parámetro de categoría.

### `ItemList`

Recibe los productos y genera el listado mediante `.map()`.

### `Item`

Muestra la información resumida de cada joya y enlaza con su detalle.

### `ItemDetailContainer`

Obtiene el ID desde la URL, solicita el producto y administra la carga y los errores.

### `ItemDetail`

Presenta la información completa del producto seleccionado.

### `ItemCount`

Permite elegir una cantidad sin superar el stock disponible.

### `Layout`

Mantiene el Navbar, el CartWidget y el Footer en todas las rutas.

### `NotFound`

Informa que la dirección solicitada no existe y ofrece regresar al catálogo.

### `Footer`

Proporciona navegación complementaria y permanece visible en todas las rutas.

## Separación de responsabilidades

```text
asyncMock
    Simula la fuente de datos y las peticiones.

ItemListContainer
    Administra el catálogo y la categoría activa.

ItemList
    Recorre la colección de productos.

Item
    Presenta cada tarjeta y genera su enlace.

ItemDetailContainer
    Administra la búsqueda por ID.

ItemDetail
    Presenta el detalle completo.

ItemCount
    Controla la cantidad seleccionada.

Layout
    Organiza los elementos persistentes.

App
    Define la arquitectura de rutas.
```

## Tecnologías utilizadas

- React 19
- React Router DOM
- Vite
- JavaScript
- CSS
- React Icons
- Git y GitHub

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Alop03/ansiedark-preentrega5.git
```

Ingresar al proyecto:

```bash
cd ansiedark-preentrega5
```

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

## Validación del proyecto

Ejecutar el analizador de código:

```bash
npm run lint
```

Generar la versión de producción:

```bash
npm run build
```

## Autor

Álvaro Sigüertt — Proyecto desarrollado para el curso de React JS de Coderhouse.