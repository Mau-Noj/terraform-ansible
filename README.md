# ALM + MDA Vaadin — Instrucciones de Instalación

## Archivos generados

| Archivo | Destino en tu proyecto |
|---|---|
| `MainView.java` | `src/main/java/com/example/application/views/main/MainView.java` |
| `styles.css` | `frontend/themes/my-theme/styles.css` |
| `theme.json` | `frontend/themes/my-theme/theme.json` |

---

## Pasos

### 1. Coloca MainView.java
Copia `MainView.java` a:
```
src/main/java/com/example/application/views/main/MainView.java
```

### 2. Reemplaza los archivos del tema
Copia `styles.css` y `theme.json` a:
```
frontend/themes/my-theme/styles.css
frontend/themes/my-theme/theme.json
```

### 3. Verifica tu Application.java
Asegúrate de que `Application.java` tenga:
```java
package com.example.application;

@SpringBootApplication
@Theme(value = "my-theme")
public class Application implements AppShellConfigurator {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

### 4. Ejecuta el proyecto
```cmd
mvn clean spring-boot:run
```

Abre http://localhost:8080

---

## Estructura de carpetas esperada
```
Ejemplo-Vaadin/
├── frontend/
│   └── themes/
│       └── my-theme/
│           ├── styles.css       ← REEMPLAZAR
│           └── theme.json       ← REEMPLAZAR
├── src/
│   └── main/
│       └── java/
│           └── com/example/application/
│               ├── Application.java
│               └── views/
│                   └── main/
│                       └── MainView.java  ← COPIAR AQUÍ
└── pom.xml
```

---

## Características de la guía
- ✅ 10 pestañas visibles y funcionando (el problema original estaba en el tema faltante)
- ✅ Mapa General con tabla interactiva
- ✅ 5 Etapas ALM con cards horizontales
- ✅ 4 Modelos MDA con pipeline visual
- ✅ 8 tipos de Diagramas UML
- ✅ 10 Patrones (Arquitectónicos + GoF)
- ✅ 5 Principios SOLID + 6 Buenas Prácticas
- ✅ SQL vs NoSQL, ACID, CAP, Normalización
- ✅ ISO 25010 + Tipos de Pruebas
- ✅ 7 Metodologías (Waterfall, Espiral, RUP, Scrum, XP, DevOps, SAFe)
- ✅ Tabla de Herramientas completa
- ✅ Dialogs/modales con detalle de cada concepto
- ✅ Diseño oscuro responsivo (tema my-theme)