# Guía de Contribución - PetCareReact

Gracias por tu interés en contribuir a PetCareReact. A continuación encontrarás las pautas para contribuir al proyecto de manera ordenada y profesional.

## Cómo empezar

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/yefer08/PetCareReact.git
   cd PetCareReact
   ```

2. **Crear una rama de desarrollo**
   ```bash
   git checkout -b develop
   git checkout -b feature/nombre-de-la-feature
   ```

3. **Instalar dependencias**
   ```bash
   npm install
   ```

## Estándares de Código

### Estilo de Código
- Utilizamos **Prettier** para formateo automático
- Utilizamos **ESLint** para linting
- Seguimos los estándares de React Native

### Comandos Útiles
```bash
npm run lint          # Verificar linting
npm run format        # Formatear código
npm test              # Ejecutar pruebas
npm run android       # Ejecutar en Android
npm run ios           # Ejecutar en iOS
```

## Flujo de Trabajo

1. Crear una rama con el prefijo apropiado:
   - `feature/` - Para nuevas funcionalidades
   - `fix/` - Para corrección de bugs
   - `docs/` - Para cambios en documentación
   - `refactor/` - Para refactorización de código

2. Realizar los cambios y hacer commits regulares con mensajes descriptivos

3. Asegurar que las pruebas pasen:
   ```bash
   npm test
   ```

4. Hacer push a la rama y crear un Pull Request

## Mensajes de Commit

Utilizamos **Conventional Commits**:

```
type(scope): description

[optional body]
[optional footer]
```

### Tipos de Commits
- `feat` - Nueva funcionalidad
- `fix` - Corrección de bug
- `docs` - Cambios en documentación
- `style` - Cambios de estilos (formato, punto y coma, etc.)
- `refactor` - Refactorización de código
- `perf` - Mejoras de performance
- `test` - Adición o cambios en pruebas
- `build` - Cambios en configuración de build

### Ejemplos
```
feat(auth): Implementar login de usuario
fix(home): Validar lista de mascotas vacía
docs: Actualizar guide de instalación
```

## Pull Requests

- Describir claramente qué cambios se realizan y por qué
- Vincular issues relacionados (si los hay)
- Asegurar que el código pase todos los tests
- Estar abierto a feedback y revisión

## Reportar Issues

- Describir el problema claramente
- Incluir pasos para reproducirlo
- Especificar la versión del app y sistema operativo usado
- Incluir screenshots o logs si es relevante

## Preguntas

Si tienes dudas, abre un issue o contacta a los mantenedores.

¡Gracias por contribuir! 🎉
