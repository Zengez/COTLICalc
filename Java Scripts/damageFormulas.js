// This file contains damage calculation functions and variables
//
// First we initialize the variables.
//


/*
 *
 *      DPS VARIABLES
 *
*/

// Object that holds Damage Multiplier in each individual slots. We assume a maximum of 15 slots in a formation.
dmgMultipliersBySlot = {
    "slot1":{
        "local":1,// DPS multiplier that only applies to this slot.
        "crusaderPresent":{"1":1},// Vector of multipliers that only apply if the crusaderID is in the formation, "crusaderID":"multiplier"
        "perEmptySlot":1,// multiplier to this slot for every empty slot in the formation.
        "perTag":{// These multipliers are granted to this slot for each crusader with the corresponding tag in the formation.
            "male":1,
            "female":1,
            "human":1,
            "animal":1,
            "supernatural":1,
            "royalty":1,
            "magic":1,
            "event":1,
            "robot":1,
            "orc":1,
            "elf":1,
            "demon":1,
            "leprechaun":1,
            "angel":1,
            "tank":1,
            "dps":1,
            "support":1,
            "healer":1,
            "clicker":1,
            "gold":1,
            "dwarf":1,
            "dragon":1,
            "alien":1
            },
        "ifTag":{// These multipliers are granted to this slot if the crusader in the slot matches the tag.
            "male":1,
            "female":1,
            "human":1,
            "animal":1,
            "supernatural":1,
            "royalty":1,
            "magic":1,
            "event":1,
            "robot":1,
            "orc":1,
            "elf":1,
            "demon":1,
            "leprechaun":1,
            "angel":1,
            "tank":1,
            "dps":1,
            "support":1,
            "healer":1,
            "clicker":1,
            "gold":1,
            "dwarf":1,
            "dragon":1,
            "alien":1
            }
    },
    "slot2":{
        "global":1,
        "tag":{"male":1,"female":1,"human":1,"animal":1,"supernatural":1,"royalty":1,"magic":1,"event":1,"robot":1,"orc":1,
"elf":1,"demon":1,"leprechaun":1,"angel":1,"tank":1,"dps":1,"support":1,"healer":1,"clicker":1,"gold":1,"dwarf":1,"dragon":1,"alien":1}
    },
    "slot3":{
        "global":1,
        "tag":{"male":1,"female":1,"human":1,"animal":1,"supernatural":1,"royalty":1,"magic":1,"event":1,"robot":1,"orc":1,
"elf":1,"demon":1,"leprechaun":1,"angel":1,"tank":1,"dps":1,"support":1,"healer":1,"clicker":1,"gold":1,"dwarf":1,"dragon":1,"alien":1}        
    },
    "slot4":{
        "global":1,
        "tag":{"male":1,"female":1,"human":1,"animal":1,"supernatural":1,"royalty":1,"magic":1,"event":1,"robot":1,"orc":1,
"elf":1,"demon":1,"leprechaun":1,"angel":1,"tank":1,"dps":1,"support":1,"healer":1,"clicker":1,"gold":1,"dwarf":1,"dragon":1,"alien":1}        
    },
    "slot5":{
        "global":1,
        "tag":{"male":1,"female":1,"human":1,"animal":1,"supernatural":1,"royalty":1,"magic":1,"event":1,"robot":1,"orc":1,
"elf":1,"demon":1,"leprechaun":1,"angel":1,"tank":1,"dps":1,"support":1,"healer":1,"clicker":1,"gold":1,"dwarf":1,"dragon":1,"alien":1}        
    },
    "slot6":{
        "global":1,
        "tag":{"male":1,"female":1,"human":1,"animal":1,"supernatural":1,"royalty":1,"magic":1,"event":1,"robot":1,"orc":1,
"elf":1,"demon":1,"leprechaun":1,"angel":1,"tank":1,"dps":1,"support":1,"healer":1,"clicker":1,"gold":1,"dwarf":1,"dragon":1,"alien":1}        
    },
    "slot7":{
        "global":1,
        "tag":{"male":1,"female":1,"human":1,"animal":1,"supernatural":1,"royalty":1,"magic":1,"event":1,"robot":1,"orc":1,
"elf":1,"demon":1,"leprechaun":1,"angel":1,"tank":1,"dps":1,"support":1,"healer":1,"clicker":1,"gold":1,"dwarf":1,"dragon":1,"alien":1}        
    },
    "slot8":{
        "global":1,
        "tag":{"male":1,"female":1,"human":1,"animal":1,"supernatural":1,"royalty":1,"magic":1,"event":1,"robot":1,"orc":1,
"elf":1,"demon":1,"leprechaun":1,"angel":1,"tank":1,"dps":1,"support":1,"healer":1,"clicker":1,"gold":1,"dwarf":1,"dragon":1,"alien":1}        
    },
    "slot9":{
        "global":1,
        "tag":{"male":1,"female":1,"human":1,"animal":1,"supernatural":1,"royalty":1,"magic":1,"event":1,"robot":1,"orc":1,
"elf":1,"demon":1,"leprechaun":1,"angel":1,"tank":1,"dps":1,"support":1,"healer":1,"clicker":1,"gold":1,"dwarf":1,"dragon":1,"alien":1}        
    },
    "slot10":{
        "global":1,
        "tag":{"male":1,"female":1,"human":1,"animal":1,"supernatural":1,"royalty":1,"magic":1,"event":1,"robot":1,"orc":1,
"elf":1,"demon":1,"leprechaun":1,"angel":1,"tank":1,"dps":1,"support":1,"healer":1,"clicker":1,"gold":1,"dwarf":1,"dragon":1,"alien":1}        
    },
    "slot11":{
        "global":1,
        "tag":{"male":1,"female":1,"human":1,"animal":1,"supernatural":1,"royalty":1,"magic":1,"event":1,"robot":1,"orc":1,
"elf":1,"demon":1,"leprechaun":1,"angel":1,"tank":1,"dps":1,"support":1,"healer":1,"clicker":1,"gold":1,"dwarf":1,"dragon":1,"alien":1}        
    },
    "slot12":{
        "global":1,
        "tag":{"male":1,"female":1,"human":1,"animal":1,"supernatural":1,"royalty":1,"magic":1,"event":1,"robot":1,"orc":1,
"elf":1,"demon":1,"leprechaun":1,"angel":1,"tank":1,"dps":1,"support":1,"healer":1,"clicker":1,"gold":1,"dwarf":1,"dragon":1,"alien":1}        
    },
    "slot13":{
        "global":1,
        "tag":{"male":1,"female":1,"human":1,"animal":1,"supernatural":1,"royalty":1,"magic":1,"event":1,"robot":1,"orc":1,
"elf":1,"demon":1,"leprechaun":1,"angel":1,"tank":1,"dps":1,"support":1,"healer":1,"clicker":1,"gold":1,"dwarf":1,"dragon":1,"alien":1}        
    },
    "slot14":{
        "global":1,
        "tag":{"male":1,"female":1,"human":1,"animal":1,"supernatural":1,"royalty":1,"magic":1,"event":1,"robot":1,"orc":1,
"elf":1,"demon":1,"leprechaun":1,"angel":1,"tank":1,"dps":1,"support":1,"healer":1,"clicker":1,"gold":1,"dwarf":1,"dragon":1,"alien":1}        
    },
    "slot15":{
        "global":1,
        "tag":{"male":1,"female":1,"human":1,"animal":1,"supernatural":1,"royalty":1,"magic":1,"event":1,"robot":1,"orc":1,
"elf":1,"demon":1,"leprechaun":1,"angel":1,"tank":1,"dps":1,"support":1,"healer":1,"clicker":1,"gold":1,"dwarf":1,"dragon":1,"alien":1}        
    }
};

