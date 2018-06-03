/*
 *
 *      RELEVANT FUNCTIONS
 *
*/
var currentMap = {};
def function setCurrentMap(mapID) {
//  This function assigns the current map that is being calculated for, and applies the formation information to the "currentMap" object to use elsewhere.
    var currentMap = mapFormation[mapID];
};






/*
 *      FORMATION CONFIGURATIONS CONTAINED HERE.
 *      SEE BELOW FOR GENERAL FORMATION TEMPLATE.
 *
 *
        "worldsWake":{
        "relativeDist":{
            "slot1":{
                "adjacent":[],
                "allInFront":[],
                "allInBack":[],
                "colInFront":[],
                "colInBack":[],
                "furthest":[],
                "sameCol":[]
                },
            "slot2":{},
            "slot3":{},
            "slot4":{},
            "slot5":{},
            "slot6":{},
            "slot7":{},
            "slot8":{},
            "slot9":{},
            "slot10":{}
        }
        
    }
 *
 *
 *
 *
 *
 *
 *
*/

// World's Wake default configuration

var mapFormation = {
    "worldsWake":{
        "relativeDist":{
            "slot1":{
                "adjacent":[2,5],
                "allInFront":[5,6,7,8,9,10],
                "allInBack":[],
                "colInFront":[5,6,7],
                "colInBack":[],
                "furthest":[4,7,9,10],
                "sameCol":[1,2,3,4]
                },
            "slot2":{
                "adjacent":[1,3,5,6],
                "allInFront":[5,6,7,8,9,10],
                "allInBack":[],
                "colInFront":[5,6,7],
                "colInBack":[],
                "furthest":[10],
                "sameCol":[1,2,3,4]
                },
            "slot3":{
                "adjacent":[2,4,6,7],
                "allInFront":[5,6,7,8,9,10],
                "allInBack":[],
                "colInFront":[5,6,7],
                "colInBack":[],
                "furthest":[10],
                "sameCol":[1,2,3,4]
                },
            "slot4":{
                "adjacent":[3,7],
                "allInFront":[5,6,7,8,9,10],
                "allInBack":[],
                "colInFront":[5,6,7],
                "colInBack":[],
                "furthest":[10],
                "sameCol":[1,2,3,4]
                },
            "slot5":{
                "adjacent":[1,2,6,8],
                "allInFront":[8,9,10],
                "allInBack":[1,2,3,4],
                "colInFront":[8,9],
                "colInBack":[1,2,3,4],
                "furthest":[4],
                "sameCol":[5,6,7]
                },
            "slot6":{
                "adjacent":[2,3,5,7,8,9],
                "allInFront":[8,9,10],
                "allInBack":[1,2,3,4],
                "colInFront":[8,9],
                "colInBack":[1,2,3,4],
                "furthest":[1,4,10],
                "sameCol":[5,6,7]
                },
            "slot7":{
                "adjacent":[3,4,6,9],
                "allInFront":[8,9,10],
                "allInBack":[1,2,3,4],
                "colInFront":[8,9],
                "colInBack":[1,2,3,4],
                "furthest":[1],
                "sameCol":[5,6,7]
                },
            "slot8":{
                "adjacent":[5,6,9,10],
                "allInFront":[10],
                "allInBack":[1,2,3,4,5,6,7],
                "colInFront":[10],
                "colInBack":[5,6,7],
                "furthest":[4],
                "sameCol":[8,9]
                },
            "slot9":{
                "adjacent":[6,7,8,10],
                "allInFront":[10],
                "allInBack":[1,2,3,4,5,6,7],
                "colInFront":[10],
                "colInBack":[5,6,7],
                "furthest":[1],
                "sameCol":[8,9]
                },
            "slot10":{
                "adjacent":[8,9],
                "allInFront":[],
                "allInBack":[1,2,3,4,5,6,7,8,9],
                "colInFront":[],
                "colInBack":[8,9],
                "furthest":[1,2,3,4],
                "sameCol":[10]
            }
        }
        
    }
    
}