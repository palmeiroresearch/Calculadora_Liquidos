# 💧 Calculadora Líquidos IV - Dengue

Herramienta web para calcular líquidos IV y evaluar signos de alarma en pacientes con dengue según criterios OPS (Organización Panamericana de la Salud).

## 🚀 Acceso rápido
[Abrir calculadora](https://tu-usuario.github.io/Calculadora-Dengue-IV/)

> **Nota:** Después de desplegar, reemplaza `tu-usuario` con tu nombre de usuario de GitHub.

## 📋 Características principales

### Calculadora de Líquidos IV
- Cálculo automático de volumen total basado en peso y velocidad
- Conversión a gotas/minuto según tipo de goteo (normogotero, macrogotero, microgotero)
- Límites de seguridad inteligentes según peso y superficie corporal
- Alerta automática si velocidad ≥20 ml/kg/h (sugiere shock)
- Cálculo de número de frascos necesarios (500ml)

### Calculadora de Bolos de Rescate
- Sección colapsable para bolos de emergencia
- Cálculo rápido de goteo para administración rápida
- Configuración típica: 10-20 ml/kg en 15-30 minutos

### Evaluación de Signos de Alarma OPS
- 7 signos clínicos según criterios OPS
- Sistema de hematocrito con 3 opciones:
  - Hcto basal conocido
  - Estimación desde Hb (Hcto = Hb × 3)
  - Valores de referencia por edad y sexo
- Detección automática de aumento ≥20% del Hcto
- Clasificación en 4 fases:
  - Fase febril/convalecencia (0 signos)
  - Fase crítica inicio (1-2 signos)
  - Fase crítica activa (3-4 signos)
  - Fase crítica severa/Pre-shock (≥5 signos)
- Recomendaciones específicas por fase

## 🎨 Características técnicas

- **PWA (Progressive Web App):** Funciona offline después de la primera carga
- **Responsive:** Diseño adaptable para móviles y tablets
- **Instalable:** Se puede instalar en dispositivos móviles
- **Sin dependencias:** No requiere frameworks externos
- **Ligero:** Archivo único HTML con CSS y JS integrados

## 📦 Instalación y despliegue

### Opción 1: GitHub Pages (Recomendado)

1. **Crear repositorio en GitHub:**
   ```bash
   # En tu computadora
   mkdir Calculadora-Dengue-IV
   cd Calculadora-Dengue-IV
   ```

2. **Copiar archivos del proyecto:**
   - `index.html`
   - `sw.js`
   - `manifest.json`
   - `README.md`

3. **Crear iconos (opcional pero recomendado):**
   - Crea dos imágenes PNG:
     - `icon-192.png` (192x192 px)
     - `icon-512.png` (512x512 px)
   - Usa herramientas como Canva o cualquier editor de imágenes
   - Temática: Gota de agua, cruz médica, mosquito estilizado

4. **Subir a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Calculadora Dengue IV"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/Calculadora-Dengue-IV.git
   git push -u origin main
   ```

5. **Activar GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` → carpeta `/ (root)`
   - Save
   - Espera 1-2 minutos
   - Tu app estará en: `https://tu-usuario.github.io/Calculadora-Dengue-IV/`

### Opción 2: Servidor local para pruebas

```bash
# Con Python 3
python -m http.server 8000

# Con PHP
php -S localhost:8000

# Con Node.js (si tienes http-server instalado)
npx http-server
```

Luego abre: `http://localhost:8000`

## 🔧 Personalización

### Cambiar colores
Edita las variables CSS en `<style>` del `index.html`:

```css
/* Color principal (azul/cyan) */
background: linear-gradient(135deg, #0891b2 0%, #06b6d4 100%);

/* Color secundario (naranja para bolos) */
background: #fb923c;

/* Color de evaluación (púrpura/rosa) */
background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
```

### Modificar límites de volumen
En la función `calcularLiquidos()`:

```javascript
// Límite para peso 40-70 kg (actualmente 2500ml/4h)
limiteMax = (2500 * duracion) / 4;

// Límite para peso >70 kg (actualmente 3000ml/4h)
limiteMax = (3000 * duracion) / 4;
```

### Ajustar valores de referencia de Hcto
En la función `evaluarSignosAlarma()`:

```javascript
if (edad >= 1 && edad <= 5) {
    hctoBasal = 37;  // 1-5 años
} else if (edad >= 6 && edad <= 12) {
    hctoBasal = 39;  // 6-12 años
} else if (edad >= 13) {
    hctoBasal = sexo === 'M' ? 43 : 39;  // Adolescente/Adulto
}
```

## 📱 Uso como PWA

### En dispositivos móviles (Android/iOS):

1. Abre la calculadora en el navegador
2. **Android Chrome:** 
   - Menú (⋮) → "Añadir a pantalla de inicio"
3. **iOS Safari:**
   - Botón compartir (📤) → "Añadir a pantalla de inicio"
4. Icono se agregará a tu pantalla principal
5. La app funcionará incluso sin conexión

## ⚠️ Consideraciones médicas importantes

### Uso apropiado
- Herramienta de **apoyo clínico**, no reemplaza el juicio médico
- Basado en criterios OPS para dengue
- Validar siempre con protocolos institucionales
- Considerar comorbilidades del paciente

### Limitaciones
- No incluye manejo de shock establecido
- No reemplaza monitoreo clínico continuo
- Requiere interpretación médica de resultados
- Los límites de volumen son orientativos

### Signos de alarma OPS
Los 7 signos implementados son:
1. Dolor abdominal intenso y sostenido
2. Vómitos persistentes
3. Sangrado de mucosas
4. Letargia o irritabilidad
5. Acumulación de líquidos
6. Hepatomegalia >2cm brusca
7. Hipotensión postural
8. **Aumento de Hcto ≥20%** (calculado automáticamente)

## 🐛 Solución de problemas

### La app no funciona offline
- Verifica que el Service Worker esté registrado (consola del navegador)
- Recarga la página con Ctrl+F5
- Revisa que `sw.js` esté en la misma carpeta que `index.html`

### Los iconos no se muestran
- Crea archivos `icon-192.png` y `icon-512.png`
- O comenta las líneas de iconos en `manifest.json`

### No se puede instalar como PWA
- Verifica que estés usando HTTPS (GitHub Pages lo usa automáticamente)
- Localhost también funciona para pruebas
- Revisa que `manifest.json` esté correctamente enlazado

## 📚 Referencias

- [OPS - Dengue: Guías para la atención de enfermos en la región de las Américas](https://iris.paho.org/handle/10665.2/28232)
- [WHO - Dengue: guidelines for diagnosis, treatment, prevention and control](https://www.who.int/publications/i/item/9789241547871)
- Ministerio de Salud - Protocolos locales de manejo de dengue

## 👨‍⚕️ Desarrollado para

- Estudiantes de Medicina en práctica preprofesional
- Médicos generales y de emergencia
- Personal de salud en áreas endémicas de dengue
- Instituciones de salud que manejan casos de dengue

## 📄 Licencia

Este proyecto es de uso libre para fines educativos y asistenciales. Se recomienda adaptarlo a los protocolos institucionales locales.

## 🤝 Contribuciones

¿Mejoras o sugerencias? 
1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/MejoraMedica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/MejoraMedica`)
5. Abre un Pull Request

---

**⚠️ Disclaimer:** Herramienta de apoyo clínico. El manejo definitivo debe basarse en protocolos institucionales, criterio médico y evaluación individual del paciente.
