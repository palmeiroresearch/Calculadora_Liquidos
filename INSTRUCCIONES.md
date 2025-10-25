# 📖 Instrucciones de Uso - Calculadora Dengue IV

## 🎯 Descripción general

Esta calculadora tiene 2 módulos principales:

1. **Calculadora de Líquidos IV** (izquierda)
2. **Evaluación de Signos de Alarma** (derecha)

En dispositivos móviles, aparecen uno debajo del otro.

---

## 💧 Módulo 1: Calculadora de Líquidos IV

### Paso 1: Datos del paciente
- **Peso (kg)** - OBLIGATORIO
- **Talla (cm)** - OPCIONAL (para cálculo de superficie corporal)

### Paso 2: Parámetros de infusión
- **Velocidad (ml/kg/h)** - Máximo 19.9 ml/kg/h
  - Si ingresas ≥20 ml/kg/h → Aparece alerta de SHOCK
- **Duración (horas)** - Tiempo de infusión planeado
- **Tipo de goteo** - Selector:
  - Normogotero (20 gotas/ml) - Por defecto
  - Macrogotero (10 gotas/ml)
  - Microgotero (60 gotas/ml)

### Resultado mostrado:
```
NaCl 0.9% (frasco 500ml)
Administrar 1500 ml a durar 4 horas
a razón de 125 gotas/min (normogotero)

Frascos necesarios: 3 × 500ml
Velocidad: 5 ml/kg/h × 75 kg = 375 ml/h
```

### Límites de seguridad automáticos:
- **Peso <40 kg:** Sin límite artificial
- **Peso 40-70 kg:** Máximo 2500 ml/4h (proporcional según horas)
- **Peso >70 kg:** Máximo 3000 ml/4h (proporcional según horas)
- **Si hay talla:** 2000 ml/m²/24h

Si excedes el límite → Aparece advertencia amarilla

---

## 💉 Módulo 2: Bolos de Rescate

### Activación:
Clic en: **"▶ Calculadora Bolo de Rescate"**

### Parámetros:
- **Volumen (ml/kg)** - Típicamente 10-20
- **Tiempo (minutos)** - Típicamente 15-30

### Resultado:
```
Bolo de rescate:
NaCl 0.9%
Administrar 750 ml en 15 minutos
a razón de 250 gotas/min (normogotero)
```

---

## 🚨 Módulo 3: Signos de Alarma OPS

### 7 Signos clínicos (checkboxes):
1. Dolor abdominal intenso y sostenido
2. Vómitos persistentes (≥3 en 1h o ≥4 en 6h)
3. Sangrado de mucosas
4. Letargia o irritabilidad
5. Acumulación de líquidos
6. Hepatomegalia >2cm brusca
7. Hipotensión postural

**Clic en el checkbox** o **clic en la fila completa** para marcar/desmarcar

---

## 🩸 Evaluación de Hematocrito

### Campo obligatorio:
- **Hematocrito actual (%)** - Valor del paciente AHORA

### 3 opciones para Hcto basal:

#### Opción A: Tengo Hcto basal
- Ingresar valor de Hcto previo conocido del paciente

#### Opción B: Tengo Hb basal
- Ingresar Hemoglobina (g/dL)
- Se estima: **Hcto = Hb × 3**

#### Opción C: Usar valores de referencia
- Ingresar **Edad** y **Sexo**
- Valores usados:
  - 1-5 años: 37%
  - 6-12 años: 39%
  - Adolescente/Adulto M: 43%
  - Adolescente/Adulto F: 39%

### Detección automática:
Si **Hcto actual** es ≥20% mayor que el basal → Cuenta como **signo de alarma adicional**

---

## 📊 Evaluación automática por fase

### 0 signos - Verde
**Fase febril/convalecencia**
- Hidratación oral
- Monitoreo ambulatorio
- Vigilar signos de alarma

### 1-2 signos - Amarillo
**Fase crítica - Inicio**
- Líquidos IV: **5-7 ml/kg/h**
- Hcto cada 12 horas
- Hospitalización recomendada

### 3-4 signos - Naranja
**Fase crítica - Activa**
- Líquidos IV: **10-15 ml/kg/h**
- Hcto cada 6 horas
- Vigilancia estrecha de TA y diuresis

