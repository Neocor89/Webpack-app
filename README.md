# Webpack-app
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)  ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)   ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

## **SETUP**

Creation webpack app folder

```
| dist
|__
|  |_ index.js
|
|__src
   |
   |__
      |_ index.html
```
### `init project`

```npm
npm init -Y
```
### `install webpack`

```
npm install webpack -D webpack-cli
```

### `Script build`

```json
"scripts": {
   "build": "webpack"
}
```

### `Configuration of webpack file`

```js
const path = require('path');

module exports = {
   mode: 'development',
   entry: path.resolve(__dirname, 'src/index.js'),
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
   },
}
```

### `Run command build`

```
npm run build
```

```
| dist
|__
|  |_ bundle.js
|__
|  |_ index.html
|
| node modules
|
|__src
   |
   |__
      |_ index.js
```

### `Updating configuration of webpack file`

```js
const path = require('path');

module exports = {
    mode: "development",
  entry: {
    bundle:  path.resolve(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
}
```

### `Install Sass and style loader`

```
npm i -D sass style-loader css-loader sass-loader
```

### `Add Sass in webpack config file`

```js
const path = require('path');

module exports = {
    mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
}
```

### `install plugin html webpack`

```
npm i -D html-webpack-plugin
```