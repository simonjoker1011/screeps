var roleHarvester = require('./role.harvester');
var roleUpgrader = require('./role.upgrader');
var roleBuilder = require('./role.builder');

console.log("first")


module.exports.loop = function () {
    console.log(Game.time);
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
    var base = Game.spawns.Spawn1
    var isBaseFull
    if(base.energy >= base.energyCapacity){
        isBaseFull = true
    }

    for(var name in Game.creeps) {
        // Game.creeps[name].say(Game.creeps[name].memory.role)
        // if(isBaseFull){
        //     Game.creeps[name].say('Base is full')    
        // }else{
        //     Game.creeps[name].say(name+': '+Game.creeps[name].memory.role)    
        // }
        
        Game.creeps[name].say(Game.creeps[name].memory.role)    
        
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