### ≥5 signos - Rojo
**Fase crítica - Severa/Pre-shock**
- Líquidos IV: **15-20 ml/kg/h** o bolo
- Hcto cada 2-4 horas
- Considerar UCI

---

## 💡 Flujo de trabajo recomendado

### Paciente nuevo:
1. Ingresar **peso** del paciente
2. Marcar **signos de alarma** presentes
3. Ingresar **Hcto actual**
4. Seleccionar método para Hcto basal
5. Ver **evaluación automática** (fase y recomendaciones)
6. Según la fase, ajustar **velocidad de líquidos**
7. Calcular **volumen total y goteo**

### Ejemplo práctico:

**Paciente:** 65 kg, 3 signos de alarma (dolor abdominal, vómitos, Hcto↑)
**Hcto actual:** 48%, **Hcto basal:** 38% (aumento 26.3%)

**Evaluación:** Fase crítica activa (4 signos: 3 clínicos + 1 por Hcto)
**Recomendación:** 10-15 ml/kg/h

**Configuración calculadora:**
- Peso: 65 kg
- Velocidad: 12 ml/kg/h
- Duración: 4 horas
- Goteo: Normogotero

**Resultado:**
- Volumen: 3120 ml en 4h
- Goteo: 260 gotas/min
- Frascos: 7 × 500ml

---

## ⚠️ Advertencias importantes

### Límites de velocidad:
- **<20 ml/kg/h:** Infusión continua
- **≥20 ml/kg/h:** Sugiere shock → usar **bolos** en su lugar

### Signos que indican shock establecido:
- Hipotensión sostenida
- Pulso filiforme
- Frialdad distal
- Llenado capilar >2 seg
- Oliguria marcada
- Alteración severa del estado mental

**En shock:** Usar bolos de 10-20 ml/kg en 15-30 min, NO infusión continua

### Vigilar sobrecarga hídrica:
- Disnea
- Taquipnea
- Crepitantes pulmonares
- Hepatomegalia creciente
- Derrame pleural progresivo

**Si hay sobrecarga:** Disminuir velocidad o suspender líquidos

---

## 📱 Funciones adicionales

### Modo Offline:
- Funciona sin internet después de primera carga
- Indicador en esquina superior derecha

### Instalación como App:
- **Android:** Menú → "Añadir a pantalla de inicio"
- **iOS:** Compartir → "Añadir a pantalla de inicio"

### Diseño Responsive:
- Se adapta automáticamente a móviles
- En móvil: calculadora arriba, signos abajo

---

## 🔄 Casos de uso comunes

### Caso 1: Paciente en fase crítica temprana
- 2 signos de alarma (dolor abdominal + vómitos)
- Indicar: 5-7 ml/kg/h × 4-6 horas

### Caso 2: Paciente deteriorándose
- 4 signos (dolor + vómitos + Hcto↑ + acumulación líquidos)
- Indicar: 10-15 ml/kg/h × 4 horas
- Reevaluar cada 2-4 horas

### Caso 3: Pre-shock
- 5+ signos, hipotensión postural
- Considerar bolo: 10-20 ml/kg en 15-30 min
- Luego pasar a infusión según respuesta

### Caso 4: Seguimiento de Hcto
- Si Hcto sigue subiendo → Aumentar líquidos
- Si Hcto empieza a bajar → Vigilar sobrecarga
- Si Hcto estable pero <20% aumento → Mantener

---

## 🎓 Para estudiantes

### Puntos clave para recordar:
1. **Dengue grave** = shock + extravasación masiva de plasma
2. **Fase crítica** = 24-48h después de ceder la fiebre
3. **Signo más importante** = Aumento del Hcto (hemoconcentración)
4. **Objetivo** = Mantener perfusión sin sobrehidratar
5. **Monitoreo** = Hcto, signos vitales, diuresis, clínica

### Errores comunes a evitar:
- ❌ Usar cristaloides en cantidades inadecuadas (muy poco o mucho)
- ❌ No vigilar el Hcto seriadamente
- ❌ Confundir fase febril con fase crítica
- ❌ No reconocer sobrecarga hídrica a tiempo
- ❌ Dar líquidos rápidos cuando ya hay sobrecarga

---

**¡Éxito en tu práctica clínica! 🏥**
