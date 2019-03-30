
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

    function sortOnKey(data,searchkey,type=0){
        
        try {
            var n = data.length;
            data.forEach(function(item,count){
                if(item[searchkey]==undefined){
                    item[searchkey] = null;
                }
                for(j=0;j<n-count-1;j++){
                    if (data[j][searchkey] > data[j+1][searchkey]){
                        temp = data[j]
                        data[j]=data[j+1]
                        data[j+1]=temp
                    }
                }
                
            })
            if(type==-1)
                return data.reverse()
            else
                return data
        } catch (e) {
            console.log(e)
            return false;
        }
        
    }

    
module.exports ={
    getObjectArray,
    getKeyString,
    getObjectString
}

    
