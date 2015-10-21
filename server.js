var connect = require('/usr/local/bin/node_modules/connect');
var serveStatic = require('/usr/local/bin/node_modules/serve-static');

var app = connect();
app.use(serveStatic('../firstAngularApp', {default: "app.html"}));
app.listen(5000);