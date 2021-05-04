# Apps API

Apps API is an app with a single endpoint “/apps” that returns an array of apps paginated following the next specifications and requirements. 

## Requirements
• The key "by" is required and the only values permitted are "id" and "name". 
• Both "start" and "end" identifiers can be omitted, in which case the start identifier is assumed to be the first in the data set. 
• Even if the "start" identifier is included, the "end" identifier can be omitted, in which case the program queries with no ending bound, but will still return results that account for "max" page size. 
• The "max" page size can be omitted, in which case the default of 50 is assumed. 
• For cases where the "end" identifier extends beyond what can fit inside the maximum page, the page size takes precedence. 
• The behavior in other corner cases can be safely assumed to be undefined.

## Solution
Node.js, Express.js to do the server settings. Some of the reasons why you can choose this technologies to a project like this or others:  
Efficient performance.
Easier development process.
Reusable code.
Ability to handle multiple requests.
Ability to scale smoothly.
Prompt code execution.
Asynchronous and event-driven.
 
## Vanilla JavaScript

The Vanilla JavaScript methods and functions, to iterate through the array and process the responses, have been used according to the requirement presented in the challenge description. However, it is valid to clarify that there are more efficient solutions that allow you to work with larger amounts of data, such as the use of MongoDB together with NodeJs.

![Api](https://github.com/andreiAlvarez/apps-api/blob/main/images/ApiAppsOne.png?raw=true)

## Test

To test the app we have used Postman. 
The automatic tests can be accessed here. [TestPostman] (https://documenter.getpostman.com/view/12403463/TzRNE9oM)

Step 1: Click the run button. ![Api](https://github.com/andreiAlvarez/apps-api/blob/main/images/ApiAppsTwo.png?raw=true)

Step 2: Click the Run AppsAPI button. ![Api](https://github.com/andreiAlvarez/apps-api/blob/main/images/ApiAppsThree.png?raw=true)
Results: ![Result](https://github.com/andreiAlvarez/apps-api/blob/main/images/ApiAppsFour.png?raw=true)
