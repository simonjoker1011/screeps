var logging = require('./logging');

var roomSource = [];

var roomInfo = {
    fetchInfo: function(room) {                
        roomSource = room.find(FIND_SOURCES); 
        return roomSource;       
        logging.log(roomSource,false);
    }
};

module.exports = roomInfo;