# Calculator App

## Task

https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0

## How to run the app

1. Клонируйте репозиторий:

   git clone https://github.com/imnotkatya/calc-test.git

2. cd calc-test
3. cd test-task
4. npm install
5. npm run build
6. npm start


## Prettier
npm run format


## Lint

npm run lint

## Structure

dist/ — Stores compiled and bundled project files after the build.
node_modules/ — Contains installed npm dependencies.
eslint.config.mjs — ESLint configuration file using ES modules format (MJS).
package.json — Project metadata file with dependencies, scripts, and settings.
webpack.config.js — Webpack configuration file for project bundling.
.eslintignore — Specifies files and directories ignored by ESLint.
.prettierignore — Specifies files and directories ignored by Prettier.
.prettierrc.json — Prettier configuration file for code formatting rules.
src/ — Contains the project's source code (JS, CSS, HTML).

