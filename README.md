
# CourseTracker

Mini aplicación en **Angular 20.2.0 (Standalone Components)** para gestionar cursos y lecciones.

---

## Requisitos

- [Node.js](https://nodejs.org/) v18+ (Recomendado LTS)
- [Angular CLI](https://angular.dev/tools/cli) v17+

---

## Instalación 📦
Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/JhoanS5/course-tracker.git
cd course-tracker
npm install
```

## Desarrollo ▶️
Inicia el servidor de desarrollo:
```bash
npm start
```
Por defecto la app estará disponible en: http://localhost:4200

## Build 🏗️
Genera los archivos para producción:
```bash
npm run build
```
Los archivos compilados quedarán en la carpeta dist/.

## Funcionalidades ✅

* 📋 Listado de cursos con nombre, categoría, nivel y estado (Activo/Inactivo).
* ➕ Crear curso con formulario template-driven (ngModel).
* ✏️ Editar curso con validaciones (required, minlength).
* 🗑️ Eliminar curso.
* 🔄 Activar/Inactivar curso con un botón toggle.
* 🎯 Filtros por categoría (texto) y nivel (select).
* 🔢 Contador: X cursos activos / Y totales.
* ❌ Limpiar filtros con un chip/badge.
* 🌟 Directiva personalizada appRequiredAsterisk: añade asterisco rojo en labels requeridos.
* 💾 Persistencia en LocalStorage mediante StorageService.
* ♿ Accesibilidad básica: labels asociados, aria-hidden en asterisco.

## Estructura del Proyecto 🗂️
```css
src/
  app/
    components/
      course-item/
        course-item.component.ts
        course-item.component.html
        course-item.component.css
    directives/
      required-asterisk.directive.ts
    models/
      course.model.ts
    pages/
      courses/
        courses-page.component.ts
        courses-page.component.html
        courses-page.component.css
    services/
      storage.service.ts
    app.config.ts
    app.routes.ts
    app.component.ts
    main.ts
```

## Modelo de datos 📑
```ts
export type Level = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Course {
  id: string;
  name: string;
  category: string;
  level: Level;
  active: boolean;
}
```

## Buenas prácticas aplicadas
* ✅ Standalone components (sin módulos innecesarios).
* ✅ Control flow Angular v17 (@if, @for).
* ✅ @Input / @Output para comunicación padre-hijo.
* ✅ Directiva personalizada con Renderer2 y accesibilidad (aria-hidden).
* ✅ Tipado estricto con interface Course y type Level.
* ✅ Persistencia localStorage con StorageService.
* ✅ Carpetas por feature para organización.
* ✅ Validaciones de formularios template-driven (ngModel).
* ✅ Lint y convención de nombres (camelCase / PascalCase).

## Autor 🏅
Desarrollado como ejercicio practico de Angular por [Jhoan Sebastian Diaz Balta]
