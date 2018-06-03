# COTLICalc
DPS calculator built with js and html

Disclaimer: This is a html/js driven dps calc for Crusaders of the Lost Idols. It is a project I have started, purely for fun and to learn how to code better/more in js and html. Updates to this are entirely based upon when I feel like working on it, so don't get upset if it's not up to date with the latest crusaders and/or talents, etc.

If you would like to use this code, it is all open-source here on github and you are welcome to use it however you would like, just please credit me for the base code. If you would like to contribute to the project, your best bet is to [fork this project](https://help.github.com/articles/fork-a-repo/) to your own github account so you can make changes and then perform a "[pull request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)" which will allow me to update my code with your additions.

As I make new changes I will try to make commits that accurately depict the new features. As major benchmarks are done, I will make a note of them in the changelog below.


## Priority To-Do items

* Start the DPS calc; this involves deciding on archetecture of the dps calculations to improve efficiency and sanity of calculations. Among other decisions are;
* How to determine adjacency, furthest slots, and closest slots. This might be better to hard-code for a given freeplay, even though that would be a monumental pain to initialize, but would vastly speed up the calculations later.
* How to determine the buffs; eg tied to position, to crusader, or a hybrid of both.
* How to determine types of buffs; eg a vector of "global" buffs, vs slot specific, vs tag specific, etc, or just calc everything dunamically and assign. The more it's broken up, the easier it would be to change only what is necessary however, which will result in faster calculations.

* Talent Calcs, need the parser (should be easy since it's included in a specific line of the raw JSON), and then an interface/page to display the results to the player, as well as the ability to modify them for the player to "test" different talent configs.

* Crafting: Currently the parser assigns the current levels and gear of the player, but this should be something that is adjustable by the player to test different crafting setups.



## Changelog

v0.1: First push to Github. 
#### Currently functioning: 
* User raw input of JSON string from the addon "[Crusader Automation](https://chrome.google.com/webstore/detail/crusaders-automaton/dhlljphpeodbcliiafbedkbkiifdgdjk)" (same extension used for Fantamondi) can be imported and saved as a relavant JSON string and contained in local cache to be used.
* Crusader Equipment, EP, Owned or not are parsed from Raw input
* Formation Calc main page barebones design is done for World's Wake only.
* Crusaders allocated by benchslot, with dynamic bench slot selection and propogated selection options sent to the formation crusader choices is completed. Currently this doesn't prevent the same crusader from being placed in more than one slot simultaneously however.
    
    
