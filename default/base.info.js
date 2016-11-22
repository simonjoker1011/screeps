var logging = require('./logging');

var baseName;

function clearDeadCreeps(){
    for(var name in Memory.creeps) {
        
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            logging.log('Clearing non-existing creep memory: '+name,true);
        }
    }
}

function keepCreepsNo(creepType, no){
    if (typeof(no) != 'number') {
        logging.log("NaN",true)
        return null;
    }

    // var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var baseCreeps = _.filter(Game.creeps, (creep) => creep.memory.role == creepType);

    if(baseCreeps.length < no) {
        var newName = Game.spawns[baseName].createCreep([WORK,CARRY,MOVE], undefined, {role: creepType});

        logging.log('Spawning new creep, Name: '+newName+" Type: "+creepType,true);
    }
}

var baseInfo = {
    init: function(name) {
        baseName = name
        clearDeadCreeps();
        
        keepCreepsNo('harvester', 2);
        keepCreepsNo('upgrader', 1);
        keepCreepsNo('builder', 1);

        return Game.spawns[baseName];
    }
};

module.exports = baseInfo;