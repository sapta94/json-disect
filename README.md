# json-disect
An npm module to perform all kinds of operations like key extract, value extract,sorting based on keys/values,etc.

## Installations:
npm install json-disect


## Funtions

### getKeyString(str):
Paramter str is a valid JSON string <br>
returns a string with each key in JSON object separated by a comma

### getObjectString(str):
Paramter str is a valid JSON string <br>
returns a string with each value of each key in JSON object separated by a comma

### getObjectArray(str):
Paramter str is a valid JSON string <br>
returns an array with each key in JSON object

### sortOnKey(data,key,type):
Paramter data is a valid JSON array <br>
Paramter key is the key-name for based on which the elements of the data array is sorted <br>
Parameter type = 0 for sorting in ascending order and type=1 for descending order <br>
returns a sorted (ascending/descending) based on the above parameters

## Example

`var jsDisect = require('json-disect')` <br>
`var obj={
            name:'sapta',
            age:23,
            email:'dey7.kol@gmail.com'
        }`
`console.log(jsDisect.getKeyString(JSON.stringify(obj)))`
`console.log(jsDisect.getObjectString(JSON.stringify(obj)))`
`console.log(jsDisect.getObjectArray(JSON.stringify(obj)))`
`console.log(jsDisect.sortOnKey(obj,'age'))`
