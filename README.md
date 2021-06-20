# React templates

## Init

`gen react init`

Creates a react project with the following configuration:

- Webpack 5
  - Circular Dependency Plugin
- Babel
  - decorators plugin
  - do expressions plugin
  - smart pipeline operator plugin
- PostCSS
  - PostCSS preset env
  - CSS Modules (disabled by default)
- Stylus
- ESLint (disabled by default)

### Optional parts

To enable ESLint, specify the argument `eslint`.

`gen react init --eslint 1`

To enable CSS Modules, specify the argument `cssModules`.

`gen react init --cssModules 1`

## Component

Creates a functional component:

`gen react component --name MyComponent`

Creates a class component:

`gen react component --type class --name MyComponent`

Creates a class component with fetch function:

`gen react component --type class --name MyComponent --fetchFn 1`

## Context

Creates a context with a higher order component:

`gen react context --name MyContext`

## Path configuration

You can specify components directory in the `components` argument, and the contexts in the `contexts` argument.
