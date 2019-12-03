# template

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Template create
```
npm run tpl ${dirmame}
```


## Use vue-cli3 to create typescript project

### Update vue-cli
```js
// delete the local previous version
npm uninstall vue-cli -g

// install curten version
npm install -g @vue/cli

// check version
vue --version
```

### Create project
```js
// choose Manually select features
vue create <project-name>

// install typrscript in the created project
vue add @vue/typescript
```