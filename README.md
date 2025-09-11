# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Cambio postBoton
Yo con el boton hice un prueba de cargar peliculas, y al darle click pintalla de peliculas, ya no servio con el usseEffect []
npm install react-router-dom
React hook es la manera más comun de manejar proyectos react sin embarhoa ntes se manejaban componentes con clases en react

componentDidMount(){}
es algo propio de react
es una funcion q se va a ejecutar cuando el componente se haya cargado

el equivalente en react hooks es
useEffect(() => {
    buscarPeliculas()
  }, [])

componentDidUpdate(){}
es algo propio de react
es que cada vez que se actualize/refresque el componente se va a ejecutar esta funcion.
Se ejecuta siempre que se refresque algo.

el equivalente en react hooks es
useEffect(() => {
    buscarPeliculas()
})
