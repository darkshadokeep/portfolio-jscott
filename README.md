[README.md](https://github.com/user-attachments/files/22372498/README.md)
# Portafolio – José Enrique Scott

Stack: **Vite + React + Tailwind**. Deploy recomendado: **Netlify** con repo en **GitHub**.

## 🚀 Pasos rápidos
1. **Instalar deps**  
   ```bash
   npm install
   ```
2. **Correr local**  
   ```bash
   npm run dev
   ```
3. **Build de producción**  
   ```bash
   npm run build
   # genera la carpeta /dist
   ```

## 🌐 Publicar en Netlify (con GitHub)
1. Sube este proyecto a un repo (ej: `portfolio-jscott`).  
2. En Netlify → **New site from Git** → Conectar GitHub → Selecciona tu repo.  
3. Configuración de build:  
   - **Build command:** `npm run build`  
   - **Publish directory:** `dist`
4. Confirma y espera el deploy. Obtendrás un link tipo `https://portfolio-jscott.netlify.app`.

## 🧩 Estructura
```
public/
  cv/
    CV_JSCOTT_FINAL.pdf     # Reemplaza con tu CV real
  screenshots/
    screen1.png|jpg         # Coloca tus capturas (opcionales)
src/
  data/
    projects.json           # Proyectos (edítalo para agregar más)
  App.jsx                   # Landing
  main.jsx
  index.css
```

## 🛠️ Personalización
- **CV:** reemplaza `public/cv/CV_JSCOTT_FINAL.pdf` por tu archivo real.
- **Teléfono/Email/Nombre:** en `src/App.jsx` (const DATA).
- **Proyectos:** edita `src/data/projects.json`. Se renderiza automáticamente.
- **Colores de marca:** en `App.jsx` (`BRAND_COLORS`), puedes agregar más (ej. Figma, Canva, etc.).

## 🏷️ FAQ
- **¿Puedo tener varios sitios en Netlify?** Sí. Cada repo → un site con link propio.
- **¿Cómo agrego más proyectos?** Solo añade objetos al `projects.json`. No necesitas tocar JSX.
- **¿Dónde cambio el botón de WhatsApp?** En `App.jsx`, usando `BRAND_COLORS.WhatsApp`.
