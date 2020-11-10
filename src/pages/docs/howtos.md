---
name: HowTos
route: /docs/howtos
menu: Help
---

## HowTos

### How to significantly speed up the development process?

1. Do it first

```javascript
yarn add -D nodemon
```

2. Then add

```javascript
"start:dev": "nodemon -r esm dist/store/server/index.js"
```

in the script section file package.json

3. Open 3 terminals

4. execute commands (each in a separate terminal)

```javascript
yarn build:watch
yarn start-api
yarn start:dev
```

nodemon views file change and restarts the store

"build:watch" first builds everything, and then rebuilds only the changed

it does not reload the page in the browser automatically, but significantly speeds up the development process

### Feel free to add your HowTos.

You can add it by making Pull Request to the https://github.com/Cezerin3/Documentation
