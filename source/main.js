console.log("Hello from main.js");

// Michael Jasper, Modded Rocket Patrol: Multi-Player Color Matching, 4-19-2022, completed in 5 days

let config = {
    type: Phaser.Canvas,
    debug: true,
    width: 1680,
    height: 930,
    scene: [Menu, CaseOne, CaseTwo, CaseThree, CaseFour, CaseFive, Killer, Trial, Execution, Questions,]
};

let keyA, keyD, keyW, keyLEFT, keyRIGHT, keyUP, keyR;

let borderUISize = config.height / 15;
let borderPadding = borderUISize / 3;

let corrects = 0;
let answered = 0;

let daughterQuestion = false;
let ageQuestion = false;
let itemQuestion = false;
let deathTimeQuestion = false;
let desireQuestion = false;
let jobQuestion = false;
let friendQuestion = false;
let sayingQuestion = false;

let daughterFound = false;
let ageFound  = false;
let itemFound  = false;
let deathTimeFound  = false;
let desireFound  = false;
let jobFound  = false;
let friendFound  = false;
let sayingFound  = false;

let picture = false;

let game = new Phaser.Game(config);