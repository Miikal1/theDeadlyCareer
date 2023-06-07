
class Menu extends Phaser.Scene {
    constructor(){
        super("menu");
    }

    preload() {
        // load audio
        this.load.image('title', 'assets/title.png');
        this.load.image('caseOneButton', 'assets/caseOneButton.png');
        this.load.image('caseTwoButton', 'assets/caseTwoButton.png');
        this.load.image('caseThreeButton', 'assets/caseThreeButton.png');
        this.load.image('caseFourButton', 'assets/caseFourButton.png');
        this.load.image('caseFiveButton', 'assets/caseFiveButton.png');
        this.load.image('executionButton', 'assets/executionButton.png');
        this.load.image('trialButton', 'assets/trialButton.png');
        this.load.image('killerButton', 'assets/killerButton.png');
        this.load.image('finalButton', 'assets/finalButton.png');
      }

    create(){
        
      this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'title').setOrigin(0,0);

        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
             },
            fixedWidth: 0
        }
        
        this.choice = 0;

        var caseOne = this.add.sprite(200, 800, 'caseOneButton').setInteractive();

        caseOne.on('pointerdown', function (pointer) {

          this.scene.start('caseOne');

        }, this);

        var caseTwo = this.add.sprite(500, 800, 'caseTwoButton').setInteractive();

        caseTwo.on('pointerdown', function (pointer) {

          this.scene.start('caseTwo');

        }, this);

        var caseThree = this.add.sprite(800, 800, 'caseThreeButton').setInteractive();

        caseThree.on('pointerdown', function (pointer) {

          this.scene.start('caseThree');

        }, this);

        var caseFour = this.add.sprite(1100, 800, 'caseFourButton').setInteractive();

        caseFour.on('pointerdown', function (pointer) {

          this.scene.start('caseFour');

        }, this);

        var caseFive = this.add.sprite(1400, 800, 'caseFiveButton').setInteractive();

        caseFive.on('pointerdown', function (pointer) {

          this.scene.start('caseFive');

        }, this);

        var killer = this.add.sprite(100, 500, 'killerButton').setInteractive();

        killer.on('pointerdown', function (pointer) {

          this.scene.start('killer');

        }, this);

        var trial = this.add.sprite(1500, 450, 'trialButton').setInteractive();

        trial.on('pointerdown', function (pointer) {

          this.scene.start('trial');

        }, this);

        var execution = this.add.sprite(1500, 550, 'executionButton').setInteractive();

        execution.on('pointerdown', function (pointer) {

          this.scene.start('execution');

        }, this);
    }  

    update() {
     
      if (answered >= 8){

        var final = this.add.sprite(840, 535, 'finalButton').setInteractive();

        final.on('pointerdown', function (pointer) {

          if(picture == false){
            picture = true;
            this.scene.start('questions');
          }

        }, this);

      }
 
    }  

}