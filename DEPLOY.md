# 🚀 Guía Rápida de Despliegue

## Pasos para subir a GitHub Pages

### 1. Preparar archivos
Asegúrate de tener estos archivos en una carpeta:
```
Calculadora-Dengue-IV/
├── index.html
├── sw.js
├── manifest.json
├── README.md
├── icon-192.png (opcional)
└── icon-512.png (opcional)
```

### 2. Inicializar Git
```bash
cd Calculadora-Dengue-IV
git init
git add .
git commit -m "Initial commit"
```

### 3. Crear repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre: `Calculadora-Dengue-IV`
3. Público
4. NO inicializar con README
5. Crear repositorio

### 4. Conectar y subir
```bash
git remote add origin https://github.com/TU-USUARIO/Calculadora-Dengue-IV.git
git branch -M main
git push -u origin main
```

### 5. Activar GitHub Pages
1. Ve a tu repositorio
2. **Settings** → **Pages**
3. **Source:** Deploy from a branch
4. **Branch:** `main` → `/ (root)`
5. **Save**
6. Espera 1-2 minutos

### 6. ¡Listo!
Tu calculadora estará en:
```
https://TU-USUARIO.github.io/Calculadora-Dengue-IV/
```

---

## Crear iconos rápidamente

### Opción 1: Canva (Recomendado)
1. Ve a canva.com
2. Crea diseño personalizado: 512 × 512 px
3. Usa elementos: 💧 + ➕ (cruz médica) + fondo azul/cyan
4. Descarga como PNG
5. Redimensiona a 192x192 para el icono pequeño
6. Nombra: `icon-512.png` y `icon-192.png`

### Opción 2: Emoji como icono (rápido)
Usa estos SVG/PNG de emojis como iconos temporales:
- 💧 (gota de agua)
- 🏥 (hospital)
- 🩺 (estetoscopio)

Busca "emoji png 512x512" en Google Imágenes

### Opción 3: Sin iconos
Si no tienes iconos todavía:
1. Comenta estas líneas en `index.html`:
```html
<!-- <link rel="manifest" href="manifest.json"> -->
<!-- <link rel="apple-touch-icon" href="icon-192.png"> -->
```

2. O simplemente no incluyas los archivos .png
3. La app funcionará igual, solo no tendrá icono personalizado

---

## Actualizar después de cambios

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

GitHub Pages se actualizará automáticamente en 1-2 minutos.

---

## Probar localmente antes de subir

```bash
# Con Python 3 (más común)
python -m http.server 8000

# Luego abre: http://localhost:8000
```

---

## Troubleshooting rápido

**Problema:** La página no carga en GitHub Pages
- **Solución:** Espera 2-3 minutos, GitHub tarda en compilar

**Problema:** Aparece error 404
- **Solución:** Verifica que el archivo se llame exactamente `index.html`

**Problema:** No funciona offline
- **Solución:** Abre la app una vez con internet, luego funcionará offline

**Problema:** Los iconos no aparecen
- **Solución:** Crea los archivos .png o comenta las líneas en el HTML

---

## ¿Primera vez usando Git?

### Instalar Git
- **Windows:** https://git-scm.com/download/win
- **Mac:** `brew install git` o viene preinstalado
- **Linux:** `sudo apt install git`

### Configurar Git (solo primera vez)
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### Crear cuenta GitHub
1. Ve a https://github.com/signup
2. Crea tu cuenta
3. Verifica tu email

---

## Checklist final

- [ ] Archivos HTML, JS y manifest listos
- [ ] Git inicializado
- [ ] Repositorio creado en GitHub
- [ ] Código subido (git push)
- [ ] GitHub Pages activado
- [ ] App probada en navegador
- [ ] App probada en móvil
- [ ] Probado modo offline

---

**¡Listo para usar en tu práctica clínica! 🏥**
