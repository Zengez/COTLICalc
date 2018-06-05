/*
 *
 * This file contains functions and variables to calculate formation ability and gear effects.
 *
*/

// This variable holds all current formation abilities. These rarely change, so it is easier to mass calculate them once and leave them in
//      local Cache for the user.
// The strategy is to have each hero, by ID, have a subObject associated to that hero ID that has all the global dps and gold multipliers
//      from that hero. This vector should be pregenerated assuming all formation abilities unlocked and current gear sets.
//      Since gear largely impact the effectiveness of formation abilities.

// First define a function to mass populate the bulk object. Then use an update function that populates it with the correct actual data.
var CruNumber = 110// max number of crusaders.
function baseFormationAbilityObject = {
var i;// iterate variable
for(i=0; i < CruNumber; i++){
    var crName = gameTables.heroTable[i].name;
    currentFormationAbilities.push({
    "name":crName,// included for code readability.
    "selfDps":1,
    "globaldps":1,
    "globalGold":1,
    "tagEffects":{// These are all multiplicative values, so use unit identity as reset. Vectors instead of obj would work, but using obj to make code more readable.
        "male":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "female":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "human":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "animal":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "supernatural":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "royalty":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "magic":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "event":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "robot":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "orc":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "elf":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "demon":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "leprechaun":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "angel":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "tank":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "dps":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "support":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "healer":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "clicker":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "gold":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "dwarf":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "dragon":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1},
        "alien":{"dpsPerTag":1,"dpsToTag":1,"goldPerTag":1}
        },
    "relativeDistEffects":{// Positional Effects
        "perAdjacent":{
            "dpsGlobal":1,
            "dpsSelf":1,
            "dpsDrain":0,// This is a percent of dps that is removed from adj crusaders and added to primary crusader.
            "dpsSelfPercent":0,// This is a percent of dps from any adj crusader that is added to primary crusader.
            "gold":1,
            "clickPercent":0,// This is a percent of dps from any adj crusader that is added to click damage.
            "clickDmg":1// Click damage multiplier per adj.
            },
        "toAdjacent":{
            "dps":1,
            "dpsPercent":0,// This is a percent of dps from any adj crusader that is added to primary crusader.
            },
        "column":{
            "dps":1,
            },
        "perCrusaderInCol":{
            "dpsGlobal":1,
            "dpsSelf":1,
            "gold":1,
            "clickDmg":1// Click damage multiplier.
        }
    },
    "specialEffects":{// This is for other effects outside of the above. Definitions in here must be carefully defined to use.
        }
    });


}

    
}

var currentFormationAbilities = [
/*
   formation template:
*/
{"name":"Empty-Crusader"},// Empty one placed so that the heroID number coincides with the vector location, since vectors start at 0.
];

// Gear modifier calculating function by type.
function gearMult(type,rarity,golden) {
    if (type == 1) {
        if (rarity == 1) {
            return 1;
            }
        else if (rarity == 2) {
            return 2;
            }
        else if (rarity == 3) {
            return 3;
            }
        else if (rarity == 4) {
            return 4*(1 + 0.5*golden);
            }
        else {
            return 8*(1 + 0.5*golden);
            }
        }
    else if (type == 5) {
        if (rarity == 1) {
            return 5;
            }
        else if (rarity == 2) {
            return 10;
            }
        else if (rarity == 3) {
            return 15;
            }
        else if (rarity == 4) {
            return 40*(1 + 0.5*golden);
            }
        else {
            return 80*(1 + 0.5*golden);
            }
        }
    else if (type == 10) {
        if (rarity == 1) {
            return 10;
            }
        else if (rarity == 2) {
            return 25;
            }
        else if (rarity == 3) {
            return 50;
            }
        else if (rarity == 4) {
            return 100*(1 + 0.5*golden);
            }
        else {
            return 200*(1 + 0.5*golden);
            }
        }
    else if (type == 25) {
        if (rarity == 1) {
            return 25;
            }
        else if (rarity == 2) {
            return 50;
            }
        else if (rarity == 3) {
            return 100;
            }
        else if (rarity == 4) {
            return 400*(1 + 0.5*golden);
            }
        else {
            return 800*(1 + 0.5*golden);
            }
        }
}



// This function will remove the formation abilities from the active list of the removed crusader, and add the formation abilities of new crusader.
function replaceActiveCrusaderAbilities(removedCrusaderID,newCrusaderID) {
    
    
    
    
}