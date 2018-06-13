
   function Load_cruTable() {// This loads the crusader Data Table.
//    var myObject = JSON.parse(sessionStorage.myObject);
      var i = 0;
      var st = "<tr>";
      var en = "</tr>";
      var table = "";

     // This is an ordered list, where cruName[5] should be the 5th row crusader.
     cruName = [
       // Slot 1:
       {"name":"Bush Whacker","ID":1, "Unlocked":"Base Crusader"},
       {"name":"RoboRabbit","ID":38, "Unlocked":"March"},
       {"name":"Graham The Driver","ID":66, "Unlocked":"Charity Auction"},
       {"name":"Warwick the Warlock","ID":75, "Unlocked":"February"},
       {"name":"Slisiblyp, the Alien Scientist","ID":89, "Unlocked":"July"},
       // Slot 2:
       {"name":"Jim the Lumberjack","ID":2, "Unlocked":"Base Crusader"},
       {"name":"Pilot Pam","ID":29, "Unlocked":"January"},
       {"name":"Veronica, the Android Archer","ID":51, "Unlocked":"August"},
       {"name":"Arachnobuddy","ID":79, "Unlocked":"March"},
       {"name":"James The Seated","ID":102, "Unlocked":"Charity Auction"},
       // Slot 3:
       {"name":"Emo Werewolf","ID":3, "Unlocked":"Base Crusader"},
       {"name":"Sally the Succubus","ID":34, "Unlocked":"February"},
       {"name":"Karen, the Cat Teenager","ID":53, "Unlocked":"September"},
       {"name":"Turps the Tasty","ID":85, "Unlocked":"June"},
       {"name":"RoboQueen","ID":92, "Unlocked":"July"},
       // Slot 4:
       {"name":"Sasha The Fierce Warrior","ID":4, "Unlocked":"Base Crusader"},
       {"name":"Groklok the Orc","ID":31, "Unlocked":"January/February"},
       {"name":"Mindy the Mime","ID":62, "Unlocked":"September/October"},
       {"name":"Danni the Daring Damsel","ID":87, "Unlocked":"May"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       // Slot 5:
       {"name":"The Washed Up Hermit","ID":5, "Unlocked":"Base Crusader"},
       {"name":"Kyle the Party Bro","ID":36, "Unlocked":"March"},
       {"name":"Serpent King Draco","ID":46, "Unlocked":"June"},
       {"name":"Henry, the Scaredy-Ghoul","ID":54, "Unlocked":"October"},
       {"name":"Grandmora","ID":84, "Unlocked":"April/May"},
       // Slot 6:
       {"name":"Detective Kaine","ID":6, "Unlocked":"Base Crusader"},
       {"name":"Mister the Monkey","ID":21, "Unlocked":"October"},
       {"name":"Larry the Leprechaun","ID":35, "Unlocked":"March"},
       {"name":"Bernard the Bartender","ID":71, "Unlocked":"January"},
       {"name":"Zombie Winter","ID":93, "Unlocked":"July"},
       // Slot 7:
       {"name":"The Princess","ID":7, "Unlocked":"Base Crusader"},
       {"name":"RoboTurkey","ID":25, "Unlocked":"November"},
       {"name":"Ranger Rayna","ID":47, "Unlocked":"July"},
       {"name":"Baenarall, Angel of Hope","ID":81, "Unlocked":"April"},
       {"name":"Willy the Weregoat","ID":98, "Unlocked":"September"},
       // Slot 8:
       {"name":"Natalie Dragon","ID":8, "Unlocked":"Base Crusader"},
       {"name":"Jack O'Lantern","ID":24, "Unlocked":"October"},
       {"name":"President Billy Smithsonian","ID":47, "Unlocked":"June/July"},
       {"name":"Karl the Kicker","ID":73, "Unlocked":"January/February"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       // Slot 9:
       {"name":"Jason, Master of Shadows","ID":9, "Unlocked":"Base Crusader"},
       {"name":"Pete the Carney","ID":22, "Unlocked":"October"},
       {"name":"Broot","ID":41, "Unlocked":"April/May"},
       {"name":"Paul the Pilgrim","ID":67, "Unlocked":"November"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       // Slot 10:
       {"name":"Artaxes, the Lion","ID":10, "Unlocked":"Base Crusader"},
       {"name":"Drizzle the Dark Elf","ID":32, "Unlocked":"January/February"},
       {"name":"Bubba, the Swimming Orc","ID":52, "Unlocked":"August"},
       {"name":"Sisaron the Dragon Sorceress","ID":82, "Unlocked":"April"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       // Slot 11:
       {"name":"Khouri, The Witch Doctor","ID":11, "Unlocked":"Base Crusader"},
       {"name":"Momma Kaine","ID":26, "Unlocked":"November"},
       {"name":"Brogon, Prince of Dragons","ID":44, "Unlocked":"May"},
       {"name":"The Half-Blood Elf","ID":63, "Unlocked":"September/October"},
       {"name":"Foresight","ID":80, "Unlocked":"March"},
       // Slot 12:
       {"name":"Dark Gryphon","ID":12, "Unlocked":"Base Crusader"},
       {"name":"Rocky the Rockstar","ID":33, "Unlocked":"February"},
       {"name":"Montana James","ID":45, "Unlocked":"June"},
       {"name":"The Dark Helper","ID":69, "Unlocked":"December"},
       {"name":"Red, the Ace Pilot","ID":90, "Unlocked":"July"},
       // Slot 13:
       {"name":"Sarah, the Collector","ID":13, "Unlocked":"Base Crusader"},
       {"name":"The Metal Soldierette","ID":40, "Unlocked":"April"},
       {"name":"Snickette the Sneaky","ID":77, "Unlocked":"March"},
       {"name":"Sjin the Builder","ID":86, "Unlocked":"June"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       // Slot 14:
       {"name":"Gold Panda","ID":14, "Unlocked":"Base Crusader"},
       {"name":"RoboSanta","ID":27, "Unlocked":"December"},
       {"name":"Leerion, the Royal Dwarf","ID":43, "Unlocked":"May"},
       {"name":"Katie the Cupid","ID":76, "Unlocked":"February"},
       {"name":"The Goldhound","ID":96, "Unlocked":"August/September"},
       // Slot 15:
       {"name":"Prince Sal, the Merman","ID":15, "Unlocked":"Base Crusader"},
       {"name":"Wendy the Witch","ID":23, "Unlocked":"October"},
       {"name":"Robbie Raccoon","ID":42, "Unlocked":"April/May"},
       {"name":"Princess Val the Mermaid","ID":72, "Unlocked":"January"},
       {"name":"Penny the Park Planner","ID":94, "Unlocked":"August"},
       // Slot 16:
       {"name":"Fire Phoenix","ID":16, "Unlocked":"Base Crusader"},
       {"name":"Alan the ArchAngel","ID":37, "Unlocked":"March"},
       {"name":"Fright-o-Tron 4000","ID":65, "Unlocked":"October"},
       {"name":"Spaceking","ID":83, "Unlocked":"April/May"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       // Slot 17:
       {"name":"King Reginald IV","ID":17, "Unlocked":"Base Crusader"},
       {"name":"Queen Siri","ID":30, "Unlocked":"January"},
       {"name":"Mr. Boggins, the Substitute","ID":54, "Unlocked":"September"},
       {"name":"Squiggles the Clown","ID":78, "Unlocked":"March"},
       {"name":"Beary McBearFace","ID":95, "Unlocked":"August"},
       // Slot 18:
       {"name":"Thalia, the Thunder King","ID":18, "Unlocked":"Base Crusader"},
       {"name":"Frosty the Snowman","ID":28, "Unlocked":"December"},
       {"name":"Littlefoot","ID":50, "Unlocked":"July"},
       {"name":"Cindy the Cheer-Orc","ID":74, "Unlocked":"January/February"},
       {"name":"The Exchange Student","ID":99, "Unlocked":"September"},
       // Slot 19:
       {"name":"Merci, the Mad Wizard","ID":19, "Unlocked":"Base Crusader"},
       {"name":"The Bat Billionaire","ID":39, "Unlocked":"April"},
       {"name":"Petra the Pilgrim","ID":68, "Unlocked":"November"},
       {"name":"Polly the Parrot","ID":88, "Unlocked":"May"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       // Slot 20:
       {"name":"Nate Dragon","ID":20, "Unlocked":"Base Crusader"},
       {"name":"Kizlblyp, the Alien Traitor","ID":48, "Unlocked":"June/July"},
       {"name":"Robo-Rudolph","ID":70, "Unlocked":"December"},
       {"name":"Milgrid the Mining Mage","ID":97, "Unlocked":"August/September"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       // Slot 21:
       {"name":"The Exterminator","ID":55, "Unlocked":"Bonus Campaign"},
       {"name":"Gloria, the Good Witch","ID":58, "Unlocked":"Bonus Campaign"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       // Slot 22:
       {"name":"The Shadow Queen","ID":56, "Unlocked":"Bonus Campaign"},
       {"name":"Ilsa, the Insane Wizard","ID":59, "Unlocked":"Bonus Campaign"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       // Slot 23:
       {"name":"Greyskull the Pirate","ID":57, "Unlocked":"Bonus Campaign"},
       {"name":"Eiralon, the Blood Mage","ID":60, "Unlocked":"Bonus Campaign"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       // Slot 24: 
       {"name":"Priestess of Time","ID":61, "Unlocked":"Bonus Campaign"},
       {"name":"Agent 79","ID":91, "Unlocked":"Bonus Campaign"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       // Slot 25:
       {"name":"Chiyome","ID":100, "Unlocked":"October"},
       {"name":"Griz the Robo-Coach","ID":106, "Unlocked":"January/February"},
       {"name":"Biff the Magic Rabbit","ID":109, "Unlocked":"March"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       // Slot 26:
       {"name":"Viktor the Vampire","ID":101, "Unlocked":"October"},
       {"name":"Shenna the Centaur","ID":105, "Unlocked":"January"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       // Slot 27:
       {"name":"Chef Casey","ID":103, "Unlocked":"November"},
       {"name":"Frankie the Demon Crooner","ID":107, "Unlocked":"February"},
       {"name":"Thoonoose","ID":110, "Unlocked":"April"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       // Slot 28:
       {"name":"Xander, the Xmas Dragon","ID":104, "Unlocked":"December"},
       {"name":"Saint Patrokia","ID":108, "Unlocked":"March"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"},
       {"name":"Not Implemented","ID":0, "Unlocked":"Not Implemented"}
       ];
localStorage.crusaderData = JSON.stringify(cruName);

    //cruData = {hero:[{"cruID":0,"EP":0,"Owned":"No","GearName1":"Empty","GearRarity1":"Empty","GearName2":"Empty","GearRarity2":"Empty","GearName3":"Empty","GearRarity3":"Empty"}]}


    for (i=0; i < cruName.length; i++) {
      var indexID = cruName[i].ID;
      var cellNameTmp = "<td>"+cruName[i].name +"</td>";
      var cellEPTmp = "<td>"+cruData.hero[indexID].EP +"</td>";
      var cellGN1Tmp ="<td id=cruGN1_"+i+">".concat(cruData.hero[indexID].GearName1) +"</td>";
      var cellGR1tmp ="<td id=cruGR1_"+i+">".concat(cruData.hero[indexID].GearRarity1) +"</td>";
      var cellGN2Tmp ="<td id=cruGN2_"+i+">".concat(cruData.hero[indexID].GearName2) +"</td>";
      var cellGR2Tmp ="<td id=cruGR2_"+i+">".concat(cruData.hero[indexID].GearRarity2) +"</td>";
      var cellGN3Tmp ="<td id=cruGN3_"+i+">".concat(cruData.hero[indexID].GearName3) +"</td>";
      var cellGR3Tmp ="<td id=cruGR3_"+i+">".concat(cruData.hero[indexID].GearRarity3) +"</td>";
      var cellOwned ="<td id=cruOwned_"+i+">".concat(cruData.hero[indexID].Owned) +"</td>";

      var rowTmp = st.concat(cellNameTmp,cellEPTmp,cellGN1Tmp,cellGR1tmp,cellGN2Tmp,cellGR2Tmp,cellGN3Tmp,cellGR3Tmp,cellOwned,en);


      var table = table.concat(rowTmp);
/*
      if (i==18||i==37||i==41||i==45||i==59||i==73||i==87||i==91||i==100||i==101||i==102){
        var table = table.concat(st,"<td> Not Implemented </td> <td> 0 </td> <td>Empty</td> <td> Empty </td> <td>Empty</td> <td> Empty </td> <td>Empty</td> <td> Empty </td> <td> Not Implemented </td>",en);
        }
      if (i==93|i==95|i==97|i==99|i==100|i==101|i==102){
        var dummyrow = st.concat("<td> Not Implemented </td> <td> 0 </td> <td>Empty</td> <td> Empty </td> <td>Empty</td> <td> Empty </td> <td>Empty</td> <td> Empty </td> <td> Not Implemented </td>",en);
                                              table = table.concat(dummyrow,dummyrow,dummyrow);
                                             }
*/
}

    document.getElementById("cruTable").innerHTML = table;
    document.getElementById("demo").innerHTML = "I think the fourth crusader has ep: ";// + cruData.hero[4].EP;

   };

/*
 *
 *
 *    MASTER PARSE FUNCTION
 *      This function calls all the other parse functions and allocates values.
 *
 *
 */

function Parse_Data() {

  // Initital Variables

userRawTMP = document.getElementById("User_Input").value; // Grab string out of submitted data
userRaw = JSON.parse(userRawTMP); // Convert string into JSON format

Parse_CruTab();// Parse the crusader table to get all crusader info needed to fill out the table with player data.
Parse_Talents();// Parse the talents list to populate the talent list.


//  sessionStorage.myObject = JSON.stringify(myObject);
localStorage.crusaderData = JSON.stringify(cruData);
document.getElementById("demo").innerHTML = "You've successfully parsed your data!";
}

/*
 *
 *    END OF MASTER PARSE FUNCTION
 *
 */



function Parse_CruTab() {// This parses Gear and Crusader info for the display table.

  // Build database structure for internal usage.

  cruData = {hero:[{"cruID":0,"EP":0,"Owned":"No","GearName1":"Empty","GearRarity1":"Empty","GearName2":"Empty","GearRarity2":"Empty","GearName3":"Empty","GearRarity3":"Empty"}]};


  var i = 0;
  var cruIndex = 0;
  var itemIndex = 0;
  var GNTmp1 = "Empty";
  var GRTmp1 = "Empty";
  var GNTmp2 = "Empty";
  var GRTmp2 = "Empty";
  var GNTmp3 = "Empty";
  var GRTmp3 = "Empty";
  var lootIDList = [];


  for (cruIndex = 0; cruIndex < userRaw.details.heroes.length; cruIndex++){


    /*
    Now we need EP and Names
    */
      var crName = userRaw.details.heroes[cruIndex].name;
      var crEP = userRaw.details.heroes[cruIndex].disenchant;
    if (userRaw.details.heroes[cruIndex].owned == 1) {
      var crOwned = "Yes";
        }
    else {
      var crOwned = "No";
      };

      
      cruData.hero.push({"cruID":crName,"EP":crEP, "Owned":crOwned,"GearName1":GNTmp1,"GearRarity1":GRTmp1,"GearName2":GNTmp2,"GearRarity2":GRTmp2,"GearName3":GNTmp3,"GearRarity3":GRTmp3});
    /*
    Now we reset the variables for the next gear search
    */
/*    var GNTmp1 = "Empty";
    var GRTmp1 = "Empty";
    var GNTmp2 = "Empty";
    var GRTmp2 = "Empty";
    var GNTmp3 = "Empty";
    var GRTmp3 = "Empty";
*/
  };



  for (cruIndex = 0; cruIndex < userRaw.details.loot.length; cruIndex++) {
/*   */

    var lootId = userRaw.details.loot[cruIndex].loot_id;
    var lootTableIdx = -1;
    var j;
    var HeroId;

    for ( j = 0; j < gameTables.lootTable.length; ++j ) {
       if ( gameTables.lootTable[j].id == lootId ) {
          lootTableIdx = j;
       }
    }

    if ( lootTableIdx >= 0 ) {
// Track which Hero the item belongs to:
      HeroId = gameTables.lootTable[lootTableIdx].hero_id;

// Calculate and track the correct Rarity of the item:
      if (gameTables.lootTable[lootTableIdx].rarity == 1) {
        lootRarity = "Common";
      }
      else if (gameTables.lootTable[lootTableIdx].rarity == 2) {
        lootRarity = "Uncommon";
      }
      else if (gameTables.lootTable[lootTableIdx].rarity == 3) {
        lootRarity = "Rare";
      }
      else if (gameTables.lootTable[lootTableIdx].rarity == 4) {
        lootRarity = "Epic";
      }
      else if (gameTables.lootTable[lootTableIdx].rarity == 5) {
        lootRarity = "Legendary L("+userRaw.details.loot[cruIndex].count+")";
      }
      
// Assign gear info to the loot display table:
      if ( gameTables.lootTable[lootTableIdx].slot_id == 1 ) {
        cruData.hero[HeroId].GearName1 = gameTables.lootTable[lootTableIdx].name;
        cruData.hero[HeroId].GearRarity1 = lootRarity;
      }
      else if ( gameTables.lootTable[lootTableIdx].slot_id == 2 ) {
        cruData.hero[HeroId].GearName2 = gameTables.lootTable[lootTableIdx].name;
        cruData.hero[HeroId].GearRarity2 = lootRarity;
      }
      else if ( gameTables.lootTable[lootTableIdx].slot_id == 3 ) {
        cruData.hero[HeroId].GearName3 = gameTables.lootTable[lootTableIdx].name;
        cruData.hero[HeroId].GearRarity3 = lootRarity;
      }
    }
  }

}

function Parse_Talents() {
// This function will extract and parse the info from the raw input to fill out a talent table.

//initialize the Talents structure
cruData.talents=[{"talentID":1, "talentName":"spendItAll", "talentCurrentLevel":0, "talentMaxLevel":1},
                         {"talentID":2, "talentName":"speedLooter", "talentCurrentLevel":0, "talentMaxLevel":1},
                         {"talentID":3, "talentName":"passiveCriticals", "talentCurrentLevel":0, "talentMaxLevel":50},
                         {"talentID":4, "talentName":"surplusCooldown", "talentCurrentLevel":0, "talentMaxLevel":50},
                         {"talentID":5, "talentName":"overenchanted", "talentCurrentLevel":0, "talentMaxLevel":50},
                         {"talentID":6, "talentName":"setBonus", "talentCurrentLevel":0, "talentMaxLevel":50},
                         {"talentID":7, "talentName":"enduranceTraining", "talentCurrentLevel":0, "talentMaxLevel":25},
                         {"talentID":8, "talentName":"timeORama", "talentCurrentLevel":0, "talentMaxLevel":20},
                         {"talentID":9, "talentName":"scavenger", "talentCurrentLevel":0, "talentMaxLevel":50},
                         {"talentID":10, "talentName":"sharingIsCaring", "talentCurrentLevel":0, "talentMaxLevel":14},
                         {"talentID":11, "talentName":"massiveCriticals", "talentCurrentLevel":0, "talentMaxLevel":25},
                         {"talentID":12, "talentName":"goldOSplosion", "talentCurrentLevel":0, "talentMaxLevel":25},
                         {"talentID":13, "talentName":"rideTheStorm", "talentCurrentLevel":0, "talentMaxLevel":25},
                         {"talentID":14, "talentName":"stormsBuilding", "talentCurrentLevel":0, "talentMaxLevel":15},
                         {"talentID":15, "talentName":"fastLearners", "talentCurrentLevel":0, "talentMaxLevel":18},
                         {"talentID":16, "talentName":"wellEquipped", "talentCurrentLevel":0, "talentMaxLevel":50},
                         {"talentID":17, "talentName":"swapDay", "talentCurrentLevel":0, "talentMaxLevel":50},
                         {"talentID":18, "talentName":"upgradeThemAll", "talentCurrentLevel":0, "talentMaxLevel":1},
                         {"talentID":19, "talentName":"efficientCrusading", "talentCurrentLevel":0, "talentMaxLevel":25},
                         {"talentID":20, "talentName":"deepIdolScavenger", "talentCurrentLevel":0, "talentMaxLevel":25},
                         {"talentID":21, "talentName":"doingItAgain", "talentCurrentLevel":0, "talentMaxLevel":1},
                         {"talentID":22, "talentName":"tripleTierTrouble", "talentCurrentLevel":0, "talentMaxLevel":1},
                         {"talentID":23, "talentName":"extraTraining", "talentCurrentLevel":0, "talentMaxLevel":40},
                         {"talentID":24, "talentName":"sniper", "talentCurrentLevel":0, "talentMaxLevel":40},
                         {"talentID":25, "talentName":"speedRunner", "talentCurrentLevel":0, "talentMaxLevel":20},
                         {"talentID":26, "talentName":"everyLastCent", "talentCurrentLevel":0, "talentMaxLevel":20},
                         {"talentID":27, "talentName":"extendedSpawns", "talentCurrentLevel":0, "talentMaxLevel":40},
                         {"talentID":28, "talentName":"Clicktastrophy", "talentCurrentLevel":0, "talentMaxLevel":40},
                         {"talentID":29, "talentName":"InstantSatisfaction", "talentCurrentLevel":0, "talentMaxLevel":21},
                         {"talentID":30, "talentName":"IdleIncreases", "talentCurrentLevel":0, "talentMaxLevel":40},
                         {"talentID":31, "talentName":"LegendaryBenefits", "talentCurrentLevel":0, "talentMaxLevel":50},
                         {"talentID":32, "talentName":"IdolsOverTime", "talentCurrentLevel":0, "talentMaxLevel":20},
                         {"talentID":33, "talentName":"SprintMode", "talentCurrentLevel":0, "talentMaxLevel":10},
                         {"talentID":34, "talentName":"SuperiorTraining", "talentCurrentLevel":0, "talentMaxLevel":80},
                         {"talentID":35, "talentName":"FourthsTimetheCharm", "talentCurrentLevel":0, "talentMaxLevel":1},
                         {"talentID":36, "talentName":"missionAdrenaline", "talentCurrentLevel":0, "talentMaxLevel":50},
                         {"talentID":37, "talentName":"LingeringBuffs", "talentCurrentLevel":0, "talentMaxLevel":10},
                         {"talentID":38, "talentName":"Omniclicking", "talentCurrentLevel":0, "talentMaxLevel":25},
                         {"talentID":39, "talentName":"CheerSquad", "talentCurrentLevel":0, "talentMaxLevel":50},
                         {"talentID":40, "talentName":"valuableExperience", "talentCurrentLevel":0, "talentMaxLevel":45},
                         {"talentID":41, "talentName":"everyLittleBitHelps", "talentCurrentLevel":0, "talentMaxLevel":500},
                         {"talentID":42, "talentName":"idolChamps", "talentCurrentLevel":0, "talentMaxLevel":40},
                         {"talentID":43, "talentName":"10kTraining", "talentCurrentLevel":0, "talentMaxLevel":80},
                         {"talentID":44, "talentName":"bonusTraining", "talentCurrentLevel":0, "talentMaxLevel":27}
                        ];
  //Now we want to populate the talent list.
    var j
    for ( j = 0; j < 44; ++j ) {
      var index = j+1;
      cruData.talents[j].talentCurrentLevel = userRaw.details.talents[index];
    }
 
}




























