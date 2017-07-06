# BIG-IQ CM

This is a Postman collection for the BIG-IQ CM, tested on v5.2. This Collection is optimized to be used over Runner. This can be done over the Environmental Variables or over a Data File to enable several iterations to repeat the same task with different dataset.

Right now, the following tasks are included:
* Device: Discover and rediscover BIG-IPs with different modules.
* ADC: Deploy a virtual with monitor, pool and poolMember.
* ADC: Change poolMember status.

## collection.json

In the BIG-IQ CM.postman_collection.json file all the requests are stored in. This file need to be imported into Postman. You will find further instructions in the Collection, if you open it in Postman.

## environment.json

All needed environmental settings are stored in BIG-IQ CM.postman_environment.json. This file can be imported over the Environment Manager of Postman. Please adapt the variables to your needs.

## data.json

If you would like to use runner on different folders inside of a Collection, you can also use the data files as source for the setting. In this case the selected Environmental Settings are used as default setting and can be overwritten over the settings in the data file. Please have a look at the *_data.json files as an example.

## newman.js

runner is useful to do some automated tests, but it doesn't help to include the collection into an orchestration. If you would like to orchestrate a collection or prefer to use the console, you can use newman. This is a node.js script as an example, how to run newman in node.js.
