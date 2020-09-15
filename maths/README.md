# The esm module
This project uses the esm module 
https://github.com/standard-things/esm

You can use ECMA Script Modules (import / expert etc) instead of Common js mdoules in node.
The to run under node you just need a index.js file to import the top (e.g. main.js) entry file.
The index.js is only this:
``` 
    // Set options as a parameter, environment variable, or rc file.
```

``` 
    require = require("esm")(module/*, options*/)
    module.exports = require("./main.js")
```



You can also use: 
``` 
    node -r esm 
```
to run any ES Module.

See also https://medium.com/web-on-the-edge/tomorrows-es-modules-today-c53d29ac448c
and https://codewithhugo.com/use-es-modules-in-node-without-babel/webpack-using-esm/

Easy to use.
