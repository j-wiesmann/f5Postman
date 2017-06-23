#!/usr/bin/node

var newman = require('newman'); // require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./BIG-IQ CM.postman_collection.json'),
    reporters: 'cli',
    environment: 'BIG-IQ CM.postman_environment.json',
    folder: 'BIG-IQ Device - Discover Device',
    iterationCount: '3',
    iterationData: 'BIG-IQ CM.postman_Device-Discover_data.json',
    insecure: true
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
