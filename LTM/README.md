# LTM-Policy -- Pool per Domain Name

This is an example, how a LTM-Policy can be created and configured over iControl REST API. The idea behind this example is, to create a virtual server and assign a new created policy to it. Over the policy we will assign per hostname a dedicated pool to enable multihosting.

This is a Postman collection for the BIG-IP, tested on v12.1.1. It should also work on v13. This Collection is optimized to be used over Runner.

Right now, the following folders are included:
* Create Basic Configuration: Here we create the policy and the virtual we use for the demo. Since it is not allowed to assign an empty policy to a virtual, we also create an initial pool for an initial domain name.
* Add Domain Names: Run this to create new pools per Domain Name and assign them to the created policy. This part can be rerun to add further Domain Names later.
* Get Results: This Part is only included for troubleshooting and is not optimized for Runner.

## collection.json

In the LTM-Policy_Pool_per_Domain_Name.postman_collection.json file all the requests are stored in. This file need to be imported into Postman.

## environment.json

All needed environmental settings are stored in LTM-Policy_Pool_per_Domain_Name.postman_environment.json. This file can be imported over the Environment Manager of Postman. Please adapt the variables to your needs.
