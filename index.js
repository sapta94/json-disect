
    function getKeyString(str){
        try {
        var data = JSON.parse(str);
        } catch (e) {
            return false;
        }
        var responseArray = Object.keys(data)
        return responseArray.join(',')
    }

    function getObjectString(str){
        var responseArray=[]
        try {
        var data = JSON.parse(str);
        } catch (e) {
            return false;
        }
        for(var key in data){
            responseArray.push(data[key])
        }
        return responseArray.join(',')
    }

    function getObjectArray(str){
        var responseArray=[]
        try {
        var data = JSON.parse(str);
        } catch (e) {
            return false;
        }
        for(var key in data){
            responseArray.push(data[key])
        }
        return responseArray
    }

    function sortOnKey(data,searchkey){
        try {
            data.forEach(function(item){
                if(item.searchkey==undefined){
                    item.searchkey = null;
                }
                
            })
        } catch (e) {
            return false;
        }
        var keyArray = Object.keys(data)
        keyArray.sort();
        keyArray.forEach(function(item){
            responseArray.push()
        })
    }
module.exports ={
    getObjectArray,
    getKeyString,
    getObjectString
}

    
