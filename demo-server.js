var checkerboard = require('checkerboard');
var checkerboardServer = new checkerboard.Server(9998);

var nodeStatic = require('node-static');
var nodeStaticServer = new nodeStatic.Server('./');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
          nodeStaticServer.serve(request, response);
    }).resume();
}).listen(9999);