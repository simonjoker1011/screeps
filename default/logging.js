


function log(input,boolean) {
        if (boolean && typeof(boolean) == 'boolean') {
            console.log(input);    
        }else if(typeof(boolean) != 'boolean') {
            console.log("2ed param must be boolean!")
        }        
}

var logging = {
    log: function (input,boolean,frequency){

        if (frequency == null) {            
            log(input,boolean);
        }else if(Game.time%frequency==0){
            log(input,boolean);            
        }        
    }
};

module.exports = logging;