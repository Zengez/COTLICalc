// This file contains damage calculation functions and variables
//
// First we initialize the variables.
//


/*
 *
 *      DPS VARIABLES
 *
*/

// Record Damage in each individual slots.
var dmgMultipliersBySlot = {
    "slot1":{
        "global":1,
        "tag":{
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

// Record global dps multipliers
var globalDmgMultipliers = {
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

var globalClickerMultipliers = {
    "crusaderBuffs":1,
    "achievements":1,
    "trinkets":1,
    "cardBuff":1,
    "missionBuff":1,
    "miscBuff":1,
    "tag":{"male":1,"female":1,"human":1,"animal":1,"supernatural":1,"royalty":1,"magic":1,"event":1,"robot":1,"orc":1,
"elf":1,"demon":1,"leprechaun":1,"angel":1,"tank":1,"dps":1,"support":1,"healer":1,"clicker":1,"gold":1,"dwarf":1,"dragon":1,"alien":1}
};

var percentageDPSBySlot = {
    "slot1":0,"slot2":0,"slot3":0,"slot4":0,"slot5":0,"slot6":0,"slot7":0,"slot8":0,
    "slot9":0,"slot10":0,"slot11":0,"slot12":0,"slot13":0,"slot14":0,"slot15":0
}




/*
 *
 *      GOLD VARIABLES
 *
*/

// Record global gold multipliers
var globalGoldMultipliers = {
    "crusaderBuffs":1,
    "achievements":1,
    "trinkets":1,
    "cardBuff":1,
    "missionBuff":1,
    "miscBuff":1,
    "tag":{"male":1,"female":1,"human":1,"animal":1,"supernatural":1,"royalty":1,"magic":1,"event":1,"robot":1,"orc":1,
"elf":1,"demon":1,"leprechaun":1,"angel":1,"tank":1,"dps":1,"support":1,"healer":1,"clicker":1,"gold":1,"dwarf":1,"dragon":1,"alien":1}
};





// This first function should be the generic calculator. The rest should call this one after determining the correct multiple as needed.
def function multiplierPerMultiple(value,multiple,type) {
    // This function applies a global multiplier of the given value times the given multiplier.
    
}

var curSlot = "";// holds path to the slot being tracked/manipulated in loops below.
def function multiplierAdjacent(slot,value,type) {
    // This function takes a formation slot and a value and applies a multiplier of the given value to all adjacent slots (but not the given slot)
    var adjPath = "currentMap.relativeDist.slot".concat(slot).toString();
    var numAdj = this[adjPath].adjacent.length;
    var i = 0;// iteration variable
    for(i=0; i < numAdj; i++) {// iterate through all the adjacent slots and multiply current global dps multiplier by the given value.
        if ( type == "dmg" ) {// This should be the only "type" given unless/until they change something.
            curSlot = "dmgMultipliersBySlot.slot".concat(this[adjPath].adjacent[i]).toString();// save path to slot multiplier.
        }
        this[curSlot].global = this[curSlot].global * value;// multiply the global dps multiplier of that slot by the new multiplier.
    }
}

def function multiplierColumn(slot,value,type) {
    // This function takes a formation slot and a value and applies a multiplier of the given value to all slots in the given slot's column.
    
}

def function multiplierFurthest(slot,value,type) {
    // This function takes a formation slot and a value and applies a multiplier of the given value to any slot labled "furthest" from the given slot.
    
}

def function multiplierSlot(slot,value,type) {
    // This function takes a formation slot and a value and applies a multiplier of the given value to that formation slot only.
    
}

def function multiplierTag(tag,value,type) {
    // This function takes a tag and a value and applies a multiplier of the given value to that tag.
    
}

def function multiplierGlobal(value,type) {
    // This function takes a value and applies a multiplier of the given value globally.
    
}

def function multiplierPerTag(value,tag,type) {
    // This function applies a multiplier of the given value per tag in current formation.
    
}

def function multiplierPerCrusaderInColumn(value,slot,type) {
    // This function applies a multiplier of the given value per crusader in the column of the given formation slot.
    
}

def function multiplierPerAdjacentCrusader(value,slot,type) {
    // This function applies a global multiplier of the given value per crusader adjacent to the given formation slot.
    
}