// Object that contains global dps multipliers
globalDmgMultipliers = {
    "crusaderBuffs":1,
    "achievements":1,
    "trinkets":1,
    "cardBuff":1,
    "missionBuff":1,
    "miscBuff":1,
    "tag":{"male":1,"female":1,"human":1,"animal":1,"supernatural":1,"royalty":1,"magic":1,"event":1,"robot":1,"orc":1,
"elf":1,"demon":1,"leprechaun":1,"angel":1,"tank":1,"dps":1,"support":1,"healer":1,"clicker":1,"gold":1,"dwarf":1,"dragon":1,"alien":1}
};


/*
 *
 *      CLICKER VARIABLES
 *
*/

globalClickerMultipliers = {
    "crusaderBuffs":1,
    "achievements":1,
    "trinkets":1,
    "cardBuff":1,
    "missionBuff":1,
    "miscBuff":1,
    "tag":{"male":1,"female":1,"human":1,"animal":1,"supernatural":1,"royalty":1,"magic":1,"event":1,"robot":1,"orc":1,
"elf":1,"demon":1,"leprechaun":1,"angel":1,"tank":1,"dps":1,"support":1,"healer":1,"clicker":1,"gold":1,"dwarf":1,"dragon":1,"alien":1}
};

percentageDPSBySlot = {
    "slot1":0,"slot2":0,"slot3":0,"slot4":0,"slot5":0,"slot6":0,"slot7":0,"slot8":0,
    "slot9":0,"slot10":0,"slot11":0,"slot12":0,"slot13":0,"slot14":0,"slot15":0
};




