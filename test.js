"use strict";


var eco = require('./lib/eco.js');

function discoverCrap() {
    console.log("Gonna discover crap");
    eco.discovery(this, function(err, devices) {
        console.log(err);

        for (var i in devices) {
            console.log("Adding:", devices[i].id, devices[i].name, devices[i].host);
        }

    });
}

eco.startUdpServer(this, function(message) {
    console.log(message); 
});

discoverCrap();