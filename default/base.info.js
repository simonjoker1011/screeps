var logging = require('./logging');

var baseName;

function clearDeadCreeps(){
    for(var name in Memory.creeps) {
        
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
}

function harvestersNo(no){
    if (typeof(no) != 'number') {
        logging.log("NaN",true)
        return null;
    }

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');

    if(harvesters.length < no) {
        var newName = Game.spawns[baseName].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
        logging.log('Spawning new harvester: ' + newName,true);
    }

}

var baseInfo = {
    init: function(name) {
        baseName = name
        clearDeadCreeps();
        harvestersNo(3);
        return Game.spawns[baseName];
    }
};

module.exports = baseInfo;