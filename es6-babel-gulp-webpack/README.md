# es6-babel-webpack


This set up is taken from an article on Medium
https://medium.com/@dzhurovivan/es6-development-environment-made-easy-with-babel-gulp-and-webpack-a4017bd96c30


1)  > npm init -y
2)  create an app folder
app
 - src // where I like to keep all the .js files
 - template // where all the html & css goes
 - assets // where all static files go(sound and images, if any)
3)  create gulpfile.js
4) > npm install gulp --save-dev
5) > npm install webpack --save-dev
6) In root we create the file: webpack.config.js
7) > npm install @babel/core babel-loader @babel/preset-env --save-dev
8) In root we also create the file .babelrc

Although we followed the creation of the gulpfile.js we do not use it to compile ES6 to Common JS.
All we need to do is enter ES6 JS in index.js and then run npm run build.
For a detailed explanation see - https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/
or https://medium.freecodecamp.org/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8
To achieve this we installed rimraf webpack-cli webpack-stream yargs lite-server and updated package.json to add some scripts.

9) >npm install rimraf webpack-cli webpack-stream yargs lite-server --save-dev
10) updated the scripts in package.json note the prebuild build and postbuild scripts are all run for: npm run build
"scripts": {
  "clean": "rimraf ./build && mkdir build",
  "prebuild": "npm run clean",
  "build": "webpack",
  "postbuild": "echo 'Run the code after the build script:' && node ./build/bundle.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
11) Finally we got some security issues so we added in dependencies the following:
"minimatch": ">=3.0.2",
"lodash": ">=4.17.5"


N.B. This is now up on github. If you do need help on git commands look at gitCommands.txt in the root directory
