# HT simple web app in React + Redux
A try at React + Redux to have a simple web app that shows a list of interesting technologies
and allows to cast votes on them.

Scaffolding from [fountain-generator](http://fountainjs.io/) with as choices
- React
- Webpack with npm
- TypeScript
- SASS
- Travis

Followed by 
- Re-installation of react and react-dom to use `15.5`
- Replacing `'ts-loader'` by `'ts-loader?' + JSON.stringify({ignoreDiagnostics:[2345, 2307]})` 
in `conf/{webpack.conf.js,webpack-dist.conf.js,webpack-test.conf.js}` following 
[this issue](https://github.com/FountainJS/generator-fountain-react/issues/70)

## Serve and watch
``gulp serve``

## Test
``gulp test``

## To do
