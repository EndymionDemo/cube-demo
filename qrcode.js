var qrcode = require('qrcode-terminal');
var myLocalIP = require('my-local-ip');
var ip = myLocalIP();
qrcode.generate('http://' + ip + ':8080', {small: true})