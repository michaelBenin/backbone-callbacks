## Anonymous callback interface for Backbone.js async methods

[Backbone.js](http://documentcloud.github.com/backbone>Backbone.js) exposes a ```success/error``` style callback interface to the asynchronous methods ```fetch```, ```save```, and ```destroy```.  Example:

    myModel.fetch({success: function(model, response) {
        ...
      },
      error: function(model, response) {
        ...
      }
    });

If you're using Node.js and use your Backbone models on the client as well as the server,
you may want to interact with your models in more of a Node.js async callback style:

    myModel.fetch(function(error, response) {
     ...
    });

This library adds the Node.js style callback interface to the Backbone asynchronous methods, allowing you to choose the style you prefer.

If the call includes a function (callback) as the last argument, it uses that style.  Otherwise it uses the default Backbone success/error style.

To use this libary:

1) Download from github, or ```npm install backbone-callbacks```

2) Attach the interfaces to Backbone in your initialization script:

    // In a browser...
    BackboneCallbacks.attach(Backbone);

    // In node.js...
    var Backbone = require('backbone');
    require('backbone-callbacks').attach(Backbone);

This small library (under 1k) adds to the existing interface, allowing either style to be used.  If a callback function is provided as the last argument, it will use the simpler style.  Otherwise it will use the original ```success/error``` style.
