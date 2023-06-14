
### Rediseño de Pantallas para CrackTheCode

Este repositorio contiene el rediseño de dos pantallas para el sitio web [CrackTheCode](https://www.crackthecode.la) realizado en Next.js v13, TypeScript, Tailwind y Yarn. Las pantallas rediseñadas son:

1. El listado de “Rutas de Aprendizaje” [Rutas de Aprendizaje](https://www.crackthecode.la/rutas)
2. El detalle de la ruta “Desarrollo de Videojuegos” [Desarrollo de Videojuegos](https://www.crackthecode.la/rutas/ruta-de-aprendizaje-para-desarrollo-de-videojuegos)

Los datos para estas pantallas se obtienen de las siguientes APIs:

- [API Rutas de Aprendizaje](https://dev.backend.devcrackthecode.net/api/learning-paths/)
- [API Detalle de la ruta](https://dev.backend.devcrackthecode.net/api/learning-paths-all/ruta-de-aprendizaje-para-desarrollo-de-videojuegos/)

## Instrucciones de Instalación y Ejecución

Este proyecto utiliza una arquitectura de microfrontend y requiere que inicie cada subproyecto por separado. Siga los siguientes pasos para instalar y ejecutar el proyecto:

1. Clonar este repositorio
   ```
   git clone https://github.com/joskr2/demo-crack-the-code.git
   ```

2. Navegar al subproyecto 'detailpath'
   ```
   cd detailpath
   ```

3. Instalar las dependencias del subproyecto 'detailpath' con Yarn
   ```
   yarn install
   ```

4. Iniciar el subproyecto 'detailpath'
   ```
   yarn start
   ```

5. En una nueva terminal, navegar al subproyecto 'routedev'
   ```
   cd routedev
   ```

6. Instalar las dependencias del subproyecto 'routedev' con Yarn
   ```
   yarn install
   ```

7. Iniciar el subproyecto 'routedev'
   ```
   yarn start
   ```

Asegúrese de tener ambos subproyectos en ejecución para ver completamente las funcionalidades de este proyecto.
