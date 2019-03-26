module.exports = function(){

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
        data.foreach(function(item){
            responseArray.push(item)
        })
        return responseArray.join(',')
    }

    function getObjectArray(str){
        var responseArray=[]
        try {
        var data = JSON.parse(str);
        } catch (e) {
            return false;
        }
        data.foreach(function(item){
            responseArray.push(item)
        })
        return responseArray
    }
    
}