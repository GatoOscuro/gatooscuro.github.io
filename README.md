# Mi Blog (HTML) — GatoOscuro

Este repositorio contiene un blog estático en HTML pensado para publicarse en GitHub Pages.

Estructura propuesta:
- index.html — página principal (lista de posts)
- styles.css — estilos globales
- posts/ — entradas individuales en HTML
- assets/ — imágenes y otros recursos
- .nojekyll — evita el procesamiento Jekyll si lo subes a un repo que no sea username.github.io

Cómo publicar (opción recomendada: repositorio de usuario):
1. Crea un nuevo repositorio con el nombre `GatoOscuro.github.io` en GitHub.
2. Sitúate en la carpeta del proyecto local y ejecuta:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: blog estático"
   git branch -M main
   git remote add origin git@github.com:GatoOscuro/GatoOscuro.github.io.git
   git push -u origin main
   ```
   (Si prefieres HTTPS usa la URL `https://github.com/GatoOscuro/GatoOscuro.github.io.git`.)

3. En pocos minutos tu sitio estará disponible en: `https://GatoOscuro.github.io`

Alternativa (si no quieres usar repo de usuario):
- Crea un repositorio normal y en Settings → Pages elige la rama `main` y la carpeta `/ (root)` o la carpeta `/docs`. Si usas `/docs`, mueve los archivos a la carpeta `docs/`.
- También puedes usar la rama `gh-pages` si lo prefieres.

Probar localmente:
- Con Python: `python -m http.server 8000` y abre `http://localhost:8000`
- O con alguna extensión Live Server en VSCode.

Sugerencias para avanzar:
- Añade más posts como `posts/2025-11-07-entrada.html` y actualiza el índice.
- Si quieres plantillas y administración de posts, considera usar un generador (Jekyll, Hugo) más adelante.
- Para un dominio personalizado configura Settings → Pages → Custom domain.

¡Listo! Sube estos archivos a tu repo y te publico el sitio.
