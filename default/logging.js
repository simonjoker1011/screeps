
var logging = {
    log: function (input,boolean){
        if (boolean && typeof(boolean) == 'boolean') {
            console.log(input);    
        }else if(typeof(boolean) != 'boolean') {
            console.log("2ed param must be boolean!")
        }        
    }
};

module.exports = logging;