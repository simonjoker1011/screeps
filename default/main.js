var logging = require('./logging');

var roleHarvester = require('./role.harvester');
var roleUpgrader = require('./role.upgrader');
var roleBuilder = require('./role.builder');
var roomInfo = require('./room.info');
var baseInfo = require('./base.info');

module.exports.loop = function () {
    logging.log(Game.time,true,10);
    // var tower = Game.getObjectById('b431b9002e0e599b8e1af8e3');
    // if(tower) {
    //     var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
    //         filter: (structure) => structure.hits < structure.hitsMax
    //     });
    //     if(closestDamagedStructure) {
    //         tower.repair(closestDamagedStructure);
    //     }

    //     var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    //     if(closestHostile) {
    //         tower.attack(closestHostile);
    //     }
    // }
    var base = baseInfo.init("SimBase");
    var room = base.room

    //  Get room info
    var ri = roomInfo.fetchInfo(room);
    logging.log(ri,false);

    for(var name in Game.creeps) {        
        
        // Game.creeps[name].say(Game.creeps[name].memory.role)    
        
        var creep = Game.creeps[name];

        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}