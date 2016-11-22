var logging = require('./logging');

var roomSource = [];

var roomInfo = {
    fetchInfo: function(room) {                
        roomSource = room.find(FIND_SOURCES);        
        logging.log(roomSource,false);
    }
};

module.exports = roomInfo;