/*
 *
 *      GOLD VARIABLES
 *
*/

// Object holding global gold multipliers
globalGoldMultipliers = {
    "crusaderBuffs":1,
    "achievements":1,
    "trinkets":1,
    "cardBuff":1,
    "missionBuff":1,
    "miscBuff":1,
    "tag":{"male":1,"female":1,"human":1,"animal":1,"supernatural":1,"royalty":1,"magic":1,"event":1,"robot":1,"orc":1,
"elf":1,"demon":1,"leprechaun":1,"angel":1,"tank":1,"dps":1,"support":1,"healer":1,"clicker":1,"gold":1,"dwarf":1,"dragon":1,"alien":1}
};


/*
 *
 *      MASTER MULTIPLIER OBJECT
 *
*/

// This object is the master object to hold all the multipliers of the above objects.
// Structured this way for readability by object role, rather than just having a giant block of code to
// define the object and then have to search through it to remember structure when returning to this code
// after long breaks.

multipliers.dps.global = globalDmgMultipliers;
multipliers.dps.positional = dmgMultipliersBySlot;
multipliers.clicker.global = globalClickerMultipliers;
multipliers.clicker.conversion = percentageDPSBySlot;
multipliers.gold.global = globalGoldMultipliers;




// This first function should be the generic application function.
// The other functions should call this one after determining the correct base value, multiple, and type.
function multiplierPerMultiple(multiplier,path,originSlot,effectedSlot,subPath) {
/*
 * multiplier is the value of the multiplier.
 * path is the path to place the multiplier in the object; eg "dps.positional", "gold.global", etc.
 * subPath is for slot-specific content and contains the path after slot is declared; eg "perTag.human"
 * originSlot is used for buff type tracking
 * effectedSlot is the slots effected by the effect. This should be a vector of slot IDs, supplied by map type.
 */

 
// First check to see if this is global, so we can avoid slot effects.
if (path.includes("global")) {
    var fullPath = "multipliers." + path;
    fullPath
}

    
}

var curSlot = "";// holds path to the slot being tracked/manipulated in loops below.
function multiplierAdjacent(slot,value,type) {
    // This function takes a formation slot and a value and applies a multiplier of the given value to all adjacent slots (but not the given slot)
    var adjPath = "currentMap.relativeDist.slot".concat(slot).toString();
    var numAdj = this[adjPath].adjacent.length;
    var i = 0;//                            iteration variable
    for(i=0; i < numAdj; i++) {//           iterate through all the adjacent slots and multiply current global dps multiplier by the given value.
        if ( type == "dmg" ) {//            This should be the only "type" given unless/until they change something.
            curSlot = "dmgMultipliersBySlot.slot".concat(this[adjPath].adjacent[i]).toString();// save path to slot multiplier.
        }
        this[curSlot].global = this[curSlot].global * value;// multiply the global dps multiplier of that slot by the new multiplier.
    }
}

function multiplierColumn(slot,value,type) {
    // This function takes a formation slot and a value and applies a multiplier of the given value to all slots in the given slot's column.
    
}

function multiplierFurthest(slot,value,type) {
    // This function takes a formation slot and a value and applies a multiplier of the given value to any slot labled "furthest" from the given slot.
    
}

function multiplierSlot(slot,value,type) {
    // This function takes a formation slot and a value and applies a multiplier of the given value to that formation slot only.
    
}

function multiplierTag(tag,value,type) {
    // This function takes a tag and a value and applies a multiplier of the given value to that tag.
    
}

function multiplierGlobal(value,type) {
    // This function takes a value and applies a multiplier of the given value globally.
    
}

function multiplierPerTag(value,tag,type) {
    // This function applies a multiplier of the given value per tag in current formation.
    
}

function multiplierPerCrusaderInColumn(value,slot,type) {
    // This function applies a multiplier of the given value per crusader in the column of the given formation slot.
    
}

function multiplierPerAdjacentCrusader(value,slot,type) {
    // This function applies a global multiplier of the given value per crusader adjacent to the given formation slot.
    
}



