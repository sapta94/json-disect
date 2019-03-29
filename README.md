# json-disect
An npm module to perform all kinds of operations like key extract, value extract,sorting based on keys/values,etc.

## Installations:
npm install json-disect


## Funtions

### getKeyString(str):
Paramter str is a valid JSON string
returns a string with each key in JSON object separated by a comma

### getObjectString(str):
Paramter str is a valid JSON string
returns a string with each value of each key in JSON object separated by a comma

### getObjectArray(str):
Paramter str is a valid JSON string
returns an array with each key in JSON object

## Example

`var jsDisect = require('json-disect')`
var obj={
            name:'sapta',
            age:23,
            email:'dey7.kol@gmail.com'
        }
console.log(jsDisect.getKeyString(JSON.stringify(obj)))
console.log(jsDisect.getObjectString(JSON.stringify(obj)))
console.log(jsDisect.getObjectArray(JSON.stringify(obj)))