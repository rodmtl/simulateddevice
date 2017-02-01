'use strict';
var Client = require('azure-iothub').Client;
var connectionString = 'HostName=Rod-IoT-Hub.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=X/vHego6RhnK07HoExnAom7WmCPj/tcaFP4UyKyaeUI=';
var methodName = 'writeLine';
var deviceId = 'myDeviceId';
var client = Client.fromConnectionString(connectionString);
var methodParams = {
    methodName: methodName,
    payload: 'a line to be written',
    timeoutInSeconds: 30
};

client.invokeDeviceMethod(deviceId, methodParams, function(err, result) {
    if (err) {
        console.error('Failed to invoke method \'' + methodName + '\': ' + err.message);
    } else {
        console.log(methodName + ' on ' + deviceId + ':');
        console.log(JSON.stringify(result, null, 2));
    }
});