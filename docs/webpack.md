# Webpack

## Table of Contents
0. [Introduction](#introduction)
1. [Why use it](#why-use-webpack)
2. [Getting Started](#getting-started)

## <a name="introduction"></a> Introduction

Webpack, the module bundler.

Today's web has a whole lot more javascript than yesterday's. There's just a whole lot more you can do with today's broswers (as compared to their predecessors). More features, more code, etc etc.

So why use modules? 

It's simple: more code, more problems. 

Modules help you manage that give you the ability to split your code base into smaller pieces. Webpack streamlines this module break down process.

![webpack img](https://webpack.github.io/assets/what-is-webpack.png)

## <a name="why-use-webpack"></a> Why use webpack?

Webpack is a 'batteries included' tool. It was designed with certain goals in mind:

* Easily support big projects
* Keep intial load times low:
	* Splitting the dependency tree into chunks to be loaded on demand
* Customization
	* Easily integrate 3rd party plugins
	* Provide granular control over the module bundler process
* Load static assets as modules
* Integrate 3rd party libraries as modules

Webpack supports these goals via a variety of tools, but by far and away the most powerful is the loader. The loader transforms resources into javascript, where they then become a module. The key word there is _resource_. 

Loaders can turn images, fonts, stylesheets, and more into javascript modules. Which means, dropping in that image you need to use in your app is only one loader and an import statement away. 

It's hard to overstate the importance of loaders. They're truly the backbone of webpack.

## <a name="getting-started"></a> Getting Started

You can provide instructions to webpack's transformation process via config files. By default, it will look for a file by the name of `webpack.config.js`. With that in mind, we're going to put together a very small example:

```
tree example-project

example-project/
├── example.js
├── example.css
├── index.html
└── webpack.config.js
```

In our `index.html`:

```
<html>
<head>
	<meta charset="utf-8">
</head>
<body>
	<script type="text/javascript" src="example.bundle.js"></script>
</body>
</html>
```

In our `example.js`:

```
// example.js
require('./example.css);

document.write('Hello world!');
```

And in our `example.css`:

```
// example.css

body {
	background: #ddd;
}
```

For our uses, we'll be reviewing our [base webpack config](https://github.com/tonybergeron/didactic-disco/blob/master/client/webpack/config.js).


