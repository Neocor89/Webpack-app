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
  /* 
  */
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

```js
const path = require('path');

module exports = {
  /* 
  */
plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack app Joke generator",
      filename: "index.html",
      template: 'src/template.html',
    }),
  ],
}
```

```
npm i -D html-webpack-plugin
```

### `HTML Template`

Delete dist folder and re launch command :

```
npm run build
```
### `Caching and HASH Setup`

Modify a *webpack.config.js* file :

```js
const path = require('path');

module exports = {
   /*
  */
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
  },
}
```

- and run command :

```
npm run build
```

Generate a `js` hashfile

### **BEFORE**

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

### **AFTER**

```
| dist
|__
|  |_ bundle92d91cd0d304ff853ede.js
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

### `install webpack webpack dev-server`

Create another script in package.json file 

``` json
"dev": "webpack serve"
```

- run command :

```
npm run dev
```
- and install package in validate the answer your terminal with **Yes**

would you like to install 'webpack-dev-server' package? 
(That will run 'npm install -D webpack-dev-server') (Y/n) `Y`

### `Configuration Dev server`
In webpack config file add a configuration of Dev-server 

```js
const path = require('path');

module exports = {
   /*
  */
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
}
```

### `Cleaning Up Hash files`

To avoid generating multiple [hashfiles] add the clean option

```js
module exports = {
  /*
  */
 output: {
    filename: "[name][contenthash].js",
    clean: true, 
  },
  devtool: 'source-map',
}
```

### `Configuration Source map`
- useful for debugging 

source-maps provide a map from your dist production code, 
to your source code to enable source maps 

we go to webpack config  file we'll go right above dev server and add this line

```js
module exports = {
  /*
  */
  devtool: 'source-map',
    devServer: {
      //*
    }
}
```

### `Add and config Babel loader`

- BabelJS 

Is a JavaScript transpiler which transpiles new features into old standard. 
With this, the features can be run on both old and new browsers.

To install babel loader and then also the env preset 

🏃‍♂️ Go to your terminal and enter this command :

```
npm i -D babel-loader @babel/core @babel/preset-env
```

Anything that has a `.js` extension,
but we don't want to mess with anything in node modules.
In the webpack config file add exclude, 
and we add optional loader babel preset-env, if you want to be backwards compatible with older browsers

```js
module.exports = {
  module: {
    /*
    */
    rules: [
      //*
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      }
    ],
  },
}
```