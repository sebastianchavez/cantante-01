# 🎤 Lucas Vega - Landing Page Template

Plantilla de sitio web multipágina profesional para cantantes, músicos y artistas en general.

## 📋 Descripción

Sitio web completo con identidad visual dorada y negra, diseñado para mostrar servicios musicales, galería, precios y facilitar el contacto con potenciales clientes.

## 🎨 Identidad

- **Artista demo:** Lucas Vega
- **Estilo musical:** Pop Latino
- **Paleta:** Negro + Dorado (#D4AF37) + acentos crema
- **Tipografía:** Playfair Display (títulos) + Inter (cuerpo)

## 🚀 Stack Técnico

- **HTML5** semántico
- **Tailwind CSS** (CDN)
- **JavaScript** nativo (vanilla)
- **Font Awesome 6** (iconos)
- **Google Fonts**
- **Sin build step** - abrir y usar

## 📁 Estructura

```
cantante-01/
├── index.html                  # Página de inicio
├── pages/
│   ├── sobre-nosotros.html     # Bio del artista
│   ├── servicios.html          # Servicios ofrecidos
│   ├── galeria.html            # Galería con lightbox
│   ├── precios.html            # Paquetes y tabla comparativa
│   ├── contacto.html           # Formulario + mapa + horarios
│   ├── politicas.html          # Políticas de privacidad
│   └── terminos.html           # Términos y condiciones
├── css/
│   └── styles.css              # Animaciones y estilos personalizados
├── js/
│   ├── main.js                 # Lógica común (navbar, scroll, form)
│   └── galeria.js              # Lightbox y filtros (solo galería)
└── README.md
```

## ✨ Funcionalidades

- ✅ **Navbar sticky** con efecto transparente → sólido al hacer scroll
- ✅ **Menú móvil** hamburguesa con animación
- ✅ **Animaciones on-scroll** (fade-in, slide) con IntersectionObserver
- ✅ **Contadores animados** para estadísticas
- ✅ **Lightbox** en galería con navegación por teclado (ESC, flechas)
- ✅ **Filtros por categoría** en galería
- ✅ **Validación de formulario** en tiempo real
- ✅ **Tabla comparativa** responsive
- ✅ **FAQ acordeón** en precios
- ✅ **Google Maps** embebido
- ✅ **Botón scroll-to-top**
- ✅ **100% responsive**

## 📦 Datos Mockeados

- 4 contadores de estadísticas
- 6 servicios detallados
- 12 fotos de galería (Unsplash)
- 3 paquetes de precios
- 5 preguntas frecuentes
- Mapa de Santiago de Chile
- Horarios comerciales

## 🛠️ Personalización Rápida

### Cambiar el nombre del artista

Buscar y reemplazar `Lucas Vega` en todos los archivos HTML.

### Cambiar colores

Editar la configuración de Tailwind en el `<script>tailwind.config</script>` de cada HTML:

```javascript
colors: {
    'gold': { '500': '#D4AF37' },   // Tu color principal
    'dark': { '900': '#0A0A0A' }    // Tu color de fondo
}
```

### Cambiar imágenes

Reemplazar las URLs de Unsplash por las propias en:
- `index.html` - hero, cards
- `pages/sobre-nosotros.html` - bio
- `pages/servicios.html` - servicios
- `pages/galeria.html` - galería

### Modificar precios

Editar `pages/precios.html` y `index.html` (links).

## 🌐 Cómo Usar

1. Subir todos los archivos a un hosting (Netlify, Vercel, GitHub Pages, hosting tradicional)
2. Asegurarse de mantener la estructura de carpetas `pages/`, `css/`, `js/`
3. Abrir `index.html` en el navegador

## 📧 Contacto Demo

- Email: hola@lucasvega.com
- Teléfono: +56 2 2555 1234
- Ubicación: Av. Apoquindo 4501, Las Condes, Santiago de Chile

## 📝 Notas

- Tailwind se carga vía CDN (necesita conexión a internet)
- Las imágenes provienen de Unsplash
- Los textos legales son **mocks** y deben ser revisados por un abogado antes de uso real
- El formulario no envía emails (solo muestra mensaje de éxito - integrar con backend o servicio como Formspree)
