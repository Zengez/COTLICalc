    var benchTMP = "";
    var benchTMPTwo = "";
    var benchList = "";
//    var cruName = JSON.parse(localStorage.cruName);
    function populateBench () {
            cruName = [
       // Slot 1:
        [
            {"name":"Bush Whacker","ID":1, "Unlocked":"Base Crusader"},
            {"name":"RoboRabbit","ID":38, "Unlocked":"March"},
            {"name":"Graham The Driver","ID":66, "Unlocked":"Charity Auction"},
            {"name":"Warwick the Warlock","ID":75, "Unlocked":"February"},
            {"name":"Slisiblyp, the Alien Scientist","ID":89, "Unlocked":"July"}
        ],
       // Slot 2:
        [
            {"name":"Jim the Lumberjack","ID":2, "Unlocked":"Base Crusader"},
            {"name":"Pilot Pam","ID":29, "Unlocked":"January"},
            {"name":"Veronica, the Android Archer","ID":51, "Unlocked":"August"},
            {"name":"Arachnobuddy","ID":79, "Unlocked":"March"},
            {"name":"James The Seated","ID":102, "Unlocked":"Charity Auction"}
        ],
        [    // Slot 3:
            {"name":"Emo Werewolf","ID":3, "Unlocked":"Base Crusader"},
            {"name":"Sally the Succubus","ID":34, "Unlocked":"February"},
            {"name":"Karen, the Cat Teenager","ID":53, "Unlocked":"September"},
            {"name":"Turps the Tasty","ID":85, "Unlocked":"June"},
            {"name":"RoboQueen","ID":92, "Unlocked":"July"}
        ],
        [    // Slot 4:
            {"name":"Sasha The Fierce Warrior","ID":4, "Unlocked":"Base Crusader"},
            {"name":"Groklok the Orc","ID":31, "Unlocked":"January/February"},
            {"name":"Mindy the Mime","ID":62, "Unlocked":"September/October"},
            {"name":"Danni the Daring Damsel","ID":87, "Unlocked":"May"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"}
        ],
        [    // Slot 5:
            {"name":"The Washed Up Hermit","ID":5, "Unlocked":"Base Crusader"},
            {"name":"Kyle the Party Bro","ID":36, "Unlocked":"March"},
            {"name":"Serpent King Draco","ID":46, "Unlocked":"June"},
            {"name":"Henry, the Scaredy-Ghoul","ID":54, "Unlocked":"October"},
            {"name":"Grandmora","ID":84, "Unlocked":"April/May"}
        ],
        [    // Slot 6:
            {"name":"Detective Kaine","ID":6, "Unlocked":"Base Crusader"},
            {"name":"Mister the Monkey","ID":21, "Unlocked":"October"},
            {"name":"Larry the Leprechaun","ID":35, "Unlocked":"March"},
            {"name":"Bernard the Bartender","ID":71, "Unlocked":"January"},
            {"name":"Zombie Winter","ID":93, "Unlocked":"July"}
        ],
        [    // Slot 7:
            {"name":"The Princess","ID":7, "Unlocked":"Base Crusader"},
            {"name":"RoboTurkey","ID":25, "Unlocked":"November"},
            {"name":"Ranger Rayna","ID":47, "Unlocked":"July"},
            {"name":"Baenarall, Angel of Hope","ID":81, "Unlocked":"April"},
            {"name":"Willy the Weregoat","ID":98, "Unlocked":"September"}
        ],
        [    // Slot 8:
            {"name":"Natalie Dragon","ID":8, "Unlocked":"Base Crusader"},
            {"name":"Jack O'Lantern","ID":24, "Unlocked":"October"},
            {"name":"President Billy Smithsonian","ID":47, "Unlocked":"June/July"},
            {"name":"Karl the Kicker","ID":73, "Unlocked":"January/February"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"}
        ],
        [    // Slot 9:
            {"name":"Jason, Master of Shadows","ID":9, "Unlocked":"Base Crusader"},
            {"name":"Pete the Carney","ID":22, "Unlocked":"October"},
            {"name":"Broot","ID":41, "Unlocked":"April/May"},
            {"name":"Paul the Pilgrim","ID":67, "Unlocked":"November"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"}
        ],
        [    // Slot 10:
            {"name":"Artaxes, the Lion","ID":10, "Unlocked":"Base Crusader"},
            {"name":"Drizzle the Dark Elf","ID":32, "Unlocked":"January/February"},
            {"name":"Bubba, the Swimming Orc","ID":52, "Unlocked":"August"},
            {"name":"Sisaron the Dragon Sorceress","ID":82, "Unlocked":"April"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"}
        ],
        [    // Slot 11:
            {"name":"Khouri, The Witch Doctor","ID":11, "Unlocked":"Base Crusader"},
            {"name":"Momma Kaine","ID":26, "Unlocked":"November"},
            {"name":"Brogon, Prince of Dragons","ID":44, "Unlocked":"May"},
            {"name":"The Half-Blood Elf","ID":63, "Unlocked":"September/October"},
            {"name":"Foresight","ID":80, "Unlocked":"March"}
        ],
        [    // Slot 12:
            {"name":"Dark Gryphon","ID":12, "Unlocked":"Base Crusader"},
            {"name":"Rocky the Rockstar","ID":33, "Unlocked":"February"},
            {"name":"Montana James","ID":45, "Unlocked":"June"},
            {"name":"The Dark Helper","ID":69, "Unlocked":"December"},
            {"name":"Red, the Ace Pilot","ID":90, "Unlocked":"July"}
        ],
        [    // Slot 13:
            {"name":"Sarah, the Collector","ID":13, "Unlocked":"Base Crusader"},
            {"name":"The Metal Soldierette","ID":40, "Unlocked":"April"},
            {"name":"Snickette the Sneaky","ID":77, "Unlocked":"March"},
            {"name":"Sjin the Builder","ID":86, "Unlocked":"June"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"}
        ],
        [    // Slot 14:
            {"name":"Gold Panda","ID":14, "Unlocked":"Base Crusader"},
            {"name":"RoboSanta","ID":27, "Unlocked":"December"},
            {"name":"Leerion, the Royal Dwarf","ID":43, "Unlocked":"May"},
            {"name":"Katie the Cupid","ID":76, "Unlocked":"February"},
            {"name":"The Goldhound","ID":96, "Unlocked":"August/September"}
        ],
        [    // Slot 15:
            {"name":"Prince Sal, the Merman","ID":15, "Unlocked":"Base Crusader"},
            {"name":"Wendy the Witch","ID":23, "Unlocked":"October"},
            {"name":"Robbie Raccoon","ID":42, "Unlocked":"April/May"},
            {"name":"Princess Val the Mermaid","ID":72, "Unlocked":"January"},
            {"name":"Penny the Park Planner","ID":94, "Unlocked":"August"}
        ],
        [    // Slot 16:
            {"name":"Fire Phoenix","ID":16, "Unlocked":"Base Crusader"},
            {"name":"Alan the ArchAngel","ID":37, "Unlocked":"March"},
            {"name":"Fright-o-Tron 4000","ID":65, "Unlocked":"October"},
            {"name":"Spaceking","ID":83, "Unlocked":"April/May"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"}
        ],
        [    // Slot 17:
            {"name":"King Reginald IV","ID":17, "Unlocked":"Base Crusader"},
            {"name":"Queen Siri","ID":30, "Unlocked":"January"},
            {"name":"Mr. Boggins, the Substitute","ID":54, "Unlocked":"September"},
            {"name":"Squiggles the Clown","ID":78, "Unlocked":"March"},
            {"name":"Beary McBearFace","ID":95, "Unlocked":"August"}
        ],
        [    // Slot 18:
            {"name":"Thalia, the Thunder King","ID":18, "Unlocked":"Base Crusader"},
            {"name":"Frosty the Snowman","ID":28, "Unlocked":"December"},
            {"name":"Littlefoot","ID":50, "Unlocked":"July"},
            {"name":"Cindy the Cheer-Orc","ID":74, "Unlocked":"January/February"},
            {"name":"The Exchange Student","ID":99, "Unlocked":"September"}
        ],
        [    // Slot 19:
            {"name":"Merci, the Mad Wizard","ID":19, "Unlocked":"Base Crusader"},
            {"name":"The Bat Billionaire","ID":39, "Unlocked":"April"},
            {"name":"Petra the Pilgrim","ID":68, "Unlocked":"November"},
            {"name":"Polly the Parrot","ID":88, "Unlocked":"May"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"}
        ],
        [    // Slot 20:
            {"name":"Nate Dragon","ID":20, "Unlocked":"Base Crusader"},
            {"name":"Kizlblyp, the Alien Traitor","ID":48, "Unlocked":"June/July"},
            {"name":"Robo-Rudolph","ID":70, "Unlocked":"December"},
            {"name":"Milgrid the Mining Mage","ID":97, "Unlocked":"August/September"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"}
        ],
        [    // Slot 21:
            {"name":"The Exterminator","ID":55, "Unlocked":"Bonus Campaign"},
            {"name":"Gloria, the Good Witch","ID":58, "Unlocked":"Bonus Campaign"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"}
        ],
        [    // Slot 22:
            {"name":"The Shadow Queen","ID":56, "Unlocked":"Bonus Campaign"},
            {"name":"Ilsa, the Insane Wizard","ID":59, "Unlocked":"Bonus Campaign"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"}
        ],
        [    // Slot 23:
            {"name":"Greyskull the Pirate","ID":57, "Unlocked":"Bonus Campaign"},
            {"name":"Eiralon, the Blood Mage","ID":60, "Unlocked":"Bonus Campaign"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"}
        ],
        [    // Slot 24: 
            {"name":"Priestess of Time","ID":61, "Unlocked":"Bonus Campaign"},
            {"name":"Agent 79","ID":91, "Unlocked":"Bonus Campaign"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"}
        ],
        [    // Slot 25:
            {"name":"Chiyome","ID":100, "Unlocked":"October"},
            {"name":"Griz the Robo-Coach","ID":106, "Unlocked":"January/February"},
            {"name":"Biff the Magic Rabbit","ID":109, "Unlocked":"March"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"}
        ],
        [    // Slot 26:
            {"name":"Viktor the Vampire","ID":101, "Unlocked":"October"},
            {"name":"Shenna the Centaur","ID":105, "Unlocked":"January"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"}
        ],
        [    // Slot 27:
            {"name":"Chef Casey","ID":103, "Unlocked":"November"},
            {"name":"Frankie the Demon Crooner","ID":107, "Unlocked":"February"},
            {"name":"Thoonoose","ID":110, "Unlocked":"April"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"}
        ],
        [    // Slot 28:
            {"name":"Xander, the Xmas Dragon","ID":104, "Unlocked":"December"},
            {"name":"Saint Patrokia","ID":108, "Unlocked":"March"},
            {"name":"Rex the Wrestler","ID":111, "Unlocked":"May"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
//            {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"}
        ]
        ];
    var benchSize = 5;
    var benchMax = 28;
    var indexStart = 0;
    var i;
    var j;
    for (i=0; i < benchMax; i++) {// Iterate over total number of Bench Slots
        for (j=0; j < cruName[i].length; j++) {// Iterate within each Bench
            benchTMP = "<option value=\"".concat(cruName[i][j].name)+"\">".concat(cruName[i][j].name)+"</option>";
            benchTMPTwo = benchTMPTwo.concat(benchTMP);
        }
        benchList = "Bench "+(i+1)+": <select onchange=\"updateBench(this.value,"+(i+1)+")\">"+benchTMPTwo+"</select>";
        slotNum = "slot".concat((i+1).toString());
        document.getElementById(slotNum).innerHTML = benchList;
        benchTMPTwo = "";
    }
    }


// Content to generate and update the list of crusaders to choose from to place in formation.

    var currentBenchTMP = ""; // tmp variable for making currentBench list.
    var currentBenchTMPTwo = "";//<option value='Empty'> Empty <\option>"; // tmp variable for making currentBench list.
    var currentBench = ["Empty",
       "Bush Whacker","Jim the Lumberjack","Emo Werewolf","Sasha The Fierce Warrior","The Washed Up Hermit","Detective Kaine",
       "The Princess","Natalie Dragon","Jason, Master of Shadows","Artaxes, the Lion","Khouri, The Witch Doctor","Dark Gryphon",
       "Sarah, the Collector","Gold Panda","Prince Sal, the Merman","Fire Phoenix","King Reginald IV","Thalia, the Thunder King",
       "Merci, the Mad Wizard","Nate Dragon","The Exterminator","The Shadow Queen","Greyskull the Pirate","Priestess of Time",
       "Chiyome","Viktor the Vampire","Chef Casey","Xander, the Xmas Dragon"
       ]



function updateBench(crusader, benchSlot){
    currentBench[benchSlot]=crusader;
    for (i=0; i < currentBench.length; i++) {// Iterate over the entire selection length
        currentBenchTMP = "<option value=".concat(currentBench[i])+">".concat(currentBench[i])+"</option>";
        currentBenchTMPTwo = currentBenchTMPTwo.concat(currentBenchTMP);
        }
//        currentBenchList = "<select>"+currentBenchTMPTwo+"</select>";
    currentBenchList = currentBenchTMPTwo;
    var x = document.getElementsByClassName("currentBenchSelect");// Collect all the elements that are dropdown list for current bench crusaders.
    var j;// Define an iterating Variable
    for (j=0; j < x.length; j++) {// Update the current bench crusaders dropdown list.
        x[j].innerHTML = currentBenchList;
    }
        setSelectedIndex(document.getElementById("WWSlot01"),"Fire Phoenix");// Retain user selection, still not working yet.
    
    currentBenchTMPTwo = "";
//        alert("You tried to update the bench "+ benchSlot + " with crusader " + crusader); // Debugging Code
}

function setSelectedIndex(s, valsearch) {
// Loop through all the items in drop down list
    for (i = 0; i< s.options.length; i++) {
        if (s.options[i].value == valsearch) {
//            alert("This executed at least.");
            // Item is found. Set its property and exit
            s.options[i].selected = true;
            break;
        }
    }
    return;
}
    
var userFormations = {
    'WW':[0,0,0,0,0,0,0,0,0,0] 
    }

function currentSelection(mapID,slotID,benchNum) {
    // First we must parse the value. It should be of the form "MapID"+"slot"+"SlotID"
    var formationStr = "userFormation." + mapID;
    formationStr[slotID] = benchNum;
}
    
    
    