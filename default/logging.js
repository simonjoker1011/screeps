
var startTimeTick

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
            startTimeTick = null;
            log(input,boolean);
        }else{
            startTimeTick = Game.time
            if((Game.time - startTimeTick)%frequency==0){
                log(input,boolean);
            }
        }
    }
};

module.exports = logging;