# Material Date Range Picker

Un componente reutilizable de Date Range Picker inspirado en Material Design, construido con React, TypeScript y Tailwind CSS.

## Características

- ✅ **Date Range Selection**: Permite seleccionar un rango de fechas (from-to)
- ✅ **Material Design**: UI inspirada en los date pickers de Material Design
- ✅ **Navegación de Meses/Años**: Comboboxes para navegar entre meses y años
- ✅ **Días de Meses Adyacentes**: Muestra días del mes anterior/siguiente en gris
- ✅ **Valor por Defecto**: Prop para establecer un rango inicial
- ✅ **Estilos Intuitivos**:
  - Días seleccionados (from/to) en azul sólido
  - Días en el rango en azul transparente
  - Día actual resaltado con borde
- ✅ **TypeScript**: Completamente tipado
- ✅ **Responsive**: Diseño adaptativo

## Instalación

```bash
npm install
```

## Uso

```tsx
import { useState } from 'react';
import DatePicker from './components/date-picker';
import type { DateRange } from './components/date-picker/types';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Opcional: valor por defecto
  const defaultRange: DateRange = {
    from: new Date(),
    to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Una semana después
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Abrir Date Range Picker</button>

      <DatePicker
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        defaultValue={defaultRange} // Opcional
      />
    </div>
  );
}
```

## Props

| Prop           | Tipo                         | Requerido | Descripción                                                |
| -------------- | ---------------------------- | --------- | ---------------------------------------------------------- |
| `isOpen`       | `boolean`                    | ✅        | Controla si el modal está abierto                          |
| `onOpenChange` | `(isOpen: boolean) => void`  | ✅        | Callback cuando cambia el estado del modal                 |
| `onSubmit`     | `(range: DateRange) => void` | ✅        | Callback que se ejecuta al confirmar el rango seleccionado |
| `defaultValue` | `DateRange`                  | ❌        | Valor inicial del rango de fechas                          |

## Tipos

```ts
interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

interface DatePickerProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSubmit: (range: DateRange) => void;
  defaultValue?: DateRange;
}
```

## Funcionalidad

### Selección de Fechas

1. **Primera selección**: Establece la fecha `from`
2. **Segunda selección**: Establece la fecha `to`
3. **Misma fecha dos veces**: Establece `from` y `to` iguales
4. **Tercera selección**: Reinicia el rango con nueva fecha `from`

### Navegación

- **Botones de flecha**: Navegar mes anterior/siguiente
- **Combobox de mes**: Selección directa del mes
- **Combobox de año**: Selección directa del año
- **Días de otros meses**: Clickeable y cambia automáticamente al mes correspondiente

## Estructura del Proyecto

```
src/
├── components/
│   └── date-picker/
│       ├── index.tsx      # Componente principal
│       ├── types.ts       # Definiciones de tipos
│       ├── constants.ts   # Constantes (nombres de meses, días)
│       └── utils.ts       # Funciones de utilidad
└── App.tsx               # Ejemplo de uso
```

## Tecnologías

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **shadcn/ui** - Componentes base, estilos y sistema de iconos (usa Tailwind CSS, Radix UI y Lucide React)
- **Vite** - Build tool

## Desarrollo

### Scripts Disponibles

```bash
# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar la build
npm run preview

# Ejecutar linter
npm run lint
